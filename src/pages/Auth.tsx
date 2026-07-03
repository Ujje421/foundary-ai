import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap, ArrowRight } from 'lucide-react';
import './Auth.css';

export function Auth() {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        {/* Left side - Branding */}
        <div className="auth-brand">
          <div className="auth-brand-inner">
            <div className="auth-brand-logo">
              <div className="sidebar-logo-mark" style={{ width: 32, height: 32 }}>
                <Zap size={18} />
              </div>
            </div>
            <h1 className="auth-brand-title">Foundry AI</h1>
            <p className="auth-brand-subtitle">Intelligence for Technical Hiring</p>

            <div className="auth-brand-testimonial">
              <p>"Foundry AI helped me land a Staff Engineer role at Stripe. The system design simulations were incredibly realistic."</p>
              <div className="auth-brand-author">
                <div className="avatar avatar-sm">
                  <div className="avatar-fallback">MK</div>
                </div>
                <div>
                  <div className="auth-brand-name">Maya Kumar</div>
                  <div className="auth-brand-role">Staff Engineer, Stripe</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="auth-form-wrapper">
          <div className="auth-form-inner">
            <div className="auth-form-header">
              <h2>{mode === 'signin' ? 'Welcome back' : 'Create your account'}</h2>
              <p>
                {mode === 'signin'
                  ? 'Sign in to continue your preparation'
                  : 'Start your interview preparation journey'
                }
              </p>
            </div>

            {/* OAuth */}
            <div className="auth-oauth">
              <button className="btn btn-secondary w-full auth-oauth-btn" type="button" onClick={() => navigate('/dashboard')}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5 0-1.4-.5-2.5-1.4-3.4.1-.3.6-1.6-.1-3.4 0 0-1.2-.4-3.8 1.4a12.8 12.8 0 0 0-7 0C6.2 1.2 5 1.6 5 1.6c-.7 1.8-.2 3.1-.1 3.4-.9.9-1.4 2-1.4 3.4 0 5 3 6.2 6 6.5-.4.4-.8 1.1-.8 2.2v4.5" />
                  <path d="M9 18c-4.5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                Continue with GitHub
              </button>
              <button className="btn btn-secondary w-full auth-oauth-btn" type="button" onClick={() => navigate('/dashboard')}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Continue with Google
              </button>
            </div>

            <div className="auth-divider">
              <span>or</span>
            </div>

            {/* Email form */}
            <form onSubmit={handleSubmit} className="auth-form">
              {mode === 'signup' && (
                <div className="input-wrapper">
                  <label className="input-label">Full name</label>
                  <input className="input" type="text" placeholder="Arjun Mehta" />
                </div>
              )}
              <div className="input-wrapper">
                <label className="input-label">Email</label>
                <input
                  className="input"
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="input-wrapper">
                <label className="input-label">Password</label>
                <input
                  className="input"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>

              <button className="btn btn-primary w-full" type="submit">
                {mode === 'signin' ? 'Sign in' : 'Create account'}
                <ArrowRight size={14} />
              </button>
            </form>

            {/* SSO */}
            <button
              className="btn btn-ghost w-full auth-sso-btn"
              type="button"
              onClick={() => navigate('/dashboard')}
            >
              Continue with SSO
            </button>

            {/* Toggle mode */}
            <div className="auth-toggle">
              {mode === 'signin' ? (
                <span>
                  Don't have an account?{' '}
                  <button className="auth-toggle-link" onClick={() => setMode('signup')}>
                    Sign up
                  </button>
                </span>
              ) : (
                <span>
                  Already have an account?{' '}
                  <button className="auth-toggle-link" onClick={() => setMode('signin')}>
                    Sign in
                  </button>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
