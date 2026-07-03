import { Check, X } from 'lucide-react';
import { AppShell } from '../components/layout/AppShell';
import { notifications } from '../data/mockData';

export function NotificationsPage() {
  return (
    <AppShell breadcrumbs={[{ label: 'Notifications' }]}>
      <div style={{ width: '100%' }}>
        <div className="page-header">
          <div className="page-header-left">
            <h1 className="page-title">Notifications</h1>
            <p className="page-subtitle">Manage your alerts and activity updates</p>
          </div>
          <div className="page-header-right">
            <button className="btn btn-secondary"><Check size={14} /> Mark all read</button>
          </div>
        </div>

        <div className="card">
          <div style={{ padding: 0 }}>
            {notifications.map((notif, i) => (
              <div
                key={notif.id}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 'var(--space-4)',
                  padding: 'var(--space-4)',
                  borderBottom: i < notifications.length - 1 ? '1px solid var(--color-border)' : 'none',
                  background: notif.read ? 'transparent' : 'var(--color-primary-subtle)',
                }}
              >
                <div style={{
                  width: 8, height: 8, borderRadius: 'var(--radius-full)',
                  background: notif.read ? 'transparent' : 'var(--color-primary)',
                  marginTop: 6, flexShrink: 0
                }} />
                
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-1)' }}>
                    <div style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--weight-medium)', color: 'var(--color-text-primary)' } as React.CSSProperties}>
                      {notif.title}
                    </div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-tertiary)', whiteSpace: 'nowrap' }}>
                      {notif.time}
                    </div>
                  </div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
                    {notif.description}
                  </div>
                  
                  {notif.type === 'system' && (
                    <div style={{ marginTop: 'var(--space-3)' }}>
                      <button className="btn btn-secondary btn-sm">View Details</button>
                    </div>
                  )}
                </div>
                
                <button className="btn-icon" style={{ opacity: 0.5 }}>
                  <X size={14} />
                </button>
              </div>
            ))}
            {notifications.length === 0 && (
              <div style={{ padding: 'var(--space-12)', textAlign: 'center', color: 'var(--color-text-tertiary)' }}>
                You have no notifications.
              </div>
            )}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
