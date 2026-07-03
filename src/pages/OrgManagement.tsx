import { useState } from 'react';
import { Plus, Search, MoreHorizontal, Mail, Shield, Trash2 } from 'lucide-react';
import { AppShell } from '../components/layout/AppShell';

const members = [
  { id: 1, name: 'Maya Kumar', email: 'maya@foundryai.com', role: 'Admin', status: 'Active', joined: 'Mar 12, 2026' },
  { id: 2, name: 'Arjun Mehta', email: 'arjun@foundryai.com', role: 'Member', status: 'Active', joined: 'Apr 02, 2026' },
  { id: 3, name: 'Sarah Chen', email: 'sarah@foundryai.com', role: 'Member', status: 'Invited', joined: '—' },
];

export function OrgManagement() {
  const [search, setSearch] = useState('');

  return (
    <AppShell breadcrumbs={[{ label: 'Organization' }]}>
      <div style={{ width: '100%' }}>
        <div className="page-header">
          <div className="page-header-left">
            <h1 className="page-title">Organization Settings</h1>
            <p className="page-subtitle">Manage your team members and roles</p>
          </div>
          <div className="page-header-right">
            <button className="btn btn-primary"><Plus size={14} /> Invite Members</button>
          </div>
        </div>

        {/* Organization Info */}
        <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="card-header">
            <span className="heading-subsection">Workspace Details</span>
          </div>
          <div className="card-body" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)' }}>
            <div className="input-wrapper">
              <label className="input-label">Workspace Name</label>
              <input className="input" type="text" defaultValue="Foundry AI Team" />
            </div>
            <div className="input-wrapper">
              <label className="input-label">Workspace Domain</label>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input className="input" type="text" defaultValue="foundryai" style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }} />
                <div style={{ padding: '0 var(--space-3)', background: 'var(--color-surface-raised)', border: '1px solid var(--color-border)', borderLeft: 'none', borderRadius: '0 var(--radius-md) var(--radius-md) 0', height: 36, display: 'flex', alignItems: 'center', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
                  .foundryapp.com
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button className="btn btn-primary btn-sm">Save Changes</button>
          </div>
        </div>

        {/* Members */}
        <div className="card">
          <div className="card-header">
            <span className="heading-subsection">Team Members</span>
            <span className="badge badge-neutral">{members.length} total</span>
          </div>
          
          <div style={{ padding: 'var(--space-3) var(--space-4)', borderBottom: '1px solid var(--color-border)', display: 'flex', gap: 'var(--space-3)' }}>
            <div className="search-input-wrapper" style={{ width: 260 }}>
              <Search size={14} />
              <input 
                className="search-input" 
                placeholder="Search members..." 
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="table-container" style={{ border: 'none', borderRadius: 0 }}>
            <table className="table">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Joined</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {members.map(member => (
                  <tr key={member.id}>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2-5)' }}>
                        <div className="avatar avatar-sm">
                          <div className="avatar-fallback">{member.name.split(' ').map(n => n[0]).join('')}</div>
                        </div>
                        <div>
                          <div style={{ fontWeight: 'var(--weight-medium)', color: 'var(--color-text-primary)' } as React.CSSProperties}>{member.name}</div>
                          <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-tertiary)' }}>{member.email}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-1)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
                        {member.role === 'Admin' ? <Shield size={13} style={{ color: 'var(--color-primary)' }} /> : null}
                        {member.role}
                      </span>
                    </td>
                    <td>
                      <span className={`badge badge-${member.status === 'Active' ? 'success' : 'neutral'}`}>
                        {member.status}
                      </span>
                    </td>
                    <td className="table-cell-secondary">{member.joined}</td>
                    <td>
                      <div style={{ display: 'flex', gap: 'var(--space-1)' }}>
                        {member.status === 'Invited' && (
                          <button className="btn-icon" title="Resend Invite"><Mail size={14} /></button>
                        )}
                        <button className="btn-icon" title="Edit Role"><MoreHorizontal size={14} /></button>
                        {member.role !== 'Admin' && (
                          <button className="btn-icon" style={{ color: 'var(--color-error)' }} title="Remove"><Trash2 size={14} /></button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
