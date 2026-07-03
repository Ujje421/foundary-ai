import { Mic, Video, Settings2, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import { AppShell } from '../components/layout/AppShell';

export function InterviewStudio() {
  return (
    <AppShell fullWidth>
      <div className="pane-layout">
        
        {/* Left Pane - Live Transcript / Video */}
        <div className="pane pane-primary">
          <div className="page-header">
            <div className="page-header-left">
              <span style={{ width: 8, height: 8, borderRadius: 'var(--radius-full)', background: 'var(--color-error)' }} />
              <span className="heading-section" style={{ margin: 0 }}>Live Session: Maya Kumar</span>
              <span className="badge badge-error">REC 12:45</span>
            </div>
            <div className="page-header-right">
              <button className="btn-icon"><Mic size={14} /></button>
              <button className="btn-icon"><Video size={14} /></button>
              <button className="btn btn-danger btn-sm">End Session</button>
            </div>
          </div>
          
          <div style={{ flex: 1, padding: 0, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
            {/* Transcript Area */}
            <div style={{ flex: 1, padding: 'var(--space-6)', overflowY: 'auto' }}>
              
              <div style={{ display: 'flex', gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
                <div className="avatar avatar-sm"><div className="avatar-fallback">AI</div></div>
                <div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-1)' }}>Foundry AI</div>
                  <div style={{ fontSize: 'var(--text-md)', lineHeight: 'var(--leading-relaxed)' }}>Let's dive into system design. How would you architect a rate limiter for a distributed API gateway?</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
                <div className="avatar avatar-sm" style={{ background: 'var(--color-surface-hover)' }}><div className="avatar-fallback">MK</div></div>
                <div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-1)' }}>Maya Kumar</div>
                  <div style={{ fontSize: 'var(--text-md)', lineHeight: 'var(--leading-relaxed)' }}>I'd start by considering a sliding window or token bucket algorithm. Given it's distributed, we need to maintain state across multiple instances, so I'd likely use Redis as a centralized datastore.</div>
                </div>
              </div>
              
              {/* Typing indicator */}
              <div style={{ display: 'flex', gap: 'var(--space-4)', opacity: 0.5 }}>
                <div className="avatar avatar-sm"><div className="avatar-fallback">AI</div></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: 4, height: 4, background: 'var(--color-text-tertiary)', borderRadius: '50%' }} />
                  <span style={{ width: 4, height: 4, background: 'var(--color-text-tertiary)', borderRadius: '50%' }} />
                  <span style={{ width: 4, height: 4, background: 'var(--color-text-tertiary)', borderRadius: '50%' }} />
                </div>
              </div>

            </div>

            {/* Input Area */}
            <div style={{ padding: 'var(--space-4)', borderTop: '1px solid var(--color-border)', background: 'var(--color-bg)' }}>
              <div className="search-input-wrapper">
                <input className="input" placeholder="Override AI prompt or inject question..." style={{ paddingRight: 40 }} />
                <button className="btn-icon" style={{ position: 'absolute', right: 'var(--space-1)', top: 'var(--space-1)', height: 24, width: 24 }}>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Pane - Rubric & Context */}
        <div className="pane pane-sidebar">
          <div className="page-header" style={{ padding: '0 var(--space-4)' }}>
            <span className="heading-subsection" style={{ margin: 0 }}>Evaluation Rubric</span>
            <button className="btn-icon"><Settings2 size={14} /></button>
          </div>

          <div style={{ padding: 'var(--space-4)' }}>
            
            <div style={{ marginBottom: 'var(--space-6)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-2)' }}>
                <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)' } as React.CSSProperties}>Distributed Systems</span>
                <span style={{ fontSize: 'var(--text-sm)', fontFamily: 'var(--font-mono)' }}>In Progress</span>
              </div>
              <div className="progress-bar" style={{ height: 4 }}>
                <div className="progress-bar-fill" style={{ width: '65%' }} />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              
              <div style={{ borderLeft: '2px solid var(--color-success)', paddingLeft: 'var(--space-3)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-1)' }}>
                  <CheckCircle2 size={14} style={{ color: 'var(--color-success)' }} />
                  <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)' } as React.CSSProperties}>State Management</span>
                </div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>Candidate correctly identified Redis for cross-instance state synchronization.</div>
              </div>

              <div style={{ borderLeft: '2px solid var(--color-border)', paddingLeft: 'var(--space-3)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-1)' }}>
                  <div style={{ width: 14, height: 14, borderRadius: '50%', border: '1px solid var(--color-border)' }} />
                  <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)', color: 'var(--color-text-secondary)' } as React.CSSProperties}>Concurrency Handling</span>
                </div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-tertiary)', lineHeight: 'var(--leading-relaxed)' }}>Awaiting discussion on race conditions.</div>
              </div>

            </div>

            <div style={{ marginTop: 'var(--space-8)', padding: 'var(--space-4)', background: 'var(--color-surface-raised)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <div style={{ display: 'flex', gap: 'var(--space-2)', color: 'var(--color-warning)', marginBottom: 'var(--space-2)' }}>
                <AlertTriangle size={14} />
                <span style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-medium)' } as React.CSSProperties}>AI Insight</span>
              </div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
                Candidate's response time is 15% slower than benchmark. Consider asking a clarifying hint about atomicity.
              </div>
              <button className="btn btn-secondary btn-sm" style={{ marginTop: 'var(--space-3)', width: '100%' }}>Inject Hint</button>
            </div>

          </div>
        </div>

      </div>
    </AppShell>
  );
}
