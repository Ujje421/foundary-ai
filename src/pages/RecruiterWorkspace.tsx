import { useState } from 'react';
import { Filter, Search, Plus, MoreHorizontal, ArrowDownCircle } from 'lucide-react';
import { AppShell } from '../components/layout/AppShell';

const candidates = [
  { id: 'CAND-001', name: 'Maya Kumar', role: 'Senior Frontend', stage: 'Technical Review', score: 92, lastActive: '2h ago' },
  { id: 'CAND-002', name: 'Alex Chen', role: 'Backend Engineer', stage: 'System Design', score: 88, lastActive: '1d ago' },
  { id: 'CAND-003', name: 'Sarah Smith', role: 'Product Designer', stage: 'Behavioral', score: 95, lastActive: '3d ago' },
  { id: 'CAND-004', name: 'David Kim', role: 'Senior Frontend', stage: 'Offer Extended', score: 94, lastActive: '1w ago' },
  { id: 'CAND-005', name: 'Elena Rostova', role: 'Data Scientist', stage: 'Screening', score: null, lastActive: '1h ago' },
];

export function RecruiterWorkspace() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSelect = (id: string) => {
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const toggleAll = () => {
    if (selected.length === candidates.length) {
      setSelected([]);
    } else {
      setSelected(candidates.map(c => c.id));
    }
  };

  return (
    <AppShell fullWidth>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div className="page-header">
          <div className="page-header-left">
            <span className="heading-section" style={{ margin: 0 }}>Pipeline</span>
            <div className="badge badge-neutral">Active Roles: 4</div>
          </div>
          <div className="page-header-right">
            <div className="search-input-wrapper" style={{ width: 240 }}>
              <Search size={14} />
              <input className="search-input" placeholder="Search candidates..." />
            </div>
            <button className="btn btn-secondary"><Filter size={14} /> Filter</button>
            <button className="btn btn-primary"><Plus size={14} /> New Candidate</button>
          </div>
        </div>

        <div className="page-canvas" style={{ padding: 0 }}>
          <table className="table" style={{ width: '100%', minWidth: 800 }}>
            <thead>
              <tr>
                <th style={{ width: 40, textAlign: 'center' }}>
                  <input 
                    type="checkbox" 
                    checked={selected.length === candidates.length && candidates.length > 0}
                    onChange={toggleAll}
                  />
                </th>
                <th style={{ width: 120 }}>ID</th>
                <th>Candidate</th>
                <th>Role Target</th>
                <th>Current Stage</th>
                <th style={{ width: 100 }}>AI Score</th>
                <th style={{ width: 120 }}>Last Active</th>
                <th style={{ width: 60 }}></th>
              </tr>
            </thead>
            <tbody>
              {candidates.map(candidate => (
                <tr key={candidate.id} style={{ height: 40, background: selected.includes(candidate.id) ? 'var(--color-surface-hover)' : 'transparent' }} className="table-row-hover">
                  <td style={{ textAlign: 'center' }}>
                    <input 
                      type="checkbox" 
                      checked={selected.includes(candidate.id)}
                      onChange={() => toggleSelect(candidate.id)}
                    />
                  </td>
                  <td className="table-cell-mono">{candidate.id}</td>
                  <td>
                    <div style={{ fontWeight: 'var(--weight-medium)' } as React.CSSProperties}>{candidate.name}</div>
                  </td>
                  <td className="table-cell-secondary">{candidate.role}</td>
                  <td>
                    <span className="badge badge-neutral" style={{ background: 'var(--color-surface)' }}>{candidate.stage}</span>
                  </td>
                  <td>
                    {candidate.score ? (
                      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                        <span style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)', color: candidate.score > 90 ? 'var(--color-success)' : 'var(--color-text-primary)' }}>{candidate.score}</span>
                        <div className="progress-bar" style={{ height: 4, width: 40 }}>
                          <div className="progress-bar-fill" style={{ width: `${candidate.score}%`, background: candidate.score > 90 ? 'var(--color-success)' : 'var(--color-text-primary)' }} />
                        </div>
                      </div>
                    ) : (
                      <span className="table-cell-secondary">—</span>
                    )}
                  </td>
                  <td className="table-cell-mono">{candidate.lastActive}</td>
                  <td>
                    <div style={{ display: 'flex', gap: 'var(--space-1)' }}>
                      <button className="btn-icon"><ArrowDownCircle size={14} /></button>
                      <button className="btn-icon"><MoreHorizontal size={14} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppShell>
  );
}
