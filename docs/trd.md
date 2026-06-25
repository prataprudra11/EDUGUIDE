# Technical Requirements Document (TRD): EduGuide.ai

## 1. System Architecture
The platform will follow a standard Client-Server architecture utilizing a RESTful API (or GraphQL) for communication between the React frontend and the backend server.

## 2. Technology Stack

### 2.1 Frontend
* **Core:** React 18+ (Functional components, Hooks)
* **Build Tool:** Vite (for fast HMR and optimized builds)
* **Styling:** Tailwind CSS (utility-first CSS) + Custom CSS (`index.css`) for specific glassmorphism effects.
* **Animations:** Framer Motion (for smooth page transitions and micro-interactions).
* **Icons:** Lucide React.
* **Charts/Graphs:** Recharts or Chart.js (for rendering Radar charts, Line graphs for cutoffs, and Skill development curves).
* **State Management:** React Context API (for global states like Theme/Auth) and standard React State for local component data.
* **Routing:** React Router DOM (v6+).

### 2.2 Backend (Proposed)
* **Server:** Node.js with Express.js (or Python FastAPI if heavy AI integration requires Python libraries).
* **Database:** PostgreSQL (Relational structure for users, colleges, exams) or MongoDB (for flexible quiz and roadmap schemas). 
* **ORM/ODM:** Prisma (if PostgreSQL) or Mongoose (if MongoDB).
* **Authentication:** JSON Web Tokens (JWT) & bcrypt for password hashing. Oauth 2.0 (Google Login).

### 2.3 AI & Analytics Services
* **Recommendation Engine:** OpenAI API (GPT-4o/mini) or a custom Python microservice utilizing scikit-learn for mapping quiz answers to stream affinities and career paths.

## 3. Directory & Codebase Structure (Frontend)
```text
EduGuide/
├── public/                # Static assets
├── src/
│   ├── assets/            # Images, global icons
│   ├── components/        # Reusable UI components (Cards, Buttons, Charts, Navbar)
│   ├── context/           # React Context providers (ThemeContext, AuthContext)
│   ├── data/              # Mock JSON data (Exam lists, cutoffs, roadmaps)
│   ├── pages/             # Page components (Home, Dashboard, StreamSelection, etc.)
│   ├── utils/             # Helper functions (date formatting, calculation logic)
│   ├── App.jsx            # Main app router wrapper
│   ├── index.css          # Global Tailwind and custom styles
│   └── main.jsx           # React DOM render entry
├── package.json
├── tailwind.config.js     # Custom theme colors, fonts, and extensions
└── vite.config.js
```

## 4. API Endpoints (Draft)
* **Auth:** `/api/auth/register`, `/api/auth/login`, `/api/auth/me`
* **Users:** `/api/users/:id/profile`, `/api/users/:id/bookmarks`
* **Quiz:** `/api/quiz/questions`, `/api/quiz/submit` (returns stream affinity)
* **Roadmaps:** `/api/roadmaps/:role_id`
* **Exams:** `/api/exams`, `/api/exams/:id`
* **Colleges:** `/api/colleges`, `/api/colleges/cutoffs`

## 5. Security & Data Privacy
* Passwords must be hashed.
* API routes must be protected using JWT middleware.
* Rate limiting on critical endpoints (login, AI prediction) to prevent abuse.

## 6. Hosting & Deployment
* **Frontend:** Vercel or Netlify (CI/CD via GitHub).
* **Backend:** Render, Railway, or AWS EC2.
* **Database:** Supabase/Neon (PostgreSQL) or MongoDB Atlas.
