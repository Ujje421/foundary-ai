import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search, MessageSquare, Code2, FileText, Mic, LayoutDashboard,
  BarChart3, Settings, PanelLeft, Bell
} from 'lucide-react';
import { commandItems } from '../../data/mockData';

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  MessageSquare, Code2, FileText, Mic, LayoutDashboard,
  BarChart3, Settings, PanelLeft, Bell, Search,
};

interface CommandPaletteProps {
  onClose: () => void;
}

export function CommandPalette({ onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const filtered = commandItems.filter(item =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  // Group by category
  const grouped = filtered.reduce<Record<string, typeof commandItems>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  const flatItems = Object.values(grouped).flat();

  const executeItem = useCallback((item: typeof commandItems[0]) => {
    onClose();
    // Map command actions to navigation
    const navMap: Record<string, string> = {
      'Go to Dashboard': '/dashboard',
      'Go to Interview Studio': '/interviews',
      'Go to Coding Lab': '/coding',
      'Go to Analytics': '/analytics',
      'Go to Settings': '/settings',
      'Start Mock Interview': '/interviews',
      'Start Coding Challenge': '/coding',
      'Analyze Resume': '/resume',
      'Start Voice Interview': '/voice',
    };
    const path = navMap[item.label];
    if (path) navigate(path);
  }, [navigate, onClose]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    setHighlightedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setHighlightedIndex(prev => Math.min(prev + 1, flatItems.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setHighlightedIndex(prev => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter' && flatItems[highlightedIndex]) {
        e.preventDefault();
        executeItem(flatItems[highlightedIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [highlightedIndex, flatItems, executeItem]);

  let itemIndex = -1;

  return (
    <div className="cmd-overlay" onClick={onClose}>
      <div className="cmd-palette" onClick={e => e.stopPropagation()}>
        <div className="cmd-input-wrapper">
          <Search size={18} />
          <input
            ref={inputRef}
            className="cmd-input"
            placeholder="Type a command or search..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>

        <div className="cmd-results">
          {Object.entries(grouped).map(([category, items]) => (
            <div key={category} className="cmd-group">
              <div className="cmd-group-label">{category}</div>
              {items.map(item => {
                itemIndex++;
                const currentIndex = itemIndex;
                const Icon = iconMap[item.icon];
                return (
                  <div
                    key={item.id}
                    className={`cmd-item${currentIndex === highlightedIndex ? ' highlighted' : ''}`}
                    onClick={() => executeItem(item)}
                    onMouseEnter={() => setHighlightedIndex(currentIndex)}
                  >
                    {Icon && <Icon size={15} />}
                    <span className="cmd-item-label">{item.label}</span>
                    {item.shortcut && (
                      <span className="cmd-item-shortcut">
                        {item.shortcut.split(' ').map((k, i) => (
                          <span key={i} className="kbd">{k}</span>
                        ))}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          ))}

          {flatItems.length === 0 && (
            <div className="empty-state" style={{ padding: 'var(--space-8) var(--space-4)' }}>
              <div className="empty-state-title">No results found</div>
              <div className="empty-state-description">Try a different search term</div>
            </div>
          )}
        </div>

        <div className="cmd-footer">
          <div className="cmd-footer-actions">
            <span className="cmd-footer-action">
              <span className="kbd">↵</span> Open
            </span>
            <span className="cmd-footer-action">
              <span className="kbd">↑↓</span> Navigate
            </span>
            <span className="cmd-footer-action">
              <span className="kbd">Esc</span> Close
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
