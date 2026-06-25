# App Flow Document: EduGuide.ai

This document outlines the user journeys and navigational flow within the application.

## 1. Onboarding & Authentication Flow
1. **Landing Page:** User lands on the homepage showcasing platform features, an AI prediction mockup, and a "Get Started" call to action.
2. **Auth Modal/Page:** User clicks "Log In" or "Get Started".
   - *New User:* Fills out registration form (Name, Email, Password, Current Class).
   - *Returning User:* Enters credentials.
3. **Redirection:** Upon successful authentication, the user is routed to the **Dashboard**.

## 2. Global Navigation
* **Sidebar (Logged In):** Contains links to Dashboard, Stream Selection, Career Roadmap, Entrance Exams, Colleges & Cutoffs, and a Dark/Light Mode toggle and Log Out button.
* **Top Navbar:** Breadcrumbs, User Profile Icon, Notification Bell.

## 3. Core Feature Flows

### 3.1 Dashboard Flow
* **View:** User views high-level metrics (Assessment Completion %, Saved Exams, Bookmarked Colleges).
* **Action:** User can click "Take Quiz" in the assessment widget, which routes them to the Stream Selection flow.
* **Interaction:** User reviews the "Active Skills Development" area chart and "Exam Deadlines" summary list. Clicking an exam routes to the Entrance Exams Hub.

### 3.2 Stream Selection Flow
* **Entry:** From Sidebar or Dashboard widget.
* **Step 1:** User initiates the Psychometric Evaluation.
* **Step 2:** User progresses through multiple choice questions with a progress bar indicator.
* **Step 3:** Upon completion, the system processes responses.
* **Step 4:** User is presented with their "Student Profile" analysis, prominently featuring a Radar Chart (Stream Affinity) and a matching probability score for recommended streams/roles.

### 3.3 Interactive Career Roadmap Flow
* **Entry:** From Sidebar.
* **Step 1:** User selects a specialized job sector from a dropdown (e.g., AI & Machine Learning Engineer).
* **Step 2:** The Milestone Path Flowchart populates.
* **Step 3:** User clicks on a specific node (e.g., "Class 11 & 12 Subjects").
* **Step 4:** The right-hand panel updates to show "Active Stage Directives" (Target core skillsets, acquisition certifications) for that specific node.
* **Step 5:** User reviews the Salary Growth Trajectory graph at the bottom.
* **Action:** User can bookmark the roadmap or export it as a PDF.

### 3.4 Entrance Exams Hub Flow
* **Entry:** From Sidebar.
* **Step 1:** User views the list of major standardized assessments.
* **Step 2:** User uses the Filter Settings to narrow down by Specialization (Medical, Engineering) or Difficulty Level.
* **Step 3:** User interacts with an Exam Card. They can click "Expand Syllabus & Trackers" to view more details.
* **Step 4:** User uses the interactive Calendar Tracker widget to visualize dates.
* **Action:** User clicks the bookmark icon on an Exam Card to save it to their Dashboard tracker.

### 3.5 Colleges & Cutoff Analytics Flow
* **Entry:** From Sidebar.
* **Step 1:** User inputs Cutoff Search Settings (Target Stream Branch, Category, State).
* **Step 2:** The "Closing Cutoff Rank Variations (5 Years)" line graph updates dynamically based on the filters.
* **Step 3:** User enters their mock exam rank/score in the Predictive Seat Calculator.
* **Step 4:** The Admission Odds Gauge calculates and displays their estimated probability (e.g., 2% chance).
* **Step 5:** User reviews Campus Catalogs at the bottom, comparing LPA averages and NIRF rankings. User can bookmark specific colleges.
