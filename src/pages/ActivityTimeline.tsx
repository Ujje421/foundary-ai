import { Filter, Search } from 'lucide-react';
import { AppShell } from '../components/layout/AppShell';
import { activityFeed } from '../data/mockData';

export function ActivityTimeline() {
  return (
    <AppShell breadcrumbs={[{ label: 'Activity Timeline' }]}>
      <div style={{ width: '100%' }}>
        <div className="page-header">
          <div className="page-header-left">
            <h1 className="page-title">Activity Timeline</h1>
            <p className="page-subtitle">Track all events across your workspace</p>
          </div>
          <div className="page-header-right">
            <div className="search-input-wrapper" style={{ width: 240 }}>
              <Search size={14} />
              <input className="search-input" placeholder="Search activity..." />
            </div>
            <button className="btn btn-secondary"><Filter size={14} /> Filter</button>
          </div>
        </div>

        <div className="card">
          <div style={{ padding: 'var(--space-6)' }}>
            <div style={{ position: 'relative' }}>
              {/* Vertical Line */}
              <div style={{ position: 'absolute', top: 0, bottom: 0, left: 19, width: 2, background: 'var(--color-border)', zIndex: 0 }} />
              
              {activityFeed.map((activity, i) => (
                <div key={activity.id} style={{ display: 'flex', gap: 'var(--space-4)', marginBottom: i === activityFeed.length - 1 ? 0 : 'var(--space-6)', position: 'relative', zIndex: 1 }}>
                  <div className="avatar avatar-md" style={{ border: '2px solid var(--color-bg)', flexShrink: 0 }}>
                    <div className="avatar-fallback">{activity.user.split(' ').map(n => n[0]).join('')}</div>
                  </div>
                  
                  <div style={{ flex: 1, paddingBottom: i === activityFeed.length - 1 ? 0 : 'var(--space-2)' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-2)', marginBottom: 'var(--space-1)' }}>
                      <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)', color: 'var(--color-text-primary)' } as React.CSSProperties}>{activity.user}</span>
                      <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>{activity.action}</span>
                      <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)', color: 'var(--color-text-primary)' } as React.CSSProperties}>{activity.target}</span>
                    </div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-tertiary)' }}>{activity.time}</div>
                    
                    {/* Optional card content based on activity type can go here */}
                    {activity.action.includes('completed') && (
                      <div style={{ marginTop: 'var(--space-3)', padding: 'var(--space-3)', background: 'var(--color-surface-raised)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', display: 'inline-block' }}>
                        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', marginBottom: 2 }}>Score: 87/100</div>
                        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)' }}>Duration: 45 mins</div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
