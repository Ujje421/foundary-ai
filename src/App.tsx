import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { Auth } from './pages/Auth';
import { Dashboard } from './pages/Dashboard';
import { InterviewStudio } from './pages/InterviewStudio';
import { CodingEnvironment } from './pages/CodingEnvironment';
import { ResumeIntelligence } from './pages/ResumeIntelligence';
import { KnowledgeGraph } from './pages/KnowledgeGraph';
import { RecruiterWorkspace } from './pages/RecruiterWorkspace';
import { VoiceInterview } from './pages/VoiceInterview';
import { Analytics } from './pages/Analytics';
import { SettingsPage } from './pages/Settings';
import { NotificationsPage } from './pages/NotificationsPage';
import { ActivityTimeline } from './pages/ActivityTimeline';
import { Billing } from './pages/Billing';
import { OrgManagement } from './pages/OrgManagement';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Auth />} />
        
        {/* Protected Routes (In a real app, these would be wrapped in an AuthGuard) */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/interviews" element={<InterviewStudio />} />
        <Route path="/coding" element={<CodingEnvironment />} />
        <Route path="/resume" element={<ResumeIntelligence />} />
        <Route path="/knowledge" element={<KnowledgeGraph />} />
        <Route path="/recruiter" element={<RecruiterWorkspace />} />
        <Route path="/voice" element={<VoiceInterview />} />
        <Route path="/analytics" element={<Analytics />} />
        
        {/* Manage & Settings Routes */}
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/activity" element={<ActivityTimeline />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/org" element={<OrgManagement />} />
        
        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
