# Backend Schema Document: EduGuide.ai

*Note: For the MVP and initial frontend build, this schema will be represented as Mock JSON data. This document outlines the structural relationships for future database integration.*

## 1. `Users` Table
Stores authentication and basic user identity.
* `id` (UUID, Primary Key)
* `email` (String, Unique)
* `password_hash` (String)
* `full_name` (String)
* `role` (Enum: 'STUDENT', 'ADMIN')
* `created_at` (Timestamp)

## 2. `StudentProfiles` Table
Stores academic context and dashboard state.
* `id` (UUID, Primary Key)
* `user_id` (UUID, Foreign Key -> Users)
* `current_class` (Integer: 10, 11, 12)
* `current_stream` (String)
* `assessment_completion_percent` (Integer)
* `radar_affinity_data` (JSONB) - e.g., `{ analytical: 80, creative: 40, aptitude: 90 }`

## 3. `Questions` Table (Quiz)
Stores the psychometric evaluation questions.
* `id` (UUID, Primary Key)
* `question_text` (String)
* `options` (Array of Objects) - e.g., `[{ text: "Option A", category_impact: "analytical", weight: 2 }]`
* `order_index` (Integer)

## 4. `Roadmaps` Table
Stores the templates for career paths.
* `id` (UUID, Primary Key)
* `role_name` (String) - e.g., "AI & Machine Learning Engineer"
* `base_stream` (String) - e.g., "Science Stream"

## 5. `RoadmapMilestones` Table
Nodes within a roadmap.
* `id` (UUID, Primary Key)
* `roadmap_id` (UUID, Foreign Key -> Roadmaps)
* `step_number` (Integer)
* `title` (String) - e.g., "Class 11 & 12 Subjects"
* `subtitle` (String)
* `description` (Text)
* `target_skills` (Array of Strings) - e.g., `["Python", "TensorFlow"]`
* `certifications` (Array of Strings)

## 6. `Exams` Table
Standardized assessments database.
* `id` (UUID, Primary Key)
* `name` (String)
* `short_name` (String) - e.g., "JEE Advanced"
* `category` (Enum: 'Engineering', 'Medical', 'Law')
* `difficulty` (Enum: 'Moderate', 'Hard', 'Extreme')
* `exam_date` (Timestamp)
* `eligibility_rules` (Text)
* `syllabus_details` (JSONB)

## 7. `Colleges` Table
Institutions and rankings.
* `id` (UUID, Primary Key)
* `name` (String)
* `location_state` (String)
* `nirf_rank` (Integer)
* `average_lpa` (Float)

## 8. `CutoffTrends` Table
Historical cutoff data for specific branches at specific colleges.
* `id` (UUID, Primary Key)
* `college_id` (UUID, Foreign Key -> Colleges)
* `branch_name` (String)
* `reservation_category` (String)
* `year` (Integer)
* `closing_rank` (Integer)

## 9. User Relations (Many-to-Many)
* `UserSavedExams`: `user_id`, `exam_id`
* `UserBookmarkedColleges`: `user_id`, `college_id`
* `UserSavedRoadmaps`: `user_id`, `roadmap_id`
