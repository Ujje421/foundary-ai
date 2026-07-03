import { CreditCard, Download, Check, ExternalLink } from 'lucide-react';
import { AppShell } from '../components/layout/AppShell';

const invoices = [
  { id: 'INV-2026-006', date: 'Jul 1, 2026', amount: '$49.00', status: 'Paid' },
  { id: 'INV-2026-005', date: 'Jun 1, 2026', amount: '$49.00', status: 'Paid' },
  { id: 'INV-2026-004', date: 'May 1, 2026', amount: '$49.00', status: 'Paid' },
];

export function Billing() {
  return (
    <AppShell breadcrumbs={[{ label: 'Billing' }]}>
      <div style={{ width: '100%' }}>
        <h1 className="page-title" style={{ marginBottom: 'var(--space-6)' }}>Billing & Plan</h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          {/* Current Plan */}
          <div className="card">
            <div className="card-header">
              <span className="heading-subsection">Current Plan</span>
              <span className="badge badge-success">Active</span>
            </div>
            <div className="card-body">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-4)' }}>
                <div>
                  <div style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--weight-bold)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-1)' } as React.CSSProperties}>Pro Plan</div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>$49/month, billed monthly. Next charge on Aug 1, 2026.</div>
                </div>
                <button className="btn btn-secondary">Change Plan</button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--color-border)' }}>
                <div>
                  <div style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-2)' } as React.CSSProperties}>Plan Features</div>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1-5)' }}>
                    {['Unlimited Mock Interviews', 'Advanced Coding Environment', 'Detailed Analytics', 'Resume Analysis'].map(feat => (
                      <li key={feat} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
                        <Check size={14} style={{ color: 'var(--color-success)' }} /> {feat}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-2)' } as React.CSSProperties}>Usage this month</div>
                  <div style={{ marginBottom: 'var(--space-3)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-1)' }}>
                      <span>Voice Minutes</span>
                      <span>120 / 300</span>
                    </div>
                    <div className="progress-bar" style={{ height: 4 }}>
                      <div className="progress-bar-fill" style={{ width: '40%', background: 'var(--color-primary)' }} />
                    </div>
                  </div>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-1)' }}>
                      <span>Resume Scans</span>
                      <span>5 / Unlimited</span>
                    </div>
                    <div className="progress-bar" style={{ height: 4 }}>
                      <div className="progress-bar-fill" style={{ width: '100%', background: 'var(--color-success)' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="card">
            <div className="card-header">
              <span className="heading-subsection">Payment Method</span>
            </div>
            <div className="card-body" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
                <div style={{ width: 48, height: 32, background: 'var(--color-surface-raised)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CreditCard size={18} style={{ color: 'var(--color-text-secondary)' }} />
                </div>
                <div>
                  <div style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)', color: 'var(--color-text-primary)' } as React.CSSProperties}>Visa ending in 4242</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-tertiary)' }}>Expires 12/2028</div>
                </div>
              </div>
              <button className="btn btn-secondary btn-sm">Update</button>
            </div>
          </div>

          {/* Billing History */}
          <div className="card">
            <div className="card-header">
              <span className="heading-subsection">Billing History</span>
              <button className="btn btn-ghost btn-xs">Download All <ExternalLink size={12} style={{ marginLeft: 4 }} /></button>
            </div>
            <div className="table-container" style={{ border: 'none', borderRadius: 0 }}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Invoice</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map(inv => (
                    <tr key={inv.id}>
                      <td style={{ fontWeight: 'var(--weight-medium)' } as React.CSSProperties}>{inv.id}</td>
                      <td className="table-cell-secondary">{inv.date}</td>
                      <td style={{ fontVariantNumeric: 'tabular-nums' } as React.CSSProperties}>{inv.amount}</td>
                      <td><span className="badge badge-success">{inv.status}</span></td>
                      <td><button className="btn-icon"><Download size={14} /></button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
