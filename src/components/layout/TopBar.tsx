import { useNavigate } from 'react-router-dom';
import { Search, Bell, ChevronRight } from 'lucide-react';
import { notifications } from '../../data/mockData';

interface TopBarProps {
  breadcrumbs: { label: string; path?: string }[];
  onOpenCommand: () => void;
  onOpenNotifications: () => void;
}

export function TopBar({ breadcrumbs, onOpenCommand, onOpenNotifications }: TopBarProps) {
  const navigate = useNavigate();
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <header className="topbar">
      <div className="topbar-left">
        <nav className="topbar-breadcrumbs">
          <span
            className="topbar-breadcrumb"
            onClick={() => navigate('/dashboard')}
          >
            Foundry AI
          </span>
          {breadcrumbs.map((crumb, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-1)' }}>
              <ChevronRight size={12} className="topbar-breadcrumb-sep" />
              {crumb.path ? (
                <span
                  className="topbar-breadcrumb"
                  onClick={() => navigate(crumb.path!)}
                >
                  {crumb.label}
                </span>
              ) : (
                <span className="topbar-breadcrumb current">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>

      <div className="topbar-right">
        <button className="topbar-search-btn" onClick={onOpenCommand}>
          <Search size={13} />
          <span>Search...</span>
          <span className="kbd-group" style={{ marginLeft: 'auto' }}>
            <span className="kbd">⌘</span>
            <span className="kbd">K</span>
          </span>
        </button>

        <button className="btn-icon topbar-notification-btn" onClick={onOpenNotifications}>
          <Bell size={16} />
          {unreadCount > 0 && <span className="topbar-notification-badge" />}
        </button>
      </div>
    </header>
  );
}
