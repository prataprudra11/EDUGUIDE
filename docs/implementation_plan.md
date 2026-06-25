# Implementation Plan: EduGuide.ai

This document outlines the step-by-step technical plan to build the EduGuide.ai frontend application, adhering to the UI/UX, TRD, and PRD documents.

## User Review Required
> [!IMPORTANT]
> The current plan focuses entirely on the **Frontend Build** (React + Vite + Tailwind + Mock Data) as specified in the README's current features. Backend integration and real AI logic are listed as "Future Improvements" in your README. 
> Please confirm if building out the robust frontend UI with mock data (to look exactly like the design images) is the correct immediate goal.

## Open Questions
> [!WARNING]
> 1. Should I initialize the React project using Vite right now in the workspace, or do you already have a scaffolded project?
> 2. Do you have a preference for the Charting library? (I recommend `recharts` for React).
> 3. Do you want Tailwind configured for standard Light/Dark mode toggling right from Phase 1?

## Proposed Changes

### Phase 1: Project Initialization & Architecture
We will set up the React environment and essential libraries.

#### [NEW] `package.json`
- Initialize React via Vite.
- Add dependencies: `tailwindcss`, `react-router-dom`, `lucide-react`, `framer-motion`, `recharts`, `clsx`, `tailwind-merge`.

#### [NEW] `tailwind.config.js` & `src/index.css`
- Configure color tokens (Indigo, Emerald, Slate).
- Setup dark mode classes.
- Define custom glassmorphism utilities.

### Phase 2: Core Layout & Navigation
Building the app shell that persists across pages.

#### [NEW] `src/components/layout/Sidebar.jsx`
- Main navigation links with active states and icons.
- Theme toggle and User profile snippet.

#### [NEW] `src/components/layout/AppLayout.jsx`
- Wrapper component holding the Sidebar and the main content outlet.

### Phase 3: Mock Data Services
Instead of a backend, we will create robust mock data structures so the UI can be fully fleshed out and interactive.

#### [NEW] `src/data/mockData.js`
- Create JSON structures for:
  - User Profile & Active Skills (for Dashboard).
  - Quiz Questions.
  - Roadmaps (Milestones, Skills, Salary Data).
  - Exams List & Calendar Dates.
  - Colleges & 5-year Cutoff data.

### Phase 4: Page Implementations (The 5 Core Features)

#### [NEW] `src/pages/Dashboard.jsx`
- Implement assessment gauge, area chart for skills, and quick stats widgets.

#### [NEW] `src/pages/StreamSelection.jsx`
- Implement the interactive quiz UI with progress bar.
- Implement the Radar chart visualization for results using `recharts`.

#### [NEW] `src/pages/CareerRoadmap.jsx`
- Implement the vertical milestone node tree.
- State logic to switch the right-side panel content based on the selected node.
- Line chart for salary growth.

#### [NEW] `src/pages/EntranceExams.jsx`
- Filterable list of exams.
- Exam cards with tags (Difficulty, Category).
- Grid layout for Calendar widget.

#### [NEW] `src/pages/CollegesCutoffs.jsx`
- Implement the Cutoff Search settings bar.
- Implement the 5-year trend line chart.
- Implement the "Predictive Seat Calculator" gauge and college catalog list.

## Verification Plan

### Automated Tests
- N/A for this visual-heavy MVP phase unless explicitly requested. Ensure `npm run build` completes without errors.

### Manual Verification
- Start the Vite dev server (`npm run dev`).
- Navigate through all sidebar links to ensure routing works.
- Test the Light/Dark mode toggle across all pages.
- Interact with charts (hover tooltips) and the Roadmap nodes to ensure state updates correctly.
- Ensure the UI matches the high-fidelity screenshots provided.
