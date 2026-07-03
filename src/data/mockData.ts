// ============================================
// Foundry AI — Mock Data
// Realistic data for all pages
// ============================================

export const currentUser = {
  id: 'usr_01',
  name: 'Arjun Mehta',
  email: 'arjun@foundryai.com',
  avatar: null,
  initials: 'AM',
  role: 'Engineering Manager',
  plan: 'Pro',
  org: 'Foundry AI',
  orgId: 'org_foundry',
};

export const organizations = [
  { id: 'org_foundry', name: 'Foundry AI', members: 24, plan: 'Enterprise' },
  { id: 'org_personal', name: 'Personal Workspace', members: 1, plan: 'Pro' },
];

export const teamMembers = [
  { id: 'usr_01', name: 'Arjun Mehta', email: 'arjun@foundryai.com', initials: 'AM', role: 'Admin', status: 'active', lastActive: '2 min ago' },
  { id: 'usr_02', name: 'Sarah Chen', email: 'sarah.chen@foundryai.com', initials: 'SC', role: 'Admin', status: 'active', lastActive: '5 min ago' },
  { id: 'usr_03', name: 'Marcus Johnson', email: 'marcus.j@foundryai.com', initials: 'MJ', role: 'Member', status: 'active', lastActive: '1 hour ago' },
  { id: 'usr_04', name: 'Elena Rodriguez', email: 'elena.r@foundryai.com', initials: 'ER', role: 'Member', status: 'active', lastActive: '3 hours ago' },
  { id: 'usr_05', name: 'James Park', email: 'james.park@foundryai.com', initials: 'JP', role: 'Viewer', status: 'invited', lastActive: 'Never' },
  { id: 'usr_06', name: 'Priya Sharma', email: 'priya@foundryai.com', initials: 'PS', role: 'Member', status: 'active', lastActive: '30 min ago' },
  { id: 'usr_07', name: 'David Kim', email: 'david.kim@foundryai.com', initials: 'DK', role: 'Member', status: 'active', lastActive: '2 hours ago' },
  { id: 'usr_08', name: 'Aisha Patel', email: 'aisha.p@foundryai.com', initials: 'AP', role: 'Member', status: 'active', lastActive: '15 min ago' },
];

export const navItems = [
  { label: 'Dashboard', path: '/dashboard', icon: 'LayoutDashboard', shortcut: 'G D' },
  { label: 'Interview Studio', path: '/interviews', icon: 'MessageSquare', shortcut: 'G I' },
  { label: 'Coding Lab', path: '/coding', icon: 'Code2', shortcut: 'G C' },
  { label: 'Resume Intel', path: '/resume', icon: 'FileText', shortcut: 'G R' },
  { label: 'Knowledge Graph', path: '/knowledge', icon: 'Network', shortcut: 'G K' },
  { label: 'Voice Interview', path: '/voice', icon: 'Mic', shortcut: 'G V' },
  { label: 'Analytics', path: '/analytics', icon: 'BarChart3', shortcut: 'G A' },
];

export const recruiterNavItems = [
  { label: 'Recruiter Hub', path: '/recruiter', icon: 'Users', shortcut: 'G H' },
  { label: 'Activity', path: '/activity', icon: 'Activity', shortcut: 'G T' },
];

export const settingsNavItems = [
  { label: 'Settings', path: '/settings', icon: 'Settings', shortcut: 'G S' },
  { label: 'Billing', path: '/billing', icon: 'CreditCard', shortcut: 'G B' },
  { label: 'Organization', path: '/org', icon: 'Building2', shortcut: 'G O' },
];

// ---- Dashboard ----

export const recentSessions = [
  { id: 'ses_01', type: 'Mock Interview', title: 'Senior Frontend — React System Design', company: 'Meta', status: 'completed', score: 87, date: '2026-07-03T09:30:00Z', duration: '45 min', topics: ['React', 'System Design'] },
  { id: 'ses_02', type: 'Coding Challenge', title: 'LRU Cache Implementation', company: 'Google', status: 'completed', score: 92, date: '2026-07-02T14:00:00Z', duration: '32 min', topics: ['Data Structures', 'HashMap'] },
  { id: 'ses_03', type: 'Voice Interview', title: 'Behavioral — Leadership & Conflict', company: 'Stripe', status: 'completed', score: 78, date: '2026-07-01T11:00:00Z', duration: '28 min', topics: ['Behavioral', 'Leadership'] },
  { id: 'ses_04', type: 'Resume Review', title: 'Resume Tailored for Staff Engineer', company: 'Vercel', status: 'in_progress', score: null, date: '2026-07-03T11:00:00Z', duration: '—', topics: ['Resume'] },
  { id: 'ses_05', type: 'Mock Interview', title: 'Backend Systems — Distributed Cache', company: 'Amazon', status: 'scheduled', score: null, date: '2026-07-04T10:00:00Z', duration: '—', topics: ['Backend', 'Distributed Systems'] },
];

export const upcomingSchedule = [
  { id: 'sch_01', title: 'System Design — URL Shortener', type: 'Mock Interview', date: '2026-07-04T10:00:00Z', duration: '60 min' },
  { id: 'sch_02', title: 'DSA Sprint — Graph Algorithms', type: 'Coding Challenge', date: '2026-07-04T14:00:00Z', duration: '45 min' },
  { id: 'sch_03', title: 'Behavioral Prep — Amazon LP', type: 'Voice Interview', date: '2026-07-05T09:00:00Z', duration: '30 min' },
];

export const preparationScore = {
  overall: 82,
  categories: [
    { name: 'Data Structures', score: 88, maxScore: 100 },
    { name: 'Algorithms', score: 76, maxScore: 100 },
    { name: 'System Design', score: 84, maxScore: 100 },
    { name: 'Behavioral', score: 71, maxScore: 100 },
    { name: 'Frontend', score: 92, maxScore: 100 },
    { name: 'Backend', score: 79, maxScore: 100 },
  ],
};

export const activityFeed = [
  { id: 'act_01', user: 'Sarah Chen', action: 'completed a mock interview', target: 'Senior Backend — API Design', time: '5 min ago', type: 'interview' },
  { id: 'act_02', user: 'Marcus Johnson', action: 'scored 95% on', target: 'Binary Search variations', time: '1 hour ago', type: 'coding' },
  { id: 'act_03', user: 'Elena Rodriguez', action: 'updated resume for', target: 'Staff Engineer @ Stripe', time: '2 hours ago', type: 'resume' },
  { id: 'act_04', user: 'Arjun Mehta', action: 'reviewed knowledge graph', target: 'Distributed Systems path', time: '3 hours ago', type: 'knowledge' },
  { id: 'act_05', user: 'David Kim', action: 'scheduled voice interview', target: 'Meta Behavioral Round', time: '4 hours ago', type: 'voice' },
  { id: 'act_06', user: 'Priya Sharma', action: 'completed coding challenge', target: 'Merge K Sorted Lists', time: '5 hours ago', type: 'coding' },
  { id: 'act_07', user: 'Aisha Patel', action: 'started system design prep', target: 'Chat Application Design', time: '6 hours ago', type: 'interview' },
];

// ---- Interview Studio ----

export const interviewRoles = [
  'Frontend Engineer', 'Backend Engineer', 'Full Stack Engineer', 'Staff Engineer',
  'Senior SWE', 'ML Engineer', 'Data Engineer', 'iOS Engineer', 'Android Engineer',
  'DevOps Engineer', 'Platform Engineer', 'Security Engineer',
];

export const interviewCompanies = [
  'Google', 'Meta', 'Amazon', 'Apple', 'Microsoft', 'Stripe', 'Vercel',
  'Netflix', 'Airbnb', 'Uber', 'LinkedIn', 'Databricks', 'Snowflake',
  'Coinbase', 'Block', 'Figma', 'Notion', 'Linear',
];

export const interviewTopics = [
  'Arrays & Strings', 'Linked Lists', 'Trees & Graphs', 'Dynamic Programming',
  'Binary Search', 'Sorting', 'Hash Maps', 'Stacks & Queues', 'Heaps',
  'System Design', 'API Design', 'Database Design', 'Behavioral', 'Leadership',
  'Concurrency', 'Distributed Systems', 'React', 'TypeScript', 'Node.js',
];

export const mockInterviewMessages = [
  { id: 'msg_01', role: 'interviewer', content: "Hi! Thanks for joining today. I'm going to be your interviewer for this system design round. Let's start with a warm-up — can you tell me a bit about your experience with distributed systems?", time: '0:00' },
  { id: 'msg_02', role: 'candidate', content: "Sure! I've been working with distributed systems for about 4 years. At my current role, I designed a real-time event processing pipeline handling ~500K events/sec using Kafka and a custom consumer framework. I also led the migration of our monolithic auth service to a microservices architecture.", time: '0:45' },
  { id: 'msg_03', role: 'interviewer', content: "Great background. Let's dive into the main question. I'd like you to design a URL shortening service like bit.ly. Walk me through how you'd approach this at scale — say 100M new URLs per day, 10x that in reads.", time: '1:30' },
  { id: 'msg_04', role: 'candidate', content: "I'll start by clarifying requirements. For a URL shortener at this scale, we need: 1) Short URL generation with ~7 character codes, 2) Redirect with low latency (<50ms p99), 3) Analytics on click counts, 4) URL expiration support. Let me sketch the high-level architecture first.", time: '2:15' },
  { id: 'msg_05', role: 'interviewer', content: "Good start. How would you handle the key generation to avoid collisions at this scale?", time: '3:00' },
];

export const interviewRubric = [
  { category: 'Requirements Gathering', score: 4, maxScore: 5, notes: 'Clarified scale and edge cases well' },
  { category: 'High-Level Design', score: 4, maxScore: 5, notes: 'Clean architecture with proper separation' },
  { category: 'Deep Dive', score: 3, maxScore: 5, notes: 'Could explore caching strategy further' },
  { category: 'Trade-offs', score: 5, maxScore: 5, notes: 'Excellent discussion of consistency vs availability' },
  { category: 'Communication', score: 4, maxScore: 5, notes: 'Clear and structured explanation' },
];

// ---- Coding Environment ----

export const codingProblems = [
  {
    id: 'prob_01',
    title: 'LRU Cache',
    difficulty: 'Medium',
    tags: ['Hash Map', 'Linked List', 'Design'],
    description: `Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:
- LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
- int get(int key) Return the value of the key if the key exists, otherwise return -1.
- void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.

The functions get and put must each run in O(1) average time complexity.`,
    starterCode: `class LRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = {}
        self.order = []

    def get(self, key: int) -> int:
        if key in self.cache:
            self.order.remove(key)
            self.order.append(key)
            return self.cache[key]
        return -1

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.order.remove(key)
        elif len(self.cache) >= self.capacity:
            oldest = self.order.pop(0)
            del self.cache[oldest]
        self.cache[key] = value
        self.order.append(key)`,
    testCases: [
      { input: '["LRUCache","put","put","get","put","get","put","get","get","get"]\n[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]', expected: '[null,null,null,1,null,-1,null,-1,3,4]', passed: true },
      { input: '["LRUCache","put","get"]\n[[1],[2,1],[2]]', expected: '[null,null,1]', passed: true },
      { input: '["LRUCache","put","put","get","put","get"]\n[[2],[2,1],[1,1],[2],[4,1],[1]]', expected: '[null,null,null,1,null,-1]', passed: false },
    ],
    constraints: ['1 ≤ capacity ≤ 3000', '-10⁵ ≤ key, value ≤ 10⁵', 'At most 2 × 10⁵ calls to get and put'],
    companies: ['Amazon', 'Google', 'Meta', 'Microsoft'],
    acceptance: '41.2%',
  },
];

export const languageOptions = [
  { value: 'python', label: 'Python 3', ext: '.py' },
  { value: 'javascript', label: 'JavaScript', ext: '.js' },
  { value: 'typescript', label: 'TypeScript', ext: '.ts' },
  { value: 'java', label: 'Java 17', ext: '.java' },
  { value: 'cpp', label: 'C++ 17', ext: '.cpp' },
  { value: 'go', label: 'Go', ext: '.go' },
  { value: 'rust', label: 'Rust', ext: '.rs' },
];

// ---- Resume Intelligence ----

export const resumeAnalysis = {
  atsScore: 84,
  sections: [
    { name: 'Contact Info', status: 'pass', feedback: 'Email, phone, LinkedIn, and GitHub all present' },
    { name: 'Summary', status: 'warning', feedback: 'Consider adding quantified achievements to your summary' },
    { name: 'Experience', status: 'pass', feedback: 'Strong action verbs and metrics in 4/5 bullet points' },
    { name: 'Skills', status: 'pass', feedback: 'Technical skills well-organized by category' },
    { name: 'Education', status: 'pass', feedback: 'Degree and relevant coursework included' },
    { name: 'Projects', status: 'warning', feedback: 'Add deployment URLs or GitHub links to projects' },
  ],
  suggestions: [
    { priority: 'high', text: 'Add "distributed systems" keyword — appears in 78% of Staff Engineer JDs at target companies' },
    { priority: 'high', text: 'Quantify the impact of the Kafka pipeline migration (e.g., latency reduction, cost savings)' },
    { priority: 'medium', text: 'Reorder skills: put TypeScript before JavaScript based on current market demand' },
    { priority: 'medium', text: 'Add a "Technical Leadership" section highlighting mentoring and architecture decisions' },
    { priority: 'low', text: 'Consider removing the 2019 internship — it may dilute your senior-level positioning' },
  ],
  targetCompanies: [
    { name: 'Stripe', match: 89, missingKeywords: ['payments', 'financial systems'] },
    { name: 'Vercel', match: 94, missingKeywords: ['edge computing'] },
    { name: 'Linear', match: 91, missingKeywords: ['real-time sync'] },
  ],
};

// ---- Knowledge Graph ----

export const knowledgeTopics = [
  { id: 'kt_01', name: 'Data Structures', mastery: 85, subtopics: ['Arrays', 'Linked Lists', 'Trees', 'Graphs', 'Hash Maps', 'Heaps', 'Tries'], color: '#4F7CFF' },
  { id: 'kt_02', name: 'Algorithms', mastery: 72, subtopics: ['Sorting', 'Binary Search', 'DFS/BFS', 'Dynamic Programming', 'Greedy', 'Backtracking'], color: '#5BE7C4' },
  { id: 'kt_03', name: 'System Design', mastery: 78, subtopics: ['Load Balancing', 'Caching', 'Databases', 'Message Queues', 'Microservices', 'CDN'], color: '#FFAA33' },
  { id: 'kt_04', name: 'Frontend', mastery: 91, subtopics: ['React', 'TypeScript', 'CSS', 'Performance', 'State Management', 'Testing'], color: '#FF5D73' },
  { id: 'kt_05', name: 'Backend', mastery: 76, subtopics: ['Node.js', 'Python', 'APIs', 'Authentication', 'Databases', 'Caching'], color: '#A78BFA' },
  { id: 'kt_06', name: 'Behavioral', mastery: 68, subtopics: ['Leadership', 'Conflict Resolution', 'Communication', 'Project Management'], color: '#F472B6' },
];

export const studyPaths = [
  { id: 'sp_01', name: 'Staff Engineer Track', progress: 64, totalItems: 48, completedItems: 31, estimatedHours: 12 },
  { id: 'sp_02', name: 'System Design Mastery', progress: 45, totalItems: 32, completedItems: 14, estimatedHours: 18 },
  { id: 'sp_03', name: 'DSA Interview Sprint', progress: 82, totalItems: 60, completedItems: 49, estimatedHours: 6 },
];

// ---- Recruiter Workspace ----

export const candidates = [
  { id: 'cand_01', name: 'Alex Rivera', email: 'alex.r@gmail.com', initials: 'AR', role: 'Senior Frontend Engineer', stage: 'Technical Screen', score: 88, appliedDate: '2026-06-28', source: 'LinkedIn', status: 'active', location: 'San Francisco, CA' },
  { id: 'cand_02', name: 'Mei Lin', email: 'mei.lin@outlook.com', initials: 'ML', role: 'Staff Engineer', stage: 'Onsite', score: 94, appliedDate: '2026-06-25', source: 'Referral', status: 'active', location: 'New York, NY' },
  { id: 'cand_03', name: 'Jordan Foster', email: 'j.foster@yahoo.com', initials: 'JF', role: 'Backend Engineer', stage: 'Phone Screen', score: 72, appliedDate: '2026-06-30', source: 'Website', status: 'active', location: 'Austin, TX' },
  { id: 'cand_04', name: 'Anya Kowalski', email: 'anya.k@proton.me', initials: 'AK', role: 'Full Stack Engineer', stage: 'Offer', score: 91, appliedDate: '2026-06-15', source: 'AngelList', status: 'active', location: 'Seattle, WA' },
  { id: 'cand_05', name: 'Ryan Okafor', email: 'ryan.ok@gmail.com', initials: 'RO', role: 'Platform Engineer', stage: 'Rejected', score: 58, appliedDate: '2026-06-20', source: 'LinkedIn', status: 'rejected', location: 'Chicago, IL' },
  { id: 'cand_06', name: 'Sophie Zhang', email: 'sophie.z@email.com', initials: 'SZ', role: 'Senior Backend Engineer', stage: 'Technical Screen', score: 85, appliedDate: '2026-06-29', source: 'Referral', status: 'active', location: 'Boston, MA' },
  { id: 'cand_07', name: 'Carlos Mendez', email: 'carlos.m@gmail.com', initials: 'CM', role: 'ML Engineer', stage: 'Phone Screen', score: 79, appliedDate: '2026-07-01', source: 'Website', status: 'active', location: 'Denver, CO' },
  { id: 'cand_08', name: 'Lena Petrova', email: 'lena.p@outlook.com', initials: 'LP', role: 'Frontend Engineer', stage: 'Onsite', score: 86, appliedDate: '2026-06-22', source: 'LinkedIn', status: 'active', location: 'Portland, OR' },
];

export const pipelineStages = [
  { name: 'Applied', count: 142 },
  { name: 'Phone Screen', count: 38 },
  { name: 'Technical Screen', count: 24 },
  { name: 'Onsite', count: 12 },
  { name: 'Offer', count: 4 },
  { name: 'Hired', count: 2 },
];

// ---- Analytics ----

export const performanceData = {
  weekly: [
    { week: 'Jun 2', score: 68 },
    { week: 'Jun 9', score: 72 },
    { week: 'Jun 16', score: 71 },
    { week: 'Jun 23', score: 78 },
    { week: 'Jun 30', score: 82 },
    { week: 'Jul 7', score: 85 },
  ],
  topicBreakdown: [
    { topic: 'Data Structures', score: 88, sessions: 24 },
    { topic: 'Algorithms', score: 76, sessions: 18 },
    { topic: 'System Design', score: 84, sessions: 12 },
    { topic: 'Behavioral', score: 71, sessions: 8 },
    { topic: 'Frontend', score: 92, sessions: 15 },
    { topic: 'Backend', score: 79, sessions: 10 },
  ],
  stats: {
    totalSessions: 87,
    totalHours: 64,
    avgScore: 82,
    percentile: 91,
    streak: 12,
    completionRate: 94,
  },
};

export const recruiterAnalytics = {
  funnel: [
    { stage: 'Applications', count: 1420, rate: 100 },
    { stage: 'Screened', count: 680, rate: 47.9 },
    { stage: 'Technical', count: 240, rate: 16.9 },
    { stage: 'Onsite', count: 120, rate: 8.5 },
    { stage: 'Offers', count: 42, rate: 3.0 },
    { stage: 'Accepted', count: 28, rate: 2.0 },
  ],
  passRates: {
    phoneScreen: 68,
    technicalScreen: 52,
    onsite: 45,
    offerAcceptance: 67,
  },
  timeToHire: 23,
  openRoles: 8,
};

// ---- Notifications ----

export const notifications = [
  { id: 'not_01', type: 'mention', title: 'Sarah Chen mentioned you', description: 'in the feedback for Alex Rivera\'s technical screen', time: '5 min ago', read: false },
  { id: 'not_02', type: 'update', title: 'Interview session completed', description: 'Your System Design mock scored 87/100', time: '1 hour ago', read: false },
  { id: 'not_03', type: 'reminder', title: 'Upcoming: DSA Sprint', description: 'Graph Algorithms session starts in 2 hours', time: '2 hours ago', read: false },
  { id: 'not_04', type: 'update', title: 'Resume analysis ready', description: 'Your Stripe-tailored resume scored 89% ATS match', time: '3 hours ago', read: true },
  { id: 'not_05', type: 'mention', title: 'Marcus Johnson shared results', description: 'Binary Search challenge — 95% score', time: '5 hours ago', read: true },
  { id: 'not_06', type: 'system', title: 'New feature: Voice Interview 2.0', description: 'Real-time transcription and analysis now available', time: '1 day ago', read: true },
  { id: 'not_07', type: 'update', title: 'Weekly analytics report', description: 'Your preparation score improved by 6 points', time: '2 days ago', read: true },
];

// ---- Activity Timeline ----

export const activityTimeline = [
  { id: 'tl_01', user: 'Arjun Mehta', action: 'completed', target: 'System Design — URL Shortener mock interview', type: 'interview', time: '2026-07-03T09:30:00Z', metadata: { score: 87 } },
  { id: 'tl_02', user: 'Sarah Chen', action: 'reviewed', target: 'Alex Rivera — Technical Screen feedback', type: 'recruiter', time: '2026-07-03T09:15:00Z', metadata: { decision: 'advance' } },
  { id: 'tl_03', user: 'Marcus Johnson', action: 'solved', target: 'Binary Search — Rotated Sorted Array', type: 'coding', time: '2026-07-03T08:45:00Z', metadata: { score: 95, language: 'Python' } },
  { id: 'tl_04', user: 'Elena Rodriguez', action: 'updated', target: 'Resume — Staff Engineer @ Stripe', type: 'resume', time: '2026-07-03T08:00:00Z', metadata: { atsScore: 89 } },
  { id: 'tl_05', user: 'David Kim', action: 'scheduled', target: 'Meta Behavioral Round — Voice Interview', type: 'voice', time: '2026-07-03T07:30:00Z', metadata: { scheduledFor: '2026-07-05T09:00:00Z' } },
  { id: 'tl_06', user: 'Priya Sharma', action: 'completed', target: 'Merge K Sorted Lists', type: 'coding', time: '2026-07-02T16:00:00Z', metadata: { score: 88, language: 'TypeScript' } },
  { id: 'tl_07', user: 'Arjun Mehta', action: 'reviewed', target: 'Knowledge Graph — Distributed Systems path', type: 'knowledge', time: '2026-07-02T14:30:00Z', metadata: { progress: 64 } },
  { id: 'tl_08', user: 'Aisha Patel', action: 'started', target: 'Chat Application — System Design prep', type: 'interview', time: '2026-07-02T13:00:00Z', metadata: {} },
  { id: 'tl_09', user: 'Sarah Chen', action: 'moved', target: 'Mei Lin to Onsite stage', type: 'recruiter', time: '2026-07-02T11:00:00Z', metadata: { from: 'Technical Screen', to: 'Onsite' } },
  { id: 'tl_10', user: 'Marcus Johnson', action: 'completed', target: 'Voice Interview — Google Behavioral', type: 'voice', time: '2026-07-02T10:00:00Z', metadata: { score: 82, duration: '32 min' } },
];

// ---- Billing ----

export const billingPlans = [
  {
    id: 'plan_free', name: 'Free', price: 0, period: 'month',
    features: ['5 mock interviews/month', '3 coding challenges/day', 'Basic resume analysis', 'Community support'],
    limits: { interviews: 5, coding: 3, resumeReviews: 2 },
  },
  {
    id: 'plan_pro', name: 'Pro', price: 29, period: 'month', popular: true,
    features: ['Unlimited mock interviews', 'Unlimited coding challenges', 'AI resume intelligence', 'Voice interview prep', 'Knowledge graph', 'Priority support', 'Analytics dashboard'],
    limits: { interviews: -1, coding: -1, resumeReviews: -1 },
  },
  {
    id: 'plan_enterprise', name: 'Enterprise', price: 99, period: 'seat/month',
    features: ['Everything in Pro', 'Recruiter workspace', 'Candidate pipeline', 'Team analytics', 'SSO & SAML', 'Custom integrations', 'Dedicated CSM', 'SLA guarantee'],
    limits: { interviews: -1, coding: -1, resumeReviews: -1 },
  },
];

export const invoices = [
  { id: 'inv_01', date: '2026-07-01', amount: 29.00, status: 'paid', plan: 'Pro', period: 'Jul 2026' },
  { id: 'inv_02', date: '2026-06-01', amount: 29.00, status: 'paid', plan: 'Pro', period: 'Jun 2026' },
  { id: 'inv_03', date: '2026-05-01', amount: 29.00, status: 'paid', plan: 'Pro', period: 'May 2026' },
  { id: 'inv_04', date: '2026-04-01', amount: 29.00, status: 'paid', plan: 'Pro', period: 'Apr 2026' },
  { id: 'inv_05', date: '2026-03-01', amount: 0.00, status: 'paid', plan: 'Free', period: 'Mar 2026' },
];

// ---- Settings ----

export const integrations = [
  { id: 'int_01', name: 'GitHub', status: 'connected', icon: 'github', description: 'Import repositories and code samples' },
  { id: 'int_02', name: 'Google Calendar', status: 'connected', icon: 'calendar', description: 'Sync interview schedules' },
  { id: 'int_03', name: 'Slack', status: 'disconnected', icon: 'slack', description: 'Get notifications in Slack' },
  { id: 'int_04', name: 'Linear', status: 'disconnected', icon: 'linear', description: 'Track preparation tasks' },
  { id: 'int_05', name: 'Notion', status: 'connected', icon: 'notion', description: 'Export notes and summaries' },
];

// ---- Command Palette ----

export const commandItems = [
  { id: 'cmd_01', label: 'Start Mock Interview', category: 'Actions', shortcut: 'N I', icon: 'MessageSquare' },
  { id: 'cmd_02', label: 'Start Coding Challenge', category: 'Actions', shortcut: 'N C', icon: 'Code2' },
  { id: 'cmd_03', label: 'Analyze Resume', category: 'Actions', shortcut: 'N R', icon: 'FileText' },
  { id: 'cmd_04', label: 'Start Voice Interview', category: 'Actions', shortcut: 'N V', icon: 'Mic' },
  { id: 'cmd_05', label: 'Go to Dashboard', category: 'Navigation', shortcut: 'G D', icon: 'LayoutDashboard' },
  { id: 'cmd_06', label: 'Go to Interview Studio', category: 'Navigation', shortcut: 'G I', icon: 'MessageSquare' },
  { id: 'cmd_07', label: 'Go to Coding Lab', category: 'Navigation', shortcut: 'G C', icon: 'Code2' },
  { id: 'cmd_08', label: 'Go to Analytics', category: 'Navigation', shortcut: 'G A', icon: 'BarChart3' },
  { id: 'cmd_09', label: 'Go to Settings', category: 'Navigation', shortcut: 'G S', icon: 'Settings' },
  { id: 'cmd_10', label: 'Search Candidates', category: 'Search', icon: 'Search' },
  { id: 'cmd_11', label: 'Search Problems', category: 'Search', icon: 'Search' },
  { id: 'cmd_12', label: 'Toggle Sidebar', category: 'Preferences', shortcut: 'Ctrl+B', icon: 'PanelLeft' },
  { id: 'cmd_13', label: 'Toggle Notifications', category: 'Preferences', shortcut: 'Ctrl+N', icon: 'Bell' },
];

// ---- Voice Interview ----

export const voiceTranscript = [
  { id: 'vt_01', speaker: 'AI Interviewer', text: "Welcome to your behavioral interview preparation. Today we'll focus on leadership and conflict resolution scenarios. Are you ready to begin?", time: '0:00' },
  { id: 'vt_02', speaker: 'You', text: "Yes, I'm ready. I've prepared several stories from my recent experience leading a team of 8 engineers.", time: '0:12' },
  { id: 'vt_03', speaker: 'AI Interviewer', text: "Tell me about a time when you had to make a difficult technical decision that not everyone on your team agreed with. How did you handle the disagreement?", time: '0:25' },
  { id: 'vt_04', speaker: 'You', text: "At my previous company, we needed to decide between migrating to a new framework or continuing to invest in our existing one. The team was split — senior engineers wanted stability, while newer team members pushed for modern tooling. I facilitated a structured evaluation over two weeks where we defined clear criteria: developer productivity, maintenance cost, hiring impact, and migration risk.", time: '0:42' },
  { id: 'vt_05', speaker: 'AI Interviewer', text: "That's a structured approach. What was the outcome, and how did you handle the team members who didn't agree with the final decision?", time: '1:35' },
];

// ---- Audit Log ----

export const auditLog = [
  { id: 'aud_01', user: 'Arjun Mehta', action: 'Updated organization settings', resource: 'SSO Configuration', time: '2026-07-03T08:00:00Z', ip: '192.168.1.105' },
  { id: 'aud_02', user: 'Sarah Chen', action: 'Invited team member', resource: 'James Park (james.park@foundryai.com)', time: '2026-07-02T15:30:00Z', ip: '10.0.0.42' },
  { id: 'aud_03', user: 'Arjun Mehta', action: 'Changed role', resource: 'Elena Rodriguez → Member', time: '2026-07-01T09:15:00Z', ip: '192.168.1.105' },
  { id: 'aud_04', user: 'Sarah Chen', action: 'Updated billing plan', resource: 'Pro → Enterprise', time: '2026-06-28T14:00:00Z', ip: '10.0.0.42' },
  { id: 'aud_05', user: 'Arjun Mehta', action: 'Created API key', resource: 'Production key (fnd_pk_***)', time: '2026-06-25T11:00:00Z', ip: '192.168.1.105' },
];
