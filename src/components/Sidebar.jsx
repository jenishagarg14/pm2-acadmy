import React from 'react';
import { useLms } from '../context/LmsContext';
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  PlayCircle,
  HelpCircle,
  BookmarkCheck,
  TrendingUp,
  User,
  Download,
  GraduationCap,
  Sparkles,
  ChevronRight,
  Layers,
  X
} from 'lucide-react';

export default function Sidebar({ mobileOpen, setMobileOpen }) {
  const { activeTab, setActiveTab, getOverallProgress } = useLms();
  const progress = getOverallProgress();

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, badge: null },
    { id: 'courses', label: 'My Courses', icon: BookOpen, badge: '5' },
    { id: 'learning-materials', label: 'Learning Materials', icon: FileText, badge: null },
    { id: 'interactive-learning', label: 'Interactive Learning', icon: PlayCircle, badge: 'Active' },
    { id: 'quizzes', label: 'Quizzes & Assessments', icon: HelpCircle, badge: '6' },
    { id: 'notes-revision', label: 'Notes & Revision', icon: BookmarkCheck, badge: 'High-Yield' },
    { id: 'progress', label: 'Progress Tracking', icon: TrendingUp, badge: `${progress.percentage}%` },
    { id: 'profile', label: 'Student Profile', icon: User, badge: null },
    { id: 'resources', label: 'Resources & PPTs', icon: Download, badge: 'PPTX' },
  ];

  const handleSelectTab = (tabId) => {
    setActiveTab(tabId);
    if (setMobileOpen) {
      setMobileOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand Header */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-400 flex items-center justify-center text-white shadow-md shadow-indigo-500/25">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-lg text-slate-900 dark:text-white tracking-tight">PM2 Academy</span>
                <span className="px-1.5 py-0.5 text-[10px] font-bold tracking-wider bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 rounded uppercase">LMS</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">HSB · Dr. Anand Fadte</p>
            </div>
          </div>
          {setMobileOpen && (
            <button
              onClick={() => setMobileOpen(false)}
              className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Learning Progress Quick Pill */}
        <div className="p-4 mx-4 my-3 bg-gradient-to-br from-indigo-50 to-slate-50 dark:from-slate-800/80 dark:to-indigo-950/40 rounded-2xl border border-indigo-100/80 dark:border-indigo-900/40">
          <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
            <span className="text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-indigo-500" /> Syllabus Mastered
            </span>
            <span className="font-bold text-indigo-600 dark:text-indigo-400">{progress.percentage}%</span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-indigo-500 to-emerald-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${progress.percentage}%` }}
            />
          </div>
          <div className="flex justify-between items-center mt-2 text-[11px] text-slate-500 dark:text-slate-400">
            <span>{progress.completedCount} lessons done</span>
            <span>{progress.pendingCount} to go</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto px-4 py-2 space-y-1">
          <div className="px-3 pb-2 text-[11px] font-semibold tracking-wider text-slate-400 dark:text-slate-500 uppercase">
            Platform Menu
          </div>
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSelectTab(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/30'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`h-4 w-4 ${isActive ? 'text-white' : 'text-slate-400 dark:text-slate-500'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                      isActive
                        ? 'bg-indigo-700 text-indigo-100'
                        : item.badge === 'Active'
                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                        : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Bottom Course Reference Card */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-xs text-indigo-600 dark:text-indigo-400">
              AM
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">Alex Morgan</p>
              <p className="text-[11px] text-slate-400 dark:text-slate-500 truncate">PM Student · HSB</p>
            </div>
            <button
              onClick={() => handleSelectTab('profile')}
              className="p-1 rounded text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              title="View Profile"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
