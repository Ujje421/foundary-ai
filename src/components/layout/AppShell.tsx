import { useState, useCallback, useEffect, type ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { CommandPalette } from './CommandPalette';
import { NotificationPanel } from './NotificationPanel';

interface AppShellProps {
  children: ReactNode;
  breadcrumbs?: { label: string; path?: string }[];
  fullWidth?: boolean;
}

export function AppShell({ children, breadcrumbs = [], fullWidth = false }: AppShellProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setSidebarCollapsed(prev => !prev);
  }, []);

  const toggleCommand = useCallback(() => {
    setCommandOpen(prev => !prev);
  }, []);

  const toggleNotifications = useCallback(() => {
    setNotificationsOpen(prev => !prev);
  }, []);

  // Global keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + K → Command palette
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        toggleCommand();
      }
      // Cmd/Ctrl + B → Toggle sidebar
      if ((e.metaKey || e.ctrlKey) && e.key === 'b') {
        e.preventDefault();
        toggleSidebar();
      }
      // Escape → Close overlays
      if (e.key === 'Escape') {
        setCommandOpen(false);
        setNotificationsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleCommand, toggleSidebar]);

  return (
    <div className={`app-shell${sidebarCollapsed ? ' sidebar-collapsed' : ''}`}>
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={toggleSidebar}
        onOpenCommand={toggleCommand}
      />

      <div className="main-content">
        <TopBar
          breadcrumbs={breadcrumbs}
          onOpenCommand={toggleCommand}
          onOpenNotifications={toggleNotifications}
        />

        <main className={fullWidth ? 'pane-layout' : 'page-canvas'}>
          {children}
        </main>
      </div>

      {commandOpen && (
        <CommandPalette onClose={() => setCommandOpen(false)} />
      )}

      {notificationsOpen && (
        <NotificationPanel onClose={() => setNotificationsOpen(false)} />
      )}
    </div>
  );
}
