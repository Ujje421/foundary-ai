import { useNavigate } from 'react-router-dom';
import { AppShell } from '../components/layout/AppShell';
import { ArrowLeft } from 'lucide-react';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <AppShell breadcrumbs={[{ label: '404' }]}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 'calc(100vh - 120px)' }}>
        <h1 style={{ fontSize: '6rem', fontWeight: 'var(--weight-bold)', color: 'var(--color-border)', lineHeight: 1 } as React.CSSProperties}>404</h1>
        <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--weight-semibold)', color: 'var(--color-text-primary)', marginTop: 'var(--space-4)', marginBottom: 'var(--space-2)' } as React.CSSProperties}>Page not found</h2>
        <p style={{ fontSize: 'var(--text-md)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-6)' }}>The page you are looking for doesn't exist or has been moved.</p>
        <button className="btn btn-primary" onClick={() => navigate('/dashboard')}>
          <ArrowLeft size={16} /> Back to Dashboard
        </button>
      </div>
    </AppShell>
  );
}
