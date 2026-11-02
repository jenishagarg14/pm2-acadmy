import React from 'react';
import { useLms } from '../context/LmsContext';
import {
  Play,
  CheckCircle2,
  Clock,
  BookOpen,
  Award,
  Flame,
  ArrowRight,
  TrendingUp,
  Download,
  Sparkles,
  HelpCircle,
  FileText,
  BookmarkCheck
} from 'lucide-react';

export default function DashboardPage() {
  const {
    studentProfile,
    courses,
    quizzes,
    lastAccessedLesson,
    openLesson,
    setActiveTab,
    getCourseProgress,
    getOverallProgress,
    quizAttempts
  } = useLms();

  const overall = getOverallProgress();

  // Calculate quiz statistics
  const attemptedQuizzes = Object.keys(quizAttempts);
  const totalScorePct = attemptedQuizzes.reduce((acc, qId) => acc + quizAttempts[qId].percentage, 0);
  const avgQuizScore = attemptedQuizzes.length > 0 ? Math.round(totalScorePct / attemptedQuizzes.length) : 0;

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-800 text-white p-6 sm:p-10 shadow-xl shadow-indigo-600/15">
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/30 border border-indigo-400/30 text-xs font-semibold backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-amber-300" />
            <span>Interactive Learning Management System</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Welcome back, {studentProfile.name}! 👋
          </h2>
          <p className="text-indigo-100 text-sm sm:text-base leading-relaxed">
            Ready to master software architecture, APIs, databases, and tech stacks? Your study materials from Dr. Anand Fadte's sessions are completely structured and ready.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            {lastAccessedLesson && (
              <button
                onClick={() => openLesson(lastAccessedLesson.courseId, lastAccessedLesson.lessonId)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-indigo-700 font-bold text-sm shadow-md hover:bg-indigo-50 transition-all hover:scale-[1.02]"
              >
                <Play className="h-4 w-4 fill-indigo-700" />
                <span>Resume Lesson</span>
              </button>
            )}
            <button
              onClick={() => setActiveTab('courses')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-500/30 hover:bg-indigo-500/40 border border-indigo-300/30 text-white font-semibold text-sm transition-colors"
            >
              <span>Explore All Courses</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Decorative Background Circles */}
        <div className="absolute right-0 top-0 -translate-y-12 translate-x-12 w-96 h-96 bg-white/5 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -left-12 -bottom-12 w-64 h-64 bg-indigo-400/10 rounded-full blur-xl pointer-events-none" />
      </div>

      {/* Quick Overview Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Overall Progress</span>
            <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
              <TrendingUp className="h-4 w-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {overall.percentage}%
            </span>
            <span className="text-xs text-slate-500">{overall.completedCount}/{overall.totalLessons} Lessons</span>
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
            <div
              className="bg-indigo-600 h-full rounded-full transition-all duration-500"
              style={{ width: `${overall.percentage}%` }}
            />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Completed Topics</span>
            <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="h-4 w-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {overall.completedCount}
            </span>
            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">Done</span>
          </div>
          <p className="text-xs text-slate-500 mt-2">{overall.pendingCount} pending topics remaining</p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Avg Quiz Score</span>
            <div className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400">
              <Award className="h-4 w-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {avgQuizScore > 0 ? `${avgQuizScore}%` : 'N/A'}
            </span>
            <span className="text-xs text-slate-500">{attemptedQuizzes.length} Quizzes Taken</span>
          </div>
          <p className="text-xs text-slate-500 mt-2">75% passing grade required</p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Study Streak</span>
            <div className="p-2 rounded-xl bg-orange-50 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400">
              <Flame className="h-4 w-4 fill-orange-500 text-orange-500" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {studentProfile.streakDays} Days
            </span>
            <span className="text-xs text-orange-600 dark:text-orange-400 font-medium">Active</span>
          </div>
          <p className="text-xs text-slate-500 mt-2">Target exam: {studentProfile.targetExamDate}</p>
        </div>
      </div>

      {/* Continue Learning Card */}
      {lastAccessedLesson && (
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  Pick Up Where You Left Off
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                <span className="text-xs text-slate-400">{lastAccessedLesson.courseTitle}</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1">
                {lastAccessedLesson.title}
              </h3>
            </div>
          </div>
          <button
            onClick={() => openLesson(lastAccessedLesson.courseId, lastAccessedLesson.lessonId)}
            className="self-start md:self-center flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl shadow-sm transition-all"
          >
            <span>Continue Lesson</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Available Courses Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
              Curriculum Courses (From PPT Lectures)
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              5 comprehensive subjects translated from Dr. Anand Fadte's presentation decks
            </p>
          </div>
          <button
            onClick={() => setActiveTab('courses')}
            className="text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
          >
            <span>View All</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => {
            const courseProgress = getCourseProgress(course.id);
            return (
              <div
                key={course.id}
                className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700/60 shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                      {course.code}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {course.totalSlides} Slides
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                    {course.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {course.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-slate-500 font-medium">
                      {courseProgress.completed} of {courseProgress.total} Lessons Done
                    </span>
                    <span className="font-bold text-slate-900 dark:text-white">
                      {courseProgress.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden mb-4">
                    <div
                      className="bg-indigo-600 h-full rounded-full transition-all duration-500"
                      style={{ width: `${courseProgress.percentage}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => {
                        const firstLesson = course.modules[0]?.lessons[0]?.id;
                        if (firstLesson) {
                          openLesson(course.id, firstLesson);
                        }
                      }}
                      className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 flex items-center gap-1"
                    >
                      <span>Study Course</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                    <a
                      href={course.pptDownloadUrl}
                      download
                      className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 flex items-center gap-1"
                      title="Download Original PPT"
                    >
                      <Download className="h-3.5 w-3.5" />
                      <span>PPTX</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Section: Quizzes + Revision Highlight */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recommended Quizzes */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-indigo-500" /> Practice Assessments
            </h3>
            <button
              onClick={() => setActiveTab('quizzes')}
              className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
            >
              All Quizzes
            </button>
          </div>
          <div className="space-y-3">
            {quizzes.slice(0, 3).map((quiz) => {
              const attempt = quizAttempts[quiz.id];
              return (
                <div
                  key={quiz.id}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800 flex items-center justify-between"
                >
                  <div>
                    <h5 className="text-sm font-semibold text-slate-900 dark:text-white">
                      {quiz.title}
                    </h5>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {quiz.totalQuestions} Questions · {quiz.timeLimitMinutes} min limit
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    {attempt ? (
                      <span
                        className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                          attempt.passed
                            ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                            : 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
                        }`}
                      >
                        {attempt.percentage}%
                      </span>
                    ) : (
                      <button
                        onClick={() => setActiveTab('quizzes')}
                        className="px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-bold hover:bg-indigo-100"
                      >
                        Start
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* High-Yield Exam Tip of the Day */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-900 dark:to-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-bold text-sm">
            <BookmarkCheck className="h-5 w-5" />
            <span>High-Yield PM Exam Revision Tip</span>
          </div>
          <div className="space-y-2">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              The '1-Day Query vs. 2-Sprint Migration' Rule
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Before promising feature timelines to leadership, always check the Entity-Relationship (ER) diagram. If the required data already exists in your tables, it's a simple query change (1 sprint). If you need new columns, split tables, or multi-currency support, it requires a database migration (2 to 4 sprints).
            </p>
          </div>
          <div className="pt-2">
            <button
              onClick={() => setActiveTab('notes-revision')}
              className="text-xs font-bold text-amber-700 dark:text-amber-400 hover:underline flex items-center gap-1"
            >
              <span>Explore All 12 Cheat Sheets & Revision Notes</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
