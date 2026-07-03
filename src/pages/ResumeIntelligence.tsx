import { useState } from 'react';
import { FileText, AlertTriangle, ChevronRight, Download, EyeOff } from 'lucide-react';
import { AppShell } from '../components/layout/AppShell';

export function ResumeIntelligence() {
  const [selectedDoc, setSelectedDoc] = useState(0);

  return (
    <AppShell fullWidth>
      <div className="pane-layout">
        
        {/* Left Pane - Document List */}
        <div className="pane" style={{ width: 280, borderRight: '1px solid var(--color-border)', background: 'var(--color-surface)' }}>
          <div className="page-header" style={{ padding: '0 var(--space-4)' }}>
            <span className="heading-subsection" style={{ margin: 0 }}>Corpus</span>
          </div>
          
          <div style={{ flex: 1, overflowY: 'auto' }}>
            {['Maya_Kumar_Resume.pdf', 'Alex_Chen_CV_v2.pdf', 'Sarah_Smith_Resume.docx'].map((doc, i) => (
              <div 
                key={doc} 
                onClick={() => setSelectedDoc(i)}
                style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', padding: 'var(--space-2) var(--space-4)', borderBottom: '1px solid var(--color-border)', background: selectedDoc === i ? 'var(--color-surface-hover)' : 'transparent', cursor: 'pointer', height: 40 }}
              >
                <FileText size={14} style={{ color: 'var(--color-text-tertiary)' }} />
                <div style={{ flex: 1, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)', color: selectedDoc === i ? 'var(--color-text-primary)' : 'var(--color-text-secondary)', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' } as React.CSSProperties}>{doc}</div>
                </div>
                {selectedDoc === i && <ChevronRight size={14} style={{ color: 'var(--color-text-tertiary)' }} />}
              </div>
            ))}
          </div>
        </div>

        {/* Center Pane - Raw Text / Diff Viewer */}
        <div className="pane pane-primary" style={{ background: 'var(--color-bg)' }}>
          <div className="page-header" style={{ borderBottom: '1px solid var(--color-border)' }}>
            <span className="heading-subsection" style={{ margin: 0, fontFamily: 'var(--font-mono)', color: 'var(--color-text-secondary)' }}>src / Maya_Kumar_Resume.pdf</span>
            <div className="page-header-right">
              <button className="btn btn-ghost btn-sm"><Download size={14} /> Download</button>
            </div>
          </div>
          <div style={{ flex: 1, padding: 0, overflowY: 'auto', display: 'flex' }}>
            
            {/* Line Numbers */}
            <div style={{ width: 40, borderRight: '1px solid var(--color-border)', background: 'var(--color-surface)', padding: 'var(--space-4) 0', textAlign: 'center', color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', userSelect: 'none' }}>
              {[...Array(20)].map((_, i) => <div key={i} style={{ lineHeight: '24px' }}>{i + 1}</div>)}
            </div>

            {/* Document Content */}
            <div style={{ flex: 1, padding: 'var(--space-4)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', lineHeight: '24px', color: 'var(--color-text-primary)', whiteSpace: 'pre-wrap' }}>
              <div style={{ color: 'var(--color-text-secondary)' }}>{'// Extracted plaintext from Maya_Kumar_Resume.pdf'}</div>
              <br />
              <div>Maya Kumar</div>
              <div>San Francisco, CA | maya.kumar@example.com</div>
              <br />
              <div style={{ color: 'var(--color-text-secondary)', textTransform: 'uppercase' }}>## Experience</div>
              <br />
              <div>Senior Frontend Engineer | TechCorp</div>
              <div>2023 - Present</div>
              <div>- Led migration from Vue to React, improving TTI by 40%.</div>
              <div>- Architected a micro-frontend structure for 5 independent teams.</div>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: -16, bottom: 0, width: 4, background: 'var(--color-warning)' }} />
                <span style={{ background: 'rgba(245, 166, 35, 0.1)' }}>- Developed proprietary UI component library used across 12 products.</span>
              </div>
              <br />
              <div>Frontend Developer | StartupInc</div>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: -16, bottom: 0, width: 4, background: 'var(--color-error)' }} />
                <span style={{ background: 'rgba(229, 72, 77, 0.1)' }}>2018 - 2021</span>
              </div>
              <div>- Built landing pages using plain HTML/CSS.</div>
            </div>

          </div>
        </div>

        {/* Right Pane - Diagnostics */}
        <div className="pane pane-sidebar" style={{ width: 320 }}>
          <div className="page-header" style={{ padding: '0 var(--space-4)', borderBottom: '1px solid var(--color-border)' }}>
            <span className="heading-subsection" style={{ margin: 0 }}>Diagnostics</span>
            <button className="btn-icon"><EyeOff size={14} /></button>
          </div>
          
          <div style={{ flex: 1, padding: 0, overflowY: 'auto' }}>
            {/* Diagnostic Item */}
            <div style={{ borderBottom: '1px solid var(--color-border)', padding: 'var(--space-4)' }}>
              <div style={{ display: 'flex', gap: 'var(--space-2)', color: 'var(--color-error)', marginBottom: 'var(--space-2)', alignItems: 'center' }}>
                <AlertTriangle size={14} />
                <span style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-medium)', fontFamily: 'var(--font-mono)' } as React.CSSProperties}>ERR_TIMELINE_GAP</span>
              </div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-primary)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-2)' }}>
                Timeline gap detected between 2021 and 2023.
              </div>
              <div style={{ fontSize: '10px', color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-mono)' }}>Line 18</div>
            </div>

            {/* Diagnostic Item */}
            <div style={{ borderBottom: '1px solid var(--color-border)', padding: 'var(--space-4)' }}>
              <div style={{ display: 'flex', gap: 'var(--space-2)', color: 'var(--color-warning)', marginBottom: 'var(--space-2)', alignItems: 'center' }}>
                <AlertTriangle size={14} />
                <span style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-medium)', fontFamily: 'var(--font-mono)' } as React.CSSProperties}>WARN_OVERSTATEMENT</span>
              </div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-primary)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-2)' }}>
                Claiming "used across 12 products" without specifying impact scope. Flagged for behavioral deep-dive.
              </div>
              <div style={{ fontSize: '10px', color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-mono)' }}>Line 14</div>
            </div>

          </div>
        </div>

      </div>
    </AppShell>
  );
}
