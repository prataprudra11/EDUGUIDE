export const studentProfile = {
  name: "John Doe",
  classLevel: 12,
  currentStream: "Science",
  assessmentComplete: 100,
  bookmarkedExams: 2,
  bookmarkedColleges: 4,
  affinityScores: [
    { subject: 'Analytical', score: 90 },
    { subject: 'Creative', score: 65 },
    { subject: 'Aptitude', score: 85 },
    { subject: 'Verbal', score: 70 },
    { subject: 'Memory', score: 80 },
  ],
  skillDevelopment: [
    { month: 'Jan', value: 30 },
    { month: 'Feb', value: 45 },
    { month: 'Mar', value: 50 },
    { month: 'Apr', value: 65 },
    { month: 'May', value: 75 },
    { month: 'Jun', value: 92 },
  ]
};

export const upcomingExams = [
  {
    id: "jee-adv",
    name: "JEE Advanced",
    fullName: "Joint Entrance Examination - Advanced",
    category: "Engineering",
    difficulty: "Extreme",
    date: "2026-06-08",
    daysLeft: 16,
    eligibility: "Top 2,50,000 qualifiers of JEE Main, 10+2 with Physics, Chemistry, and Mathematics (min 75%)."
  },
  {
    id: "neet",
    name: "NEET UG",
    fullName: "National Eligibility cum Entrance Test",
    category: "Medical",
    difficulty: "Hard",
    date: "2026-06-28",
    daysLeft: 36,
    eligibility: "10+2 with Physics, Chemistry, Biology/Biotechnology, and English (min 50% for General). Min age 17."
  },
  {
    id: "clat",
    name: "CLAT",
    fullName: "Common Law Admission Test",
    category: "Law",
    difficulty: "Moderate",
    date: "2026-07-15",
    daysLeft: 52,
    eligibility: "10+2 or equivalent with minimum 45% marks (40% for SC/ST). No upper age limit."
  }
];

export const roadmapMilestones = [
  {
    id: 1,
    title: "Class 11 & 12 Subjects",
    subtitle: "Core Science Fundamentals",
    description: "Focus heavily on Mathematics, Physics, and Computer Science electives.",
    skills: ["Python Fundamentals", "Basic Calculus", "Logic Building"],
    certifications: []
  },
  {
    id: 2,
    title: "College / Degree",
    subtitle: "B.Tech/B.Sc in CS or Data Science",
    description: "Engage in data structures, algorithms, linear algebra, probability, and database structures.",
    skills: ["Data Structures & Algorithms", "Linear Algebra", "Database Management (SQL)"],
    certifications: ["Introduction to Computer Science (CS50)"]
  },
  {
    id: 3,
    title: "Skills & Specialization",
    subtitle: "Master Machine Learning Tools",
    description: "Learn Python, regression, classification, clustering, deep learning (neural nets), and PyTorch.",
    skills: ["Python Data Stack (Pandas/NumPy)", "Scikit-Learn", "TensorFlow / PyTorch"],
    certifications: ["DeepLearning.AI Specialization", "Google Professional ML Engineer"]
  },
  {
    id: 4,
    title: "Internship & Portfolio",
    subtitle: "Open Source & Kaggle Trials",
    description: "Build custom AI models, publish on GitHub, compete in Kaggle hackathons, and secure an internship.",
    skills: ["Git/GitHub", "Model Deployment", "Kaggle Competitions"],
    certifications: []
  },
  {
    id: 5,
    title: "Job Placement",
    subtitle: "Junior ML Engineer",
    description: "Land a role automating pipelines, model fine-tuning, and writing API endpoints.",
    skills: ["MLOps", "Docker/Kubernetes", "FastAPI/Flask"],
    certifications: []
  }
];

export const salaryGrowth = [
  { year: 1, salary: 8 },
  { year: 2, salary: 12 },
  { year: 3, salary: 18 },
  { year: 4, salary: 26 },
  { year: 5, salary: 38 },
  { year: 6, salary: 55 }
];

export const collegesData = [
  {
    id: "iitb",
    name: "IIT Bombay",
    fullName: "Indian Institute of Technology Bombay",
    location: "Maharashtra",
    nirf: 1,
    avgLpa: 21.82,
    cutoffs: [
      { year: 2021, rank: 67 },
      { year: 2022, rank: 60 },
      { year: 2023, rank: 66 },
      { year: 2024, rank: 62 },
      { year: 2025, rank: 59 },
    ]
  },
  {
    id: "iitd",
    name: "IIT Delhi",
    fullName: "Indian Institute of Technology Delhi",
    location: "Delhi",
    nirf: 2,
    avgLpa: 20.50,
    cutoffs: [
      { year: 2021, rank: 100 },
      { year: 2022, rank: 102 },
      { year: 2023, rank: 115 },
      { year: 2024, rank: 116 },
      { year: 2025, rank: 118 },
    ]
  }
];

export const performanceData = [
  { month: 'Jan', score: 65 },
  { month: 'Feb', score: 68 },
  { month: 'Mar', score: 74 },
  { month: 'Apr', score: 82 },
  { month: 'May', score: 86 },
];

export const skillData = [
  { subject: 'Analytical', score: 90 },
  { subject: 'Creative', score: 65 },
  { subject: 'Aptitude', score: 85 },
  { subject: 'Verbal', score: 70 },
  { subject: 'Memory', score: 80 },
];

export const cutoffData = [
  { college: 'IIT Bombay', branch: 'Computer Science', cutoff2023: '66', cutoff2022: '60', trend: 'Up' },
  { college: 'IIT Delhi', branch: 'Computer Science', cutoff2023: '115', cutoff2022: '102', trend: 'Down' },
  { college: 'NIT Trichy', branch: 'Computer Science', cutoff2023: '996', cutoff2022: '714', trend: 'Down' },
];
