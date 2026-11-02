import React, { useState } from 'react';
import { useLms } from '../context/LmsContext';
import {
  User,
  Award,
  GraduationCap,
  Calendar,
  Flame,
  CheckCircle2,
  Edit2,
  Check,
  Save,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export default function ProfilePage() {
  const { studentProfile, updateStudentProfile, getOverallProgress, quizAttempts, quizzes } = useLms();
  const overall = getOverallProgress();

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: studentProfile.name,
    title: studentProfile.title,
    targetExamDate: studentProfile.targetExamDate,
    studyGoalHours: studentProfile.studyGoalHours
  });

  const handleSave = (e) => {
    e.preventDefault();
    updateStudentProfile(formData);
    setIsEditing(false);
  };

  // Badges calculation
  const badges = [
    {
      id: 'b-arch',
      title: 'Full-Stack Architecture Scholar',
      req: 'Complete Day 1 Quiz (PM2-01 & 02)',
      earned: quizAttempts['quiz-web-stack']?.passed || false,
      icon: '🏛️'
    },
    {
      id: 'b-api',
      title: 'Certified API Strategist',
      req: 'Complete Day 2 Quiz (PM2-03 & 04)',
      earned: quizAttempts['quiz-apis-integrations']?.passed || false,
      icon: '🔌'
    },
    {
      id: 'b-data',
      title: 'Data Architect & SQL Specialist',
      req: 'Complete Day 3 Quiz (PM2-05 & 06)',
      earned: quizAttempts['quiz-databases-modeling']?.passed || false,
      icon: '💾'
    },
    {
      id: 'b-stack',
      title: 'Enterprise Tech Strategist',
      req: 'Complete Tech Stacks Guide Quiz',
      earned: quizAttempts['quiz-tech-stacks-guide']?.passed || false,
      icon: '⚡'
    },
    {
      id: 'b-python',
      title: 'Python Ecosystem Leader',
      req: 'Complete Python Deep Dive Quiz',
      earned: quizAttempts['quiz-python-ecosystem']?.passed || false,
      icon: '🐍'
    },
    {
      id: 'b-final',
      title: 'PM2 Certified Technical PM',
      req: 'Pass Capstone Certification Exam (>=80%)',
      earned: quizAttempts['quiz-pm2-final-certification']?.passed || false,
      icon: '🎓'
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300 max-w-4xl mx-auto">
      {/* Profile Card Header */}
      <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center gap-6 justify-between">
        <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          <div className="h-20 w-20 rounded-3xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white font-extrabold text-2xl flex items-center justify-center shadow-lg shadow-indigo-600/20">
            {studentProfile.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="space-y-1">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {studentProfile.name}
            </h2>
            <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
              {studentProfile.title}
            </p>
            <p className="text-xs text-slate-400">
              {studentProfile.institution} · Instructor: {studentProfile.instructor}
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsEditing(prev => !prev)}
          className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold flex items-center gap-1.5 transition-colors"
        >
          <Edit2 className="h-3.5 w-3.5" />
          <span>{isEditing ? 'Cancel Edit' : 'Edit Profile'}</span>
        </button>
      </div>

      {/* Edit Form Drawer */}
      {isEditing && (
        <form onSubmit={handleSave} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-900 shadow-md space-y-4 animate-in fade-in">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">Edit Student Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-1">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-1">Headline / Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={e => setFormData({ ...formData, title: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-1">Target Exam Date</label>
              <input
                type="date"
                value={formData.targetExamDate}
                onChange={e => setFormData({ ...formData, targetExamDate: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-1">Weekly Study Goal (Hours)</label>
              <input
                type="number"
                value={formData.studyGoalHours}
                onChange={e => setFormData({ ...formData, studyGoalHours: Number(e.target.value) })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-sm flex items-center gap-1.5"
            >
              <Save className="h-3.5 w-3.5" />
              <span>Save Profile Changes</span>
            </button>
          </div>
        </form>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center">
          <span className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 block">
            {overall.percentage}%
          </span>
          <span className="text-xs text-slate-400 font-medium">Syllabus Mastered</span>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center">
          <span className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 block">
            {overall.completedCount}
          </span>
          <span className="text-xs text-slate-400 font-medium">Topics Completed</span>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center">
          <span className="text-2xl sm:text-3xl font-extrabold text-amber-600 dark:text-amber-400 block">
            {badges.filter(b => b.earned).length} / {badges.length}
          </span>
          <span className="text-xs text-slate-400 font-medium">Badges Unlocked</span>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center">
          <span className="text-2xl sm:text-3xl font-extrabold text-orange-600 dark:text-orange-400 block">
            {studentProfile.streakDays} Days
          </span>
          <span className="text-xs text-slate-400 font-medium">Study Streak</span>
        </div>
      </div>

      {/* Earned Credentials & Badges Showcase */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Award className="h-5 w-5 text-indigo-500" />
            <span>Technical Mastery Badges & Credentials</span>
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Earn official badges by passing assessment quizzes with 75%+ score
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {badges.map((b) => (
            <div
              key={b.id}
              className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                b.earned
                  ? 'bg-gradient-to-br from-indigo-50/50 to-white dark:from-slate-800/80 dark:to-slate-900 border-indigo-200 dark:border-indigo-800 shadow-xs'
                  : 'bg-slate-50/50 dark:bg-slate-800/30 border-slate-200 dark:border-slate-800 opacity-60'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{b.icon}</span>
                  {b.earned ? (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                      Earned ✓
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                      Locked
                    </span>
                  )}
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  {b.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {b.req}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
