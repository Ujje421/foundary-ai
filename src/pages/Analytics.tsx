import { Filter, Download } from 'lucide-react';
import { AppShell } from '../components/layout/AppShell';

const auditLogs = [
  { id: 'EVL-904', candidate: 'Maya Kumar', module: 'System Design', issue: 'Missing rate limiter fallback', severity: 'high', time: '10:42 AM', reviewer: 'AI-Node-1' },
  { id: 'EVL-903', candidate: 'Alex Chen', module: 'Frontend', issue: 'Excessive re-renders on scroll', severity: 'medium', time: '09:15 AM', reviewer: 'AI-Node-3' },
  { id: 'EVL-902', candidate: 'Sarah Smith', module: 'Behavioral', issue: 'Vague response on conflict resolution', severity: 'low', time: 'Yesterday', reviewer: 'AI-Node-2' },
  { id: 'EVL-901', candidate: 'David Kim', module: 'Algorithms', issue: 'O(N^2) time complexity on array merge', severity: 'high', time: 'Yesterday', reviewer: 'AI-Node-1' },
  { id: 'EVL-900', candidate: 'Elena Rostova', module: 'Data Science', issue: 'Data leakage in cross-validation', severity: 'high', time: 'Oct 24', reviewer: 'AI-Node-4' },
];

export function Analytics() {
  return (
    <AppShell fullWidth>
      <div className="pane-layout">
        <div className="pane pane-primary">
          <div className="page-header">
            <div className="page-header-left">
              <span className="heading-section" style={{ margin: 0 }}>Evaluation Audit Log</span>
            </div>
            <div className="page-header-right">
              <button className="btn btn-ghost btn-sm"><Download size={14} /> Export CSV</button>
              <button className="btn btn-ghost btn-sm"><Filter size={14} /> Filter</button>
            </div>
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {/* List Header */}
            <div style={{ display: 'grid', gridTemplateColumns: '80px 140px 120px 1fr 100px 80px', gap: 'var(--space-4)', padding: 'var(--space-2) var(--space-4)', borderBottom: '1px solid var(--color-border)', fontSize: 'var(--text-2xs)', color: 'var(--color-text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <div>Event ID</div>
              <div>Candidate</div>
              <div>Module</div>
              <div>Diagnostic Issue</div>
              <div>Severity</div>
              <div style={{ textAlign: 'right' }}>Time</div>
            </div>

            {/* List Items */}
            {auditLogs.map(log => (
              <div key={log.id} style={{ display: 'grid', gridTemplateColumns: '80px 140px 120px 1fr 100px 80px', gap: 'var(--space-4)', padding: 'var(--space-1) var(--space-4)', borderBottom: '1px solid var(--color-border)', alignItems: 'center', cursor: 'pointer', height: 36 }} className="table-row-hover">
                
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-mono)' }}>
                  {log.id}
                </div>

                <div style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)', color: 'var(--color-text-primary)' } as React.CSSProperties}>
                  {log.candidate}
                </div>

                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)' }}>
                  {log.module}
                </div>

                <div style={{ fontSize: 'var(--text-xs)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <span style={{ color: 'var(--color-text-secondary)' }}>{log.issue}</span>
                </div>

                <div style={{ fontSize: 'var(--text-xs)' }}>
                  <span style={{ color: log.severity === 'high' ? 'var(--color-error)' : log.severity === 'medium' ? 'var(--color-warning)' : 'var(--color-text-tertiary)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'currentColor' }} />
                    {log.severity}
                  </span>
                </div>

                <div style={{ textAlign: 'right', fontSize: 'var(--text-xs)', color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-mono)' }}>
                  {log.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
