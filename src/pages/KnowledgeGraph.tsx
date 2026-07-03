import { useState } from 'react';
import { AppShell } from '../components/layout/AppShell';
import { ChevronRight, ChevronDown, Network, Database, Search } from 'lucide-react';

type Node = {
  id: string;
  label: string;
  type: 'domain' | 'module' | 'topic';
  status: 'optimal' | 'warning' | 'critical';
  children?: Node[];
};

const taxonomyData: Node[] = [
  {
    id: 'dom_1',
    label: 'Distributed Systems',
    type: 'domain',
    status: 'warning',
    children: [
      {
        id: 'mod_1',
        label: 'Consensus Algorithms',
        type: 'module',
        status: 'optimal',
        children: [
          { id: 'top_1', label: 'Raft', type: 'topic', status: 'optimal' },
          { id: 'top_2', label: 'Paxos', type: 'topic', status: 'optimal' }
        ]
      },
      {
        id: 'mod_2',
        label: 'Data Partitioning',
        type: 'module',
        status: 'critical',
        children: [
          { id: 'top_3', label: 'Consistent Hashing', type: 'topic', status: 'critical' },
          { id: 'top_4', label: 'Sharding Strategies', type: 'topic', status: 'warning' }
        ]
      }
    ]
  },
  {
    id: 'dom_2',
    label: 'Frontend Architecture',
    type: 'domain',
    status: 'optimal',
    children: [
      {
        id: 'mod_3',
        label: 'State Management',
        type: 'module',
        status: 'optimal',
        children: [
          { id: 'top_5', label: 'Flux Pattern', type: 'topic', status: 'optimal' },
          { id: 'top_6', label: 'Atomic State', type: 'topic', status: 'optimal' }
        ]
      }
    ]
  }
];

function TreeNode({ node, depth = 0, selectedId, onSelect }: { node: Node, depth?: number, selectedId: string, onSelect: (id: string) => void }) {
  const [expanded, setExpanded] = useState(true);
  const isSelected = selectedId === node.id;
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div>
      <div 
        onClick={() => {
          onSelect(node.id);
          if (hasChildren) setExpanded(!expanded);
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: `var(--space-1) var(--space-4)`,
          paddingLeft: `calc(var(--space-4) + ${depth * 16}px)`,
          cursor: 'pointer',
          background: isSelected ? 'var(--color-surface-hover)' : 'transparent',
          color: isSelected ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
          borderLeft: isSelected ? '2px solid var(--color-primary)' : '2px solid transparent',
        }}
        className="table-row-hover"
      >
        <div style={{ width: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 'var(--space-2)' }}>
          {hasChildren ? (
            expanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />
          ) : (
            <div style={{ width: 4, height: 4, borderRadius: '50%', background: node.status === 'optimal' ? 'var(--color-success)' : node.status === 'warning' ? 'var(--color-warning)' : 'var(--color-error)' }} />
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
          {node.type === 'domain' && <Network size={14} style={{ color: 'var(--color-text-tertiary)' }} />}
          {node.type === 'module' && <Database size={14} style={{ color: 'var(--color-text-tertiary)' }} />}
          <span style={{ fontSize: 'var(--text-sm)', fontFamily: node.type === 'topic' ? 'var(--font-mono)' : 'inherit' }}>{node.label}</span>
        </div>
      </div>
      {expanded && node.children && (
        <div>
          {node.children.map(child => (
            <TreeNode key={child.id} node={child} depth={depth + 1} selectedId={selectedId} onSelect={onSelect} />
          ))}
        </div>
      )}
    </div>
  );
}

export function KnowledgeGraph() {
  const [selectedId, setSelectedId] = useState('mod_2');

  return (
    <AppShell fullWidth>
      <div className="pane-layout">
        
        {/* Left Pane - Taxonomy Tree */}
        <div className="pane" style={{ width: 320, borderRight: '1px solid var(--color-border)' }}>
          <div className="page-header" style={{ padding: '0 var(--space-4)' }}>
            <div className="search-input-wrapper" style={{ width: '100%' }}>
              <Search size={14} />
              <input className="search-input" placeholder="Search taxonomy..." />
            </div>
          </div>
          <div style={{ flex: 1, overflowY: 'auto', paddingTop: 'var(--space-2)' }}>
            {taxonomyData.map(node => (
              <TreeNode key={node.id} node={node} selectedId={selectedId} onSelect={setSelectedId} />
            ))}
          </div>
        </div>

        {/* Right Pane - Details */}
        <div className="pane pane-primary" style={{ padding: 'var(--space-8)' }}>
          <div style={{ maxWidth: 640 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
              <span className="badge badge-error">CRITICAL</span>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-mono)' }}>mod_2</span>
            </div>
            
            <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-medium)', marginBottom: 'var(--space-2)' } as React.CSSProperties}>Data Partitioning</h1>
            <p style={{ fontSize: 'var(--text-md)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-8)' }}>
              Evaluation signals indicate fundamental misunderstandings in horizontal scaling strategies and consistent hashing ring mechanics.
            </p>

            <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
              <div style={{ padding: 'var(--space-3) var(--space-4)', background: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-medium)', textTransform: 'uppercase', letterSpacing: '0.05em' } as React.CSSProperties}>
                Diagnostic Traces
              </div>
              <div style={{ padding: 'var(--space-4)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-1)' }}>
                    <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)' } as React.CSSProperties}>Consistent Hashing</span>
                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-error)', fontFamily: 'var(--font-mono)' }}>FAIL</span>
                  </div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)' }}>Unable to explain virtual nodes and their impact on load distribution.</div>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-1)' }}>
                    <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)' } as React.CSSProperties}>Sharding Strategies</span>
                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-warning)', fontFamily: 'var(--font-mono)' }}>WARN</span>
                  </div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)' }}>Mentioned modulo hashing but failed to articulate the rebalancing problem.</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </AppShell>
  );
}
