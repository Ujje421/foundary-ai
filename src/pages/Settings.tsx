import { useState } from 'react';
import { User, Bell, Key, Palette, Link2, Shield } from 'lucide-react';
import { AppShell } from '../components/layout/AppShell';
import { currentUser, integrations } from '../data/mockData';

const tabs = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'api', label: 'API Keys', icon: Key },
  { id: 'appearance', label: 'Appearance', icon: Palette },
  { id: 'integrations', label: 'Integrations', icon: Link2 },
  { id: 'security', label: 'Security', icon: Shield },
];

export function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <AppShell breadcrumbs={[{ label: 'Settings' }]}>
      <div style={{ width: '100%' }}>
        <h1 className="page-title" style={{ marginBottom: 'var(--space-6)' }}>Settings</h1>

        <div style={{ display: 'flex', gap: 'var(--space-8)' }}>
          {/* Tabs sidebar */}
          <div style={{ width: 200, flexShrink: 0 }}>
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  className={`sidebar-nav-item${activeTab === tab.id ? ' active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                  style={{ width: '100%', marginBottom: 2 }}
                >
                  <Icon size={15} />
                  <span className="sidebar-nav-label">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Content */}
          <div style={{ flex: 1 }}>
            {activeTab === 'profile' && (
              <div>
                <h2 className="heading-section" style={{ marginBottom: 'var(--space-6)' }}>Profile</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
                    <div className="avatar avatar-xl">
                      <div className="avatar-fallback">{currentUser.initials}</div>
                    </div>
                    <div>
                      <button className="btn btn-secondary btn-sm">Change avatar</button>
                    </div>
                  </div>
                  <div className="input-wrapper">
                    <label className="input-label">Full name</label>
                    <input className="input" type="text" defaultValue={currentUser.name} />
                  </div>
                  <div className="input-wrapper">
                    <label className="input-label">Email</label>
                    <input className="input" type="email" defaultValue={currentUser.email} />
                  </div>
                  <div className="input-wrapper">
                    <label className="input-label">Role</label>
                    <input className="input" type="text" defaultValue={currentUser.role} />
                  </div>
                  <div className="input-wrapper">
                    <label className="input-label">Timezone</label>
                    <select className="input" style={{ appearance: 'auto' }} defaultValue="America/Los_Angeles">
                      <option>America/New_York</option>
                      <option>America/Chicago</option>
                      <option>America/Los_Angeles</option>
                      <option>Europe/London</option>
                      <option>Asia/Tokyo</option>
                    </select>
                  </div>
                  <div>
                    <button className="btn btn-primary">Save Changes</button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div>
                <h2 className="heading-section" style={{ marginBottom: 'var(--space-6)' }}>Notification Preferences</h2>
                {[
                  { label: 'Email notifications', desc: 'Receive updates about your sessions via email', defaultChecked: true },
                  { label: 'Interview reminders', desc: 'Get reminded 30 minutes before scheduled sessions', defaultChecked: true },
                  { label: 'Weekly progress report', desc: 'Receive a weekly summary of your preparation', defaultChecked: true },
                  { label: 'Team activity', desc: 'Get notified when team members complete sessions', defaultChecked: false },
                  { label: 'Product updates', desc: 'Learn about new features and improvements', defaultChecked: false },
                  { label: 'Marketing emails', desc: 'Tips, guides, and interview preparation content', defaultChecked: false },
                ].map(pref => (
                  <div key={pref.label} style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: 'var(--space-4) 0',
                    borderBottom: '1px solid var(--color-border)',
                  }}>
                    <div>
                      <div style={{ fontSize: 'var(--text-md)', fontWeight: 'var(--weight-medium)', color: 'var(--color-text-primary)' } as React.CSSProperties}>{pref.label}</div>
                      <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-tertiary)', marginTop: 2 }}>{pref.desc}</div>
                    </div>
                    <label className="switch" data-state={pref.defaultChecked ? 'checked' : 'unchecked'} style={{ cursor: 'pointer' }}>
                      <span className="switch-thumb" />
                    </label>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'api' && (
              <div>
                <h2 className="heading-section" style={{ marginBottom: 'var(--space-2)' }}>API Keys</h2>
                <p className="page-subtitle" style={{ marginBottom: 'var(--space-6)' }}>Manage API keys for programmatic access</p>
                <div className="table-container">
                  <table className="table">
                    <thead>
                      <tr><th>Name</th><th>Key</th><th>Created</th><th>Last Used</th><th></th></tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ fontWeight: 'var(--weight-medium)' } as React.CSSProperties}>Production</td>
                        <td className="table-cell-mono">fnd_pk_live_****...8x3f</td>
                        <td className="table-cell-secondary">Jun 25, 2026</td>
                        <td className="table-cell-secondary">2 hours ago</td>
                        <td><button className="btn btn-danger btn-xs">Revoke</button></td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: 'var(--weight-medium)' } as React.CSSProperties}>Development</td>
                        <td className="table-cell-mono">fnd_pk_test_****...9k2m</td>
                        <td className="table-cell-secondary">Jun 20, 2026</td>
                        <td className="table-cell-secondary">5 min ago</td>
                        <td><button className="btn btn-danger btn-xs">Revoke</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <button className="btn btn-secondary" style={{ marginTop: 'var(--space-4)' }}>Generate New Key</button>
              </div>
            )}

            {activeTab === 'integrations' && (
              <div>
                <h2 className="heading-section" style={{ marginBottom: 'var(--space-6)' }}>Integrations</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                  {integrations.map(int => (
                    <div key={int.id} className="card">
                      <div className="card-body" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', padding: 'var(--space-4) var(--space-5)' }}>
                        <div style={{
                          width: 40, height: 40, borderRadius: 'var(--radius-lg)',
                          background: 'var(--color-surface-raised)', display: 'flex',
                          alignItems: 'center', justifyContent: 'center',
                          fontSize: 'var(--text-lg)', flexShrink: 0,
                        }}>
                          {int.name[0]}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 'var(--text-md)', fontWeight: 'var(--weight-medium)', color: 'var(--color-text-primary)' } as React.CSSProperties}>{int.name}</div>
                          <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-tertiary)', marginTop: 2 }}>{int.description}</div>
                        </div>
                        {int.status === 'connected' ? (
                          <span className="badge badge-success">Connected</span>
                        ) : (
                          <button className="btn btn-secondary btn-sm">Connect</button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'appearance' && (
              <div>
                <h2 className="heading-section" style={{ marginBottom: 'var(--space-6)' }}>Appearance</h2>
                <div className="input-wrapper" style={{ marginBottom: 'var(--space-5)' }}>
                  <label className="input-label">Theme</label>
                  <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                    <button className="btn btn-primary btn-sm">Dark</button>
                    <button className="btn btn-secondary btn-sm">Light</button>
                    <button className="btn btn-secondary btn-sm">System</button>
                  </div>
                </div>
                <div className="input-wrapper" style={{ marginBottom: 'var(--space-5)' }}>
                  <label className="input-label">Code font size</label>
                  <select className="input" style={{ appearance: 'auto', maxWidth: 200 }}>
                    <option>12px</option>
                    <option>13px</option>
                    <option selected>14px</option>
                    <option>16px</option>
                  </select>
                </div>
                <div className="input-wrapper">
                  <label className="input-label">Sidebar position</label>
                  <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                    <button className="btn btn-primary btn-sm">Left</button>
                    <button className="btn btn-secondary btn-sm">Right</button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div>
                <h2 className="heading-section" style={{ marginBottom: 'var(--space-6)' }}>Security</h2>
                <div style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: 'var(--space-5)', marginBottom: 'var(--space-5)' }}>
                  <div style={{ fontSize: 'var(--text-md)', fontWeight: 'var(--weight-medium)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-1)' } as React.CSSProperties}>Change Password</div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-tertiary)', marginBottom: 'var(--space-4)' }}>Update your password to keep your account secure</div>
                  <div className="input-wrapper" style={{ marginBottom: 'var(--space-3)', maxWidth: 360 }}>
                    <input className="input" type="password" placeholder="Current password" />
                  </div>
                  <div className="input-wrapper" style={{ marginBottom: 'var(--space-3)', maxWidth: 360 }}>
                    <input className="input" type="password" placeholder="New password" />
                  </div>
                  <button className="btn btn-primary btn-sm">Update Password</button>
                </div>
                <div>
                  <div style={{ fontSize: 'var(--text-md)', fontWeight: 'var(--weight-medium)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-1)' } as React.CSSProperties}>Two-Factor Authentication</div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-tertiary)', marginBottom: 'var(--space-3)' }}>Add an extra layer of security to your account</div>
                  <button className="btn btn-secondary btn-sm">Enable 2FA</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
