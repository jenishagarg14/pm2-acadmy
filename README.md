# PM2 Interactive Learning Management System (LMS)
### Technical Acumen for Product Managers
**Institution**: HSB — Product Management II  
**Instructor**: Dr. Anand Fadte  

A modern, responsive, and fully interactive Learning Management System (LMS) purpose-built for students mastering technical architecture, APIs, databases, tech stacks, and Python.

Built 100% from actual presentation files provided in the course curriculum:
1. `PM2-Combined-Overview-v2 - Day 1.pptx` (Software Architecture, Web Fundamentals & The Modern Stack)
2. `PM2-APIs-Integrations-Combined-v2 - Day 2.pptx` (APIs, Webhooks & System Integrations)
3. `PM2-Databases-DataModeling-Combined-Day 3.pptx` (Databases, Data Modeling & SQL for PMs)
4. `PM2-Tech-Stacks-Guide.pptx` (Comprehensive Technology Stacks Field Guide)
5. `Tech-Stacks-Python.pptx` (Tech Stacks Deep Dive: The Python Ecosystem)

---

## 🌟 Key Features & Navigation Tabs

### 1. 📊 Student Dashboard
- **Personalized Welcome Banner**: Greets the learner and shows course progress at a glance.
- **Analytics Metrics**: Overall syllabus progress percentage, completed topics, average quiz score, and active study streak.
- **Resume Learning Hero**: One-click instant resume to jump directly back to the student's last accessed lesson.
- **Course Catalog Grid**: Progress meters, slide counts, and quick launch buttons for each subject.
- **High-Yield Exam Tip**: Curated daily mental model from the lecture slides.

### 2. 📚 My Courses
- **5 Comprehensive Courses**: Structured subject-wise across Core Architecture, API Engineering, Data & Databases, Tech Strategy, and Backend & AI.
- **Category Filtering**: Filter by topic domain.
- **Module & Syllabus Drawer**: Interactive breakdown of chapters, duration, and slide counts.
- **Direct PPT Download**: Download the original PowerPoint presentation for every subject.

### 3. 📖 Learning Materials
- **Chapter & Topic Breakdown**: Multi-tier curriculum navigation.
- **Clear Conceptual Explanations**: Complex engineering terms converted into plain, accessible English without losing technical accuracy.
- **Direct Lesson Launch**: Instant transition to interactive learning.

### 4. ⚡ Interactive Learning Hub (Active Lesson Player)
- **Side-by-Side Curriculum Navigation**: Quick jumping between topics with real-time completion checkmarks.
- **Dual View Modes**:
  - **Simple Explanation Mode**: Plain English concepts, mental model analogies (e.g., restaurant waiter for APIs, strict spreadsheets for databases), architectural step-by-step flows, core concepts breakdown, formatted comparison tables, real-world product case studies (Swiggy, Instagram, Netflix, UPI, Stripe, Ola), and high-yield Exam Alerts.
  - **Slide Deck Viewer**: A dedicated tab allowing students to view the exact slides transcribed from the original PowerPoint deck, including slide titles, bullet points, and speaker notes.
- **Interactive Controls**: "Mark as Completed" button, "Previous Topic", and "Next Topic" buttons.

### 5. 🎯 Quizzes & Practice Assessments
- **6 Comprehensive Assessments**: Individual quizzes for all 5 subjects plus a Capstone Certification Exam (81 questions total).
- **Strict Slide-Grounded MCQs**: 4 plausible options per question, instant score calculation, percentage grading, and celebratory confetti upon passing (≥75%).
- **Deep Explanations**: Comprehensive diagnostic review citing specific slides and explaining why the correct choice is right and others are incorrect.
- **Retake Option**: Retake assessments anytime to improve score.

### 6. 📝 Notes & Exam Revision
- **12 Interactive Cheat Sheets**:
  - HTTP Status Codes Diagnostic Table (200, 301, 400, 401, 403, 404, 429, 500, 502, 503, 504)
  - The 5 Parts of Every API Call
  - The 5 Essential SQL Commands (SELECT, FROM, WHERE, JOIN, GROUP BY)
  - Polling vs Webhooks Comparison
  - SQL vs NoSQL vs Polyglot Persistence Matrix
  - 10 Backend Languages Quick Reference Matrix
  - Cloud Service Comparative Mapping (AWS vs Azure vs GCP)
  - OWASP Top 10 Security Checklist for PMs
- **Chapter High-Yield Summaries**: Bulleted axioms and must-remember formulas for every lecture day.
- **Technical Glossary**: 30+ searchable definitions with product examples (Idempotency, ACID, RAG, Webhook, Vector DB, GIL, etc.).
- **Active Recall Flashcards**: Interactive click-to-flip cards with active recall practice, next/previous buttons, and shuffle mode.

### 7. 📈 Progress Tracking & Analytics
- **Visual Circular Progress Gauge**: Overall syllabus mastery percentage.
- **Course-by-Course Progress Bars**: Track progress across all 5 subjects individually.
- **Quiz Scorecard & History**: Historical attempt table with dates, scores, and pass/fail badges.
- **Progress Reset Option**: Clear cache and reset progress for fresh study.

### 8. 👤 Student Profile & Badges
- **Customizable Learner Profile**: Name, headline, study goal hours, and target examination date.
- **Credentials & Badges Showcase**: Earn 6 official badges by scoring 75%+ on module assessments:
  - 🏛️ Full-Stack Architecture Scholar
  - 🔌 Certified API Strategist
  - 💾 Data Architect & SQL Specialist
  - ⚡ Enterprise Tech Strategist
  - 🐍 Python Ecosystem Leader
  - 🎓 PM2 Certified Technical PM

### 9. 📥 Resources & Original Slide Decks
- **Original `.pptx` Files**: Direct download links for all 5 slide decks with file sizes and slide counts.
- **Recommended Documentation**: Curated links to MDN, PostgreSQL, Stripe API, OWASP, FastAPI, and NPCI/UPI specs.
- **Technical PM Interview Framework**: Architectural answer frameworks for senior PM interviews.

---

## 🛠️ Technology Stack

- **Frontend**: React 18 + Vite 6
- **Styling**: Tailwind CSS 3 with custom glassmorphism, responsive drawer, and dark mode support
- **Icons**: Lucide React
- **Celebrations**: Canvas Confetti
- **State & Storage**: Lightweight browser `localStorage` manager for persistent progress, quiz attempts, and customizable profile settings
- **Deployment**: Zero-config Vercel deployment with `vercel.json` SPA rewrite rules

---

## 🚀 Running the Project Locally

### 1. Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### 2. Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd <repo-folder>

# Install dependencies
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

---

## 🌐 Deploying to Vercel

This repository is pre-configured for 1-click deployment on [Vercel](https://vercel.com):

1. Push this repository to **GitHub**.
2. Log in to Vercel and click **Add New... -> Project**.
3. Import your GitHub repository.
4. Framework Preset: **Vite** (auto-detected).
5. Root Directory: `./` (leave default).
6. Click **Deploy**.

Vercel will build the project and assign a production URL. All routes are handled via `vercel.json` SPA rewrites.

---

## 👨‍🏫 Academic Attribution
- **Course**: Product Management II (PM2)
- **Institution**: HSB
- **Faculty / Instructor**: Dr. Anand Fadte
