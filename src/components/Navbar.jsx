import React from 'react';
import { useLms } from '../context/LmsContext';
import {
  Menu,
  Search,
  Moon,
  Sun,
  Flame,
  Play,
  Bell,
  BookOpen
} from 'lucide-react';

export default function Navbar({ setMobileOpen }) {
  const {
    activeTab,
    darkMode,
    toggleDarkMode,
    setIsSearchOpen,
    studentProfile,
    lastAccessedLesson,
    openLesson
  } = useLms();

  const getTabTitle = (tab) => {
    switch (tab) {
      case 'dashboard': return 'Student Dashboard';
      case 'courses': return 'My Courses & Syllabus';
      case 'learning-materials': return 'Learning Materials & Curriculum';
      case 'interactive-learning': return 'Interactive Learning Hub';
      case 'quizzes': return 'Quizzes & Practice Assessments';
      case 'notes-revision': return 'High-Yield Revision & Cheat Sheets';
      case 'progress': return 'Learning Analytics & Progress';
      case 'profile': return 'Student Profile & Badges';
      case 'resources': return 'Original PPTs & Resources';
      default: return 'Learning Management System';
    }
  };

  return (
    <header className="sticky top-0 z-30 h-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 sm:px-8 flex items-center justify-between">
      {/* Left side: Hamburger & Page Title */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setMobileOpen(prev => !prev)}
          className="lg:hidden p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <Menu className="h-6 w-6" />
        </button>

        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            {getTabTitle(activeTab)}
          </h1>
          <p className="hidden sm:block text-xs text-slate-500 dark:text-slate-400">
            Technical Acumen for Product Managers · Product Management II
          </p>
        </div>
      </div>

      {/* Right side: Search, Streak, Resume, Theme & Avatar */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Global Search Bar Button */}
        <button
          onClick={() => setIsSearchOpen(true)}
          className="flex items-center gap-2.5 px-3.5 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200/80 dark:hover:bg-slate-700/80 rounded-xl text-slate-500 dark:text-slate-400 text-xs font-medium transition-colors"
        >
          <Search className="h-4 w-4 text-slate-400" />
          <span className="hidden md:inline">Search topics, status codes, SQL...</span>
          <span className="md:hidden">Search</span>
          <kbd className="hidden md:inline-flex items-center px-1.5 py-0.5 text-[10px] bg-white dark:bg-slate-900 text-slate-400 rounded border border-slate-200 dark:border-slate-700">
            ⌘K
          </kbd>
        </button>

        {/* Study Streak Pill */}
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-800/40 rounded-xl text-amber-700 dark:text-amber-400 text-xs font-semibold">
          <Flame className="h-4 w-4 text-amber-500 fill-amber-500 animate-pulse" />
          <span>{studentProfile.streakDays} Day Streak</span>
        </div>

        {/* Quick Resume Button */}
        {lastAccessedLesson && (
          <button
            onClick={() => openLesson(lastAccessedLesson.courseId, lastAccessedLesson.lessonId)}
            className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/40 text-indigo-700 dark:text-indigo-300 rounded-xl text-xs font-semibold hover:bg-indigo-100 transition-colors"
            title={`Resume: ${lastAccessedLesson.title}`}
          >
            <Play className="h-3.5 w-3.5 fill-indigo-600 dark:fill-indigo-400" />
            <span>Resume Lesson</span>
          </button>
        )}

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {darkMode ? <Sun className="h-5 w-5 text-amber-400" /> : <Moon className="h-5 w-5" />}
        </button>
      </div>
    </header>
  );
}
