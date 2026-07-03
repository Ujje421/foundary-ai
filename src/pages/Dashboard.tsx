import { CheckCircle2, Clock, Filter, MoreHorizontal } from 'lucide-react';
import { AppShell } from '../components/layout/AppShell';

const inboxItems = [
  { id: 'INT-1042', type: 'interview', status: 'pending_review', title: 'Senior Frontend Engineer', entity: 'Maya Kumar', time: '10m ago', priority: 'high', aiFlag: '2 code smells' },
  { id: 'INT-1041', type: 'resume', status: 'processing', title: 'Parse 12 New Applications', entity: 'Backend Roles', time: '1h ago', priority: 'medium', aiFlag: null },
  { id: 'INT-1040', type: 'coding', status: 'ready', title: 'Evaluate System Design submission', entity: 'Alex Chen', time: '2h ago', priority: 'medium', aiFlag: null },
  { id: 'INT-1039', type: 'voice', status: 'completed', title: 'Behavioral Screen transcript ready', entity: 'Sarah Smith', time: '4h ago', priority: 'low', aiFlag: null },
  { id: 'INT-1038', type: 'system', status: 'action_required', title: 'Update scoring rubric for Q3', entity: 'Platform', time: '1d ago', priority: 'medium', aiFlag: 'Drift detected' },
  { id: 'INT-1037', type: 'resume', status: 'completed', title: 'Batch extraction for Q2 Cohort', entity: 'Data Science', time: '1d ago', priority: 'low', aiFlag: null },
  { id: 'INT-1036', type: 'voice', status: 'pending_review', title: 'System Design Interview Review', entity: 'David Kim', time: '2d ago', priority: 'high', aiFlag: 'Timeout in Q3' },
];

export function Dashboard() {
  return (
    <AppShell fullWidth>
      <div className="pane-layout">
        <div className="pane pane-primary">
          <div className="page-header">
            <div className="page-header-left">
              <span className="heading-section" style={{ margin: 0 }}>Inbox</span>
            </div>
            <div className="page-header-right">
              <button className="btn btn-ghost btn-sm"><Filter size={14} /> Filter</button>
            </div>
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {/* List Header */}
            <div style={{ display: 'grid', gridTemplateColumns: '80px auto 1fr 120px 140px 100px 40px', gap: 'var(--space-4)', padding: 'var(--space-2) var(--space-4)', borderBottom: '1px solid var(--color-border)', fontSize: 'var(--text-2xs)', color: 'var(--color-text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <div>ID</div>
              <div style={{ width: 16 }}></div>
              <div>Title</div>
              <div>Entity</div>
              <div>Diagnostic</div>
              <div style={{ textAlign: 'right' }}>Created</div>
              <div></div>
            </div>

            {/* List Items */}
            {inboxItems.map(item => (
              <div key={item.id} style={{ display: 'grid', gridTemplateColumns: '80px auto 1fr 120px 140px 100px 40px', gap: 'var(--space-4)', padding: 'var(--space-1) var(--space-4)', borderBottom: '1px solid var(--color-border)', alignItems: 'center', cursor: 'pointer', height: 36 }} className="table-row-hover">
                
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-mono)' }}>
                  {item.id}
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {item.status === 'completed' ? (
                    <CheckCircle2 size={14} style={{ color: 'var(--color-text-secondary)' }} />
                  ) : item.status === 'processing' ? (
                    <Clock size={14} style={{ color: 'var(--color-warning)' }} />
                  ) : (
                    <div style={{ width: 14, height: 14, borderRadius: '2px', border: '1.5px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {item.priority === 'high' && <div style={{ width: 6, height: 6, background: 'var(--color-primary)', borderRadius: '1px' }} />}
                    </div>
                  )}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)', color: item.status === 'completed' ? 'var(--color-text-secondary)' : 'var(--color-text-primary)' } as React.CSSProperties}>{item.title}</span>
                </div>

                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)' }}>
                  {item.entity}
                </div>

                <div style={{ fontSize: 'var(--text-xs)' }}>
                  {item.aiFlag ? (
                    <span style={{ color: 'var(--color-warning)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'currentColor' }} />
                      {item.aiFlag}
                    </span>
                  ) : (
                    <span style={{ color: 'var(--color-text-quaternary)' }}>—</span>
                  )}
                </div>

                <div style={{ textAlign: 'right', fontSize: 'var(--text-xs)', color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-mono)' }}>
                  {item.time}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', opacity: 0.5 }}>
                  <MoreHorizontal size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
