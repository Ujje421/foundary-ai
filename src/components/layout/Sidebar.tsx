import { NavLink, useLocation } from 'react-router-dom';
import {
  Inbox,
  Layout,
  Users,
  Code2,
  FileText,
  PieChart,
  Settings,
  Search,
  Plus,
  Briefcase
} from 'lucide-react';

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  onOpenCommand: () => void;
}

export function Sidebar({ collapsed, onToggle, onOpenCommand }: SidebarProps) {
  const location = useLocation();

  const navItems = [
    { label: 'Inbox', icon: Inbox, path: '/dashboard', shortcut: 'I' },
    { label: 'Interviews', icon: Users, path: '/interviews', shortcut: 'V' },
    { label: 'Coding Lab', icon: Code2, path: '/coding', shortcut: 'C' },
    { label: 'Resumes', icon: FileText, path: '/resume', shortcut: 'R' },
    { label: 'Pipeline', icon: Briefcase, path: '/recruiter', shortcut: 'P' },
    { label: 'Analytics', icon: PieChart, path: '/analytics', shortcut: 'A' },
  ];

  return (
    <aside className="sidebar" style={{ width: collapsed ? 'var(--sidebar-width-collapsed)' : 'var(--sidebar-width)', transition: 'width var(--duration-normal)', borderRight: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface)', display: 'flex', flexDirection: 'column', flexShrink: 0, height: '100vh' }}>
      
      {/* Workspace Switcher */}
      <div style={{ height: 'var(--topbar-height)', display: 'flex', alignItems: 'center', padding: collapsed ? '0' : '0 var(--space-4)', justifyContent: collapsed ? 'center' : 'space-between', borderBottom: '1px solid var(--color-border)', flexShrink: 0 }}>
        {collapsed ? (
          <div className="avatar avatar-sm" style={{ background: 'var(--color-text-primary)', color: 'var(--color-bg)' }}>
            <div className="avatar-fallback">F</div>
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', cursor: 'pointer', flex: 1 }}>
            <div className="avatar avatar-sm" style={{ background: 'var(--color-text-primary)', color: 'var(--color-bg)' }}>
              <div className="avatar-fallback">F</div>
            </div>
            <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)', color: 'var(--color-text-primary)' } as React.CSSProperties}>Foundry AI</span>
            <span style={{ marginLeft: 'auto', fontSize: '10px', color: 'var(--color-text-tertiary)' }}>v2.0</span>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      {!collapsed && (
        <div style={{ padding: 'var(--space-3)', display: 'flex', gap: 'var(--space-2)' }}>
          <button className="btn btn-secondary" style={{ flex: 1, justifyContent: 'flex-start', padding: '0 var(--space-2)' }} onClick={onOpenCommand}>
            <Search size={14} style={{ color: 'var(--color-text-tertiary)' }} />
            <span style={{ color: 'var(--color-text-secondary)' }}>Search...</span>
            <div className="kbd-group" style={{ marginLeft: 'auto' }}>
              <kbd className="kbd">⌘</kbd><kbd className="kbd">K</kbd>
            </div>
          </button>
          <button className="btn-icon" style={{ border: '1px solid var(--color-border)' }}>
            <Plus size={14} />
          </button>
        </div>
      )}
      
      {collapsed && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 'var(--space-3) 0', gap: 'var(--space-2)' }}>
          <button className="btn-icon" onClick={onOpenCommand} title="Search (⌘K)">
            <Search size={14} />
          </button>
          <button className="btn-icon" title="New Issue">
            <Plus size={14} />
          </button>
        </div>
      )}

      {/* Nav Menu */}
      <nav style={{ flex: 1, padding: collapsed ? 'var(--space-2) 0' : 'var(--space-2) var(--space-3)', display: 'flex', flexDirection: 'column', gap: '2px', overflowY: 'auto' }}>
        {!collapsed && <div className="heading-subsection" style={{ padding: 'var(--space-4) var(--space-2) var(--space-1) var(--space-2)' }}>Views</div>}
        
        {navItems.map((item) => {
          const isActive = location.pathname.startsWith(item.path);
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className="sidebar-link"
              style={{
                display: 'flex',
                alignItems: 'center',
                height: 28,
                padding: collapsed ? '0' : '0 var(--space-2)',
                justifyContent: collapsed ? 'center' : 'flex-start',
                gap: 'var(--space-2)',
                borderRadius: 'var(--radius-sm)',
                textDecoration: 'none',
                color: isActive ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                backgroundColor: isActive ? 'var(--color-surface-hover)' : 'transparent',
              }}
            >
              <item.icon size={14} style={{ opacity: isActive ? 1 : 0.7 }} />
              {!collapsed && (
                <>
                  <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)' } as React.CSSProperties}>{item.label}</span>
                  {item.shortcut && (
                    <span style={{ marginLeft: 'auto', fontSize: '10px', color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-mono)' }}>
                      {item.shortcut}
                    </span>
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div style={{ padding: collapsed ? 'var(--space-3) 0' : 'var(--space-3)', borderTop: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column', alignItems: collapsed ? 'center' : 'stretch', gap: '2px' }}>
        <NavLink
          to="/settings"
          style={{
            display: 'flex',
            alignItems: 'center',
            height: 28,
            padding: collapsed ? '0' : '0 var(--space-2)',
            justifyContent: collapsed ? 'center' : 'flex-start',
            gap: 'var(--space-2)',
            borderRadius: 'var(--radius-sm)',
            textDecoration: 'none',
            color: 'var(--color-text-secondary)',
          }}
        >
          <Settings size={14} />
          {!collapsed && <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)' } as React.CSSProperties}>Settings</span>}
        </NavLink>
        <button 
          onClick={onToggle}
          style={{
            display: 'flex',
            alignItems: 'center',
            height: 28,
            padding: collapsed ? '0' : '0 var(--space-2)',
            justifyContent: collapsed ? 'center' : 'flex-start',
            gap: 'var(--space-2)',
            borderRadius: 'var(--radius-sm)',
            border: 'none',
            background: 'transparent',
            color: 'var(--color-text-tertiary)',
            cursor: 'pointer',
            textAlign: 'left'
          }}
        >
          <Layout size={14} style={{ transform: collapsed ? 'rotate(180deg)' : 'none' }} />
          {!collapsed && <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)' } as React.CSSProperties}>Collapse</span>}
        </button>
      </div>
    </aside>
  );
}
