import React, { useState } from 'react';
import { LmsProvider, useLms } from './context/LmsContext';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import GlobalSearchModal from './components/GlobalSearchModal';

import DashboardPage from './pages/DashboardPage';
import CoursesPage from './pages/CoursesPage';
import LearningMaterialsPage from './pages/LearningMaterialsPage';
import InteractiveLearningPage from './pages/InteractiveLearningPage';
import QuizzesPage from './pages/QuizzesPage';
import NotesAndRevisionPage from './pages/NotesAndRevisionPage';
import ProgressTrackingPage from './pages/ProgressTrackingPage';
import ProfilePage from './pages/ProfilePage';
import ResourcesPage from './pages/ResourcesPage';

function LmsContent() {
  const { activeTab } = useLms();
  const [mobileOpen, setMobileOpen] = useState(false);

  const renderActivePage = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardPage />;
      case 'courses':
        return <CoursesPage />;
      case 'learning-materials':
        return <LearningMaterialsPage />;
      case 'interactive-learning':
        return <InteractiveLearningPage />;
      case 'quizzes':
        return <QuizzesPage />;
      case 'notes-revision':
        return <NotesAndRevisionPage />;
      case 'progress':
        return <ProgressTrackingPage />;
      case 'profile':
        return <ProfilePage />;
      case 'resources':
        return <ResourcesPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col">
      {/* Global Search Modal */}
      <GlobalSearchModal />

      {/* Navigation Sidebar */}
      <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      {/* Main Content Area */}
      <div className="lg:pl-72 flex-1 flex flex-col min-w-0">
        <Navbar setMobileOpen={setMobileOpen} />

        <main className="flex-1 p-4 sm:p-8 max-w-7xl w-full mx-auto">
          {renderActivePage()}
        </main>

        {/* Global Footer */}
        <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 py-6 px-4 sm:px-8 text-xs text-slate-500 dark:text-slate-400">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-700 dark:text-slate-300">PM2 Interactive LMS</span>
              <span>·</span>
              <span>HSB — Product Management II</span>
              <span>·</span>
              <span>Instructor: Dr. Anand Fadte</span>
            </div>
            <p className="text-[11px] text-slate-400">
              100% Curriculum Integrated from 5 Lecture Slide Decks
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <LmsProvider>
      <LmsContent />
    </LmsProvider>
  );
}
