import React, { useState } from 'react';
import { useLms } from '../context/LmsContext';
import {
  BookOpen,
  Clock,
  Download,
  ArrowRight,
  Layers,
  CheckCircle2,
  ListFilter,
  Play,
  FileText,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function CoursesPage() {
  const { courses, getCourseProgress, openLesson, setActiveTab } = useLms();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedCourseId, setExpandedCourseId] = useState(null);

  const categories = ['All', 'Core Architecture', 'API Engineering', 'Data & Databases', 'Tech Strategy', 'Backend & AI'];

  const filteredCourses = selectedCategory === 'All'
    ? courses
    : courses.filter(c => c.category === selectedCategory);

  const toggleExpand = (courseId) => {
    setExpandedCourseId(prev => (prev === courseId ? null : courseId));
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header & Filter Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Curriculum Courses
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            5 structured masterclasses built directly from Dr. Anand Fadte's lecture slides
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/30'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Courses List */}
      <div className="space-y-6">
        {filteredCourses.map((course) => {
          const progress = getCourseProgress(course.id);
          const isExpanded = expandedCourseId === course.id;
          const firstLessonId = course.modules[0]?.lessons[0]?.id;

          return (
            <div
              key={course.id}
              className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-hidden transition-all hover:border-indigo-300 dark:hover:border-indigo-700/60"
            >
              {/* Course Main Card */}
              <div className="p-6 sm:p-8 flex flex-col lg:flex-row gap-6 justify-between">
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded-lg text-xs font-bold bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                      {course.code}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      {course.category}
                    </span>
                    <span className="text-xs text-slate-400">
                      {course.totalSlides} Slides · {course.estimatedHours}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                      {course.title}
                    </h3>
                    <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-1">
                      {course.subtitle}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed max-w-4xl">
                      {course.description}
                    </p>
                  </div>

                  {/* Learning Objectives Chips */}
                  <div className="space-y-2 pt-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">What you will learn:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {course.objectives.slice(0, 4).map((obj, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{obj}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side: Progress & Actions */}
                <div className="lg:w-72 flex-shrink-0 flex flex-col justify-between pt-4 lg:pt-0 lg:pl-6 lg:border-l border-slate-100 dark:border-slate-800">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-slate-500">Course Completion</span>
                      <span className="text-slate-900 dark:text-white">{progress.percentage}%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                      <div
                        className="bg-indigo-600 h-full rounded-full transition-all duration-500"
                        style={{ width: `${progress.percentage}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-slate-400">
                      <span>{progress.completed} of {progress.total} Lessons</span>
                      <span>{course.modules.length} Modules</span>
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-6">
                    <button
                      onClick={() => {
                        if (firstLessonId) openLesson(course.id, firstLessonId);
                      }}
                      className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
                    >
                      <Play className="h-4 w-4 fill-white" />
                      <span>{progress.completed > 0 ? 'Continue Course' : 'Start Course'}</span>
                    </button>

                    <button
                      onClick={() => toggleExpand(course.id)}
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800 dark:hover:bg-slate-700/80 text-slate-700 dark:text-slate-300 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>{isExpanded ? 'Hide Syllabus' : 'View Syllabus & Lessons'}</span>
                      {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </button>

                    <a
                      href={course.pptDownloadUrl}
                      download
                      className="w-full py-2 px-4 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Download className="h-3.5 w-3.5" />
                      <span>Download Original PPT ({course.fileSize})</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Collapsible Syllabus Accordion */}
              {isExpanded && (
                <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-4 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                    Course Modules & Topic Breakdown
                  </h4>
                  <div className="space-y-4">
                    {course.modules.map((mod, mIdx) => (
                      <div
                        key={mod.id}
                        className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800"
                      >
                        <h5 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                          <span className="h-5 w-5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs flex items-center justify-center">
                            {mIdx + 1}
                          </span>
                          <span>{mod.title}</span>
                        </h5>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 pl-7">
                          {mod.description}
                        </p>

                        <div className="mt-3 pl-7 space-y-1.5">
                          {mod.lessons.map((lesson) => (
                            <div
                              key={lesson.id}
                              onClick={() => openLesson(course.id, lesson.id)}
                              className="p-2.5 rounded-xl hover:bg-indigo-50/70 dark:hover:bg-indigo-950/40 border border-transparent hover:border-indigo-100 dark:hover:border-indigo-900/40 flex items-center justify-between cursor-pointer group transition-colors"
                            >
                              <div className="flex items-center gap-2.5">
                                <FileText className="h-4 w-4 text-slate-400 group-hover:text-indigo-600" />
                                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                                  {lesson.title}
                                </span>
                              </div>
                              <div className="flex items-center gap-3">
                                <span className="text-[11px] text-slate-400">{lesson.duration}</span>
                                <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-indigo-600 transition-transform group-hover:translate-x-1" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
