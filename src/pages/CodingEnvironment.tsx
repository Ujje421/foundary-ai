import { Play, Check, Terminal, Settings } from 'lucide-react';
import { AppShell } from '../components/layout/AppShell';

export function CodingEnvironment() {
  return (
    <AppShell fullWidth>
      <div style={{ display: 'flex', height: '100%', width: '100%', overflow: 'hidden' }}>
        
        {/* Left Pane - Problem Description */}
        <div style={{ width: 300, borderRight: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column', background: 'var(--color-surface)' }}>
          <div className="page-header" style={{ padding: '0 var(--space-4)' }}>
            <span className="heading-subsection" style={{ margin: 0 }}>Description</span>
          </div>
          <div style={{ padding: 'var(--space-4)', overflowY: 'auto', flex: 1 }}>
            <h2 style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--weight-medium)', marginBottom: 'var(--space-2)' } as React.CSSProperties}>LRU Cache Implementation</h2>
            <div style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
              <span className="badge badge-warning">Medium</span>
              <span className="badge badge-neutral">Data Structures</span>
            </div>
            
            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
              <p style={{ marginBottom: 'var(--space-4)' }}>Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.</p>
              <p style={{ marginBottom: 'var(--space-2)' }}>Implement the <code>LRUCache</code> class:</p>
              <ul style={{ paddingLeft: 'var(--space-4)', marginBottom: 'var(--space-4)', display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
                <li><code>LRUCache(int capacity)</code> Initialize the LRU cache with positive size capacity.</li>
                <li><code>int get(int key)</code> Return the value of the key if the key exists, otherwise return -1.</li>
                <li><code>void put(int key, int value)</code> Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache.</li>
              </ul>
              
              <div style={{ padding: 'var(--space-3)', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)' }}>
                <strong>Input</strong><br/>
                ["LRUCache", "put", "put", "get", "put", "get"]<br/>
                [[2], [1, 1], [2, 2], [1], [3, 3], [2]]<br/><br/>
                <strong>Output</strong><br/>
                [null, null, null, 1, null, -1]
              </div>
            </div>
          </div>
        </div>

        {/* Center Pane - Code Editor */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: 'var(--color-bg)' }}>
          <div className="page-header" style={{ padding: '0 var(--space-4)', borderBottom: '1px solid var(--color-border)' }}>
            <div className="page-header-left">
              <span className="heading-subsection" style={{ margin: 0 }}>index.ts</span>
            </div>
            <div className="page-header-right">
              <button className="btn btn-primary btn-sm"><Play size={12} /> Run Tests</button>
            </div>
          </div>
          
          <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
            {/* Line Numbers */}
            <div style={{ width: 40, borderRight: '1px solid var(--color-border)', background: 'var(--color-surface)', padding: 'var(--space-4) 0', textAlign: 'center', color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', userSelect: 'none' }}>
              {[...Array(15)].map((_, i) => <div key={i} style={{ lineHeight: '20px' }}>{i + 1}</div>)}
            </div>
            {/* Code Area */}
              <textarea 
                style={{ width: '100%', height: '100%', background: 'transparent', border: 'none', outline: 'none', color: 'var(--color-text-primary)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', lineHeight: '20px', resize: 'none', padding: 'var(--space-4)' }}
                defaultValue={`class LRUCache {\n  private capacity: number;\n  private cache: Map<number, number>;\n\n  constructor(capacity: number) {\n    this.capacity = capacity;\n    this.cache = new Map();\n  }\n\n  get(key: number): number {\n    if (!this.cache.has(key)) return -1;\n    // ...\n  }\n}`}
                spellCheck="false"
              />
          </div>
        </div>

        {/* Right Pane - Test Runner */}
        <div style={{ width: 320, borderLeft: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column', background: 'var(--color-surface)' }}>
          <div className="page-header" style={{ padding: '0 var(--space-4)' }}>
            <span className="heading-subsection" style={{ margin: 0 }}>Test Results</span>
            <button className="btn-icon"><Settings size={14} /></button>
          </div>
          <div style={{ padding: 'var(--space-4)', flex: 1, overflowY: 'auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-success)' }} />
              <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)', fontFamily: 'var(--font-mono)' } as React.CSSProperties}>3/3 Passed (42ms)</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
              {[1, 2, 3].map(test => (
                <div key={test} style={{ padding: 'var(--space-2)', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)' }}>
                  <Check size={14} style={{ color: 'var(--color-success)', marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-medium)', marginBottom: 'var(--space-1)' } as React.CSSProperties}>Test Case {test}</div>
                    <div style={{ fontSize: '10px', color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-mono)' }}>Memory: 41.2 MB</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ height: 120, borderTop: '1px solid var(--color-border)', background: '#050505', padding: 'var(--space-3)' }}>
            <div style={{ fontSize: 'var(--text-2xs)', color: 'var(--color-text-tertiary)', textTransform: 'uppercase', marginBottom: 'var(--space-2)' }}>Console</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', display: 'flex', gap: 'var(--space-2)' }}>
              <Terminal size={12} style={{ marginTop: 2 }} />
              <span>&gt; Node v20.5.1 ready...</span>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
