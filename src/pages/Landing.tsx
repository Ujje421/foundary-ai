import { useNavigate } from 'react-router-dom';
import {
  Zap, ArrowRight, MessageSquare, Code2, FileText, Mic,
  BarChart3, Network, Users, Shield, ChevronRight
} from 'lucide-react';
import './Landing.css';

const features = [
  {
    icon: MessageSquare,
    title: 'Interview Simulation',
    desc: 'AI-powered mock interviews tailored to target company, role, and level. Real-time feedback with rubric scoring.',
  },
  {
    icon: Code2,
    title: 'Coding Environment',
    desc: 'Solve real problems in a full IDE with syntax highlighting, test cases, and complexity analysis.',
  },
  {
    icon: Mic,
    title: 'Voice Interview',
    desc: 'Practice behavioral and system design rounds with natural voice conversations and real-time transcription.',
  },
  {
    icon: FileText,
    title: 'Resume Intelligence',
    desc: 'AI analysis against ATS systems. Company-specific tailoring with keyword optimization and impact scoring.',
  },
  {
    icon: Network,
    title: 'Knowledge Graph',
    desc: 'Visual topic mastery map connecting your performance data to personalized study paths.',
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    desc: 'Track progress over time with topic breakdowns, percentile rankings, and actionable insights.',
  },
];

const companies = [
  'Google', 'Meta', 'Stripe', 'Vercel', 'Linear', 'Figma',
  'Netflix', 'Airbnb', 'Coinbase', 'Databricks',
];

const stats = [
  { value: '12,400+', label: 'Engineers prepared' },
  { value: '94%', label: 'Interview pass rate' },
  { value: '4.9/5', label: 'User rating' },
  { value: '180+', label: 'Companies covered' },
];

export function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      {/* Nav */}
      <header className="landing-nav">
        <div className="landing-nav-inner">
          <div className="landing-nav-left">
            <div className="sidebar-logo-mark">
              <Zap size={14} />
            </div>
            <span className="landing-nav-brand">Foundry AI</span>
          </div>
          <nav className="landing-nav-links">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="https://docs.foundryai.com" target="_blank" rel="noopener noreferrer">Docs</a>
          </nav>
          <div className="landing-nav-right">
            <button className="btn btn-ghost" onClick={() => navigate('/login')}>Sign in</button>
            <button className="btn btn-primary" onClick={() => navigate('/login')}>
              Get Started <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="landing-hero">
        <div className="landing-hero-inner">
          <div className="landing-hero-badge">
            <Shield size={12} />
            <span>Backed by Y Combinator · W26</span>
          </div>
          <h1 className="landing-hero-title">
            Intelligence for<br />Technical Hiring
          </h1>
          <p className="landing-hero-subtitle">
            Prepare for technical interviews with AI-powered simulations,
            personalized coding environments, and enterprise-grade analytics.
            Used by engineers at top companies worldwide.
          </p>
          <div className="landing-hero-actions">
            <button className="btn btn-primary btn-lg" onClick={() => navigate('/login')}>
              Start Preparing <ArrowRight size={16} />
            </button>
            <button className="btn btn-secondary btn-lg" onClick={() => navigate('/login')}>
              Book a Demo
            </button>
          </div>
          <div className="landing-hero-meta">
            <span>No credit card required</span>
            <span className="landing-dot">·</span>
            <span>Free tier available</span>
            <span className="landing-dot">·</span>
            <span>SOC 2 compliant</span>
          </div>
        </div>
      </section>

      {/* Product Screenshot */}
      <section className="landing-product">
        <div className="landing-product-inner">
          <div className="landing-product-window">
            <div className="landing-product-toolbar">
              <div className="landing-product-dots">
                <span></span><span></span><span></span>
              </div>
              <div className="landing-product-url">
                <span>app.foundryai.com/dashboard</span>
              </div>
              <div></div>
            </div>
            <div className="landing-product-screen">
              <div className="landing-screen-sidebar">
                <div className="landing-ss-item active">Dashboard</div>
                <div className="landing-ss-item">Interview Studio</div>
                <div className="landing-ss-item">Coding Lab</div>
                <div className="landing-ss-item">Resume Intel</div>
                <div className="landing-ss-item">Analytics</div>
              </div>
              <div className="landing-screen-content">
                <div className="landing-sc-header">
                  <div className="landing-sc-title">Welcome back, Arjun</div>
                  <div className="landing-sc-subtitle">Your preparation score is 82% — up 6 points this week</div>
                </div>
                <div className="landing-sc-grid">
                  <div className="landing-sc-card">
                    <div className="landing-sc-metric">87</div>
                    <div className="landing-sc-label">Last Interview Score</div>
                    <div className="landing-sc-bar"><div style={{ width: '87%' }}></div></div>
                  </div>
                  <div className="landing-sc-card">
                    <div className="landing-sc-metric">24</div>
                    <div className="landing-sc-label">Problems Solved</div>
                    <div className="landing-sc-bar accent"><div style={{ width: '72%' }}></div></div>
                  </div>
                  <div className="landing-sc-card">
                    <div className="landing-sc-metric">91st</div>
                    <div className="landing-sc-label">Percentile</div>
                    <div className="landing-sc-bar success"><div style={{ width: '91%' }}></div></div>
                  </div>
                </div>
                <div className="landing-sc-table">
                  <div className="landing-sc-table-header">
                    <span>Recent Sessions</span>
                    <span>Score</span>
                    <span>Status</span>
                  </div>
                  <div className="landing-sc-table-row">
                    <span>System Design — URL Shortener</span>
                    <span>87</span>
                    <span className="badge badge-success">Completed</span>
                  </div>
                  <div className="landing-sc-table-row">
                    <span>LRU Cache Implementation</span>
                    <span>92</span>
                    <span className="badge badge-success">Completed</span>
                  </div>
                  <div className="landing-sc-table-row">
                    <span>Behavioral — Leadership</span>
                    <span>78</span>
                    <span className="badge badge-success">Completed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="landing-proof">
        <div className="landing-proof-inner">
          <p className="landing-proof-label">Trusted by engineers at</p>
          <div className="landing-proof-logos">
            {companies.map(c => (
              <span key={c} className="landing-proof-logo">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="landing-stats">
        <div className="landing-stats-inner">
          {stats.map(s => (
            <div key={s.label} className="landing-stat">
              <div className="landing-stat-value">{s.value}</div>
              <div className="landing-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="landing-features">
        <div className="landing-features-inner">
          <div className="landing-features-header">
            <h2>Everything you need to land the offer</h2>
            <p>A complete platform for technical interview preparation — from first practice to final round.</p>
          </div>
          <div className="landing-features-grid">
            {features.map(f => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="landing-feature">
                  <div className="landing-feature-icon">
                    <Icon size={20} />
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enterprise */}
      <section className="landing-enterprise">
        <div className="landing-enterprise-inner">
          <div className="landing-enterprise-content">
            <div className="overline" style={{ color: 'var(--color-accent)', marginBottom: 'var(--space-3)' }}>Enterprise</div>
            <h2>Built for hiring teams at scale</h2>
            <p>Recruiter workspace with candidate pipelines, assessment tracking, team analytics, SSO, and audit logs. Everything your hiring team needs in one platform.</p>
            <div className="landing-enterprise-features">
              <div><Users size={14} /> <span>Candidate pipeline management</span></div>
              <div><Shield size={14} /> <span>SSO & SAML authentication</span></div>
              <div><BarChart3 size={14} /> <span>Team-wide analytics & reporting</span></div>
              <div><Code2 size={14} /> <span>Custom assessment creation</span></div>
            </div>
            <button className="btn btn-primary btn-lg" onClick={() => navigate('/login')}>
              Contact Sales <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="landing-cta">
        <div className="landing-cta-inner">
          <h2>Start preparing today</h2>
          <p>Join thousands of engineers who've landed offers at top companies.</p>
          <button className="btn btn-primary btn-lg" onClick={() => navigate('/login')}>
            Get Started — Free <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="landing-footer-inner">
          <div className="landing-footer-left">
            <div className="sidebar-logo-mark" style={{ width: 20, height: 20 }}>
              <Zap size={11} />
            </div>
            <span>Foundry AI</span>
            <span className="landing-footer-copy">© 2026</span>
          </div>
          <div className="landing-footer-right">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Security</a>
            <a href="#">Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
