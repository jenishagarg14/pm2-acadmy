import React from 'react';
import { useLms } from '../context/LmsContext';
import {
  TrendingUp,
  CheckCircle2,
  Clock,
  Award,
  BookOpen,
  Calendar,
  Flame,
  RotateCcw,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function ProgressTrackingPage() {
  const {
    courses,
    quizzes,
    getCourseProgress,
    getOverallProgress,
    quizAttempts,
    studentProfile,
    resetAllProgress,
    setActiveTab,
    openLesson
  } = useLms();

  const overall = getOverallProgress();

  // Compute quiz stats
  const attemptEntries = Object.entries(quizAttempts);
  const totalScorePct = attemptEntries.reduce((acc, [_, a]) => acc + a.percentage, 0);
  const avgQuizScore = attemptEntries.length > 0 ? Math.round(totalScorePct / attemptEntries.length) : 0;
  const passedQuizzesCount = attemptEntries.filter(([_, a]) => a.passed).length;

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Learning Progress & Analytics
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Real-time tracking of completed topics, quiz performance metrics, and syllabus mastery
          </p>
        </div>

        <button
          onClick={() => {
            if (window.confirm('Are you sure you want to reset all your learning progress and quiz scores?')) {
              resetAllProgress();
            }
          }}
          className="self-start sm:self-center px-4 py-2 rounded-xl border border-rose-200 dark:border-rose-900/60 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 text-xs font-semibold flex items-center gap-1.5 transition-colors"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          <span>Reset Progress</span>
        </button>
      </div>

      {/* Hero Analytics Card */}
      <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-4 max-w-xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-bold">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Overall Syllabus Completion</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            You have mastered {overall.completedCount} out of {overall.totalLessons} topics
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            {overall.percentage >= 100
              ? '🎉 Congratulations! You have completed 100% of the Product Management II lecture curriculum!'
              : `Keep going! Complete ${overall.pendingCount} more topics and take your final certification assessment before ${studentProfile.targetExamDate}.`}
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
            <button
              onClick={() => setActiveTab('interactive-learning')}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition-all"
            >
              Continue Learning
            </button>
            <button
              onClick={() => setActiveTab('quizzes')}
              className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-xs transition-colors"
            >
              Take Practice Quiz
            </button>
          </div>
        </div>

        {/* Circular Progress Gauge */}
        <div className="relative flex items-center justify-center flex-shrink-0">
          <div className="h-44 w-44 rounded-full border-8 border-slate-100 dark:border-slate-800 flex items-center justify-center relative">
            <div
              className="absolute inset-0 rounded-full border-8 border-indigo-600 transition-all duration-700"
              style={{
                clipPath: `polygon(50% 50%, -50% -50%, ${overall.percentage * 2}% -50%, ${overall.percentage * 2}% 150%, -50% 150%)`
              }}
            />
            <div className="text-center z-10">
              <span className="text-4xl font-extrabold text-slate-900 dark:text-white">
                {overall.percentage}%
              </span>
              <span className="text-xs text-slate-400 block font-medium">Mastered</span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Breakdown by Subject */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          Subject-wise Course Progress
        </h3>
        <div className="space-y-4">
          {courses.map((course) => {
            const progress = getCourseProgress(course.id);
            return (
              <div
                key={course.id}
                className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1.5 flex-1 min-w-0 pr-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                      {course.code}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {course.category}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white truncate">
                    {course.title}
                  </h4>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden mt-2">
                    <div
                      className="bg-indigo-600 h-full rounded-full transition-all duration-500"
                      style={{ width: `${progress.percentage}%` }}
                    />
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between flex-shrink-0">
                  <div className="text-right">
                    <span className="text-base font-bold text-slate-900 dark:text-white">
                      {progress.percentage}%
                    </span>
                    <p className="text-xs text-slate-400">
                      {progress.completed}/{progress.total} topics
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      const firstLesson = course.modules[0]?.lessons[0]?.id;
                      if (firstLesson) openLesson(course.id, firstLesson);
                    }}
                    className="mt-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                  >
                    <span>Resume</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quiz Attempt History Table */}
      <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm p-6 sm:p-8 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Quiz Attempt History & Performance
            </h3>
            <p className="text-xs text-slate-500">
              Detailed breakdown of scores, accuracy, and passing grades
            </p>
          </div>
          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
            {passedQuizzesCount} of {quizzes.length} Quizzes Passed
          </span>
        </div>

        {attemptEntries.length === 0 ? (
          <div className="py-12 text-center text-slate-400 text-sm">
            <Award className="h-10 w-10 text-slate-300 dark:text-slate-600 mx-auto mb-2" />
            <p className="font-semibold text-slate-600 dark:text-slate-300">No quiz attempts yet</p>
            <p className="text-xs mt-1">Take a quiz to test your mastery and unlock credentials.</p>
            <button
              onClick={() => setActiveTab('quizzes')}
              className="mt-4 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold shadow-sm"
            >
              Browse Assessments
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="p-3.5">Assessment Title</th>
                  <th className="p-3.5">Score</th>
                  <th className="p-3.5">Percentage</th>
                  <th className="p-3.5">Result</th>
                  <th className="p-3.5">Date Completed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {attemptEntries.map(([qId, attempt]) => {
                  const quiz = quizzes.find(q => q.id === qId);
                  return (
                    <tr key={qId} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900 dark:text-white">
                        {quiz?.title || qId}
                      </td>
                      <td className="p-3.5 text-slate-600 dark:text-slate-300">
                        {attempt.score} / {attempt.total}
                      </td>
                      <td className="p-3.5 font-bold text-slate-900 dark:text-white">
                        {attempt.percentage}%
                      </td>
                      <td className="p-3.5">
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                            attempt.passed
                              ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                              : 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
                          }`}
                        >
                          {attempt.passed ? 'PASSED ✓' : 'NEEDS RETAKE'}
                        </span>
                      </td>
                      <td className="p-3.5 text-slate-400 text-xs">
                        {new Date(attempt.date).toLocaleDateString()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
