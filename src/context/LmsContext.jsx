import React, { createContext, useContext, useState, useEffect } from 'react';
import { coursesData } from '../data/coursesData';
import { quizzesData } from '../data/quizzesData';

const LmsContext = createContext(null);

export function LmsProvider({ children }) {
  // Active view tab
  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem('pm2_active_tab') || 'dashboard';
  });

  // Active course and lesson selection for Interactive Learning
  const [activeCourseId, setActiveCourseId] = useState(() => {
    return localStorage.getItem('pm2_active_course') || coursesData[0]?.id || '';
  });

  const [activeLessonId, setActiveLessonId] = useState(() => {
    const defaultLesson = coursesData[0]?.modules[0]?.lessons[0]?.id || '';
    return localStorage.getItem('pm2_active_lesson') || defaultLesson;
  });

  // Completed lessons storage
  const [completedLessons, setCompletedLessons] = useState(() => {
    try {
      const saved = localStorage.getItem('pm2_completed_lessons');
      return saved ? JSON.parse(saved) : ['les-1-1-1'];
    } catch {
      return ['les-1-1-1'];
    }
  });

  // Quiz history & scores
  const [quizAttempts, setQuizAttempts] = useState(() => {
    try {
      const saved = localStorage.getItem('pm2_quiz_attempts');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Bookmarked items
  const [bookmarkedItems, setBookmarkedItems] = useState(() => {
    try {
      const saved = localStorage.getItem('pm2_bookmarks');
      return saved ? JSON.parse(saved) : ['cs-http-codes', 'cs-sql-fluency'];
    } catch {
      return ['cs-http-codes', 'cs-sql-fluency'];
    }
  });

  // Student Profile
  const [studentProfile, setStudentProfile] = useState(() => {
    try {
      const saved = localStorage.getItem('pm2_student_profile');
      return saved ? JSON.parse(saved) : {
        name: 'Alex Morgan',
        title: 'Aspiring Technical Product Manager',
        institution: 'HSB — Product Management II',
        instructor: 'Dr. Anand Fadte',
        targetExamDate: '2026-12-15',
        studyGoalHours: 20,
        streakDays: 5,
        avatarSeed: 'alex'
      };
    } catch {
      return {
        name: 'Alex Morgan',
        title: 'Aspiring Technical Product Manager',
        institution: 'HSB — Product Management II',
        instructor: 'Dr. Anand Fadte',
        targetExamDate: '2026-12-15',
        studyGoalHours: 20,
        streakDays: 5,
        avatarSeed: 'alex'
      };
    }
  });

  // Last accessed lesson
  const [lastAccessedLesson, setLastAccessedLesson] = useState(() => {
    try {
      const saved = localStorage.getItem('pm2_last_accessed');
      return saved ? JSON.parse(saved) : {
        courseId: 'pm2-01-web-stack',
        lessonId: 'les-1-1-1',
        title: 'The Big Picture: The 3 Layers & The Request Lifecycle',
        courseTitle: 'Software Architecture, Web Fundamentals & The Modern Stack',
        timestamp: new Date().toISOString()
      };
    } catch {
      return {
        courseId: 'pm2-01-web-stack',
        lessonId: 'les-1-1-1',
        title: 'The Big Picture: The 3 Layers & The Request Lifecycle',
        courseTitle: 'Software Architecture, Web Fundamentals & The Modern Stack',
        timestamp: new Date().toISOString()
      };
    }
  });

  // Theme: Dark/Light Mode
  const [darkMode, setDarkMode] = useState(() => {
    try {
      return localStorage.getItem('pm2_dark_mode') === 'true';
    } catch {
      return false;
    }
  });

  // Global search modal state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Persist states to localStorage
  useEffect(() => {
    localStorage.setItem('pm2_active_tab', activeTab);
  }, [activeTab]);

  useEffect(() => {
    localStorage.setItem('pm2_active_course', activeCourseId);
  }, [activeCourseId]);

  useEffect(() => {
    localStorage.setItem('pm2_active_lesson', activeLessonId);
  }, [activeLessonId]);

  useEffect(() => {
    localStorage.setItem('pm2_completed_lessons', JSON.stringify(completedLessons));
  }, [completedLessons]);

  useEffect(() => {
    localStorage.setItem('pm2_quiz_attempts', JSON.stringify(quizAttempts));
  }, [quizAttempts]);

  useEffect(() => {
    localStorage.setItem('pm2_bookmarks', JSON.stringify(bookmarkedItems));
  }, [bookmarkedItems]);

  useEffect(() => {
    localStorage.setItem('pm2_student_profile', JSON.stringify(studentProfile));
  }, [studentProfile]);

  useEffect(() => {
    localStorage.setItem('pm2_last_accessed', JSON.stringify(lastAccessedLesson));
  }, [lastAccessedLesson]);

  useEffect(() => {
    localStorage.setItem('pm2_dark_mode', darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Toggle Dark Mode
  const toggleDarkMode = () => setDarkMode(prev => !prev);

  // Lesson completion helpers
  const toggleLessonCompleted = (lessonId) => {
    setCompletedLessons(prev => {
      if (prev.includes(lessonId)) {
        return prev.filter(id => id !== lessonId);
      } else {
        return [...prev, lessonId];
      }
    });
  };

  const markLessonCompleted = (lessonId) => {
    setCompletedLessons(prev => {
      if (!prev.includes(lessonId)) {
        return [...prev, lessonId];
      }
      return prev;
    });
  };

  const isLessonCompleted = (lessonId) => completedLessons.includes(lessonId);

  // Quiz submission helper
  const saveQuizAttempt = (quizId, score, total, answers = {}) => {
    const percentage = Math.round((score / total) * 100);
    const passed = percentage >= 75;
    const attempt = {
      score,
      total,
      percentage,
      passed,
      date: new Date().toISOString(),
      answers
    };

    setQuizAttempts(prev => ({
      ...prev,
      [quizId]: attempt
    }));

    return attempt;
  };

  // Bookmark helpers
  const toggleBookmark = (id) => {
    setBookmarkedItems(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const isBookmarked = (id) => bookmarkedItems.includes(id);

  // Open a specific lesson directly
  const openLesson = (courseId, lessonId) => {
    const course = coursesData.find(c => c.id === courseId);
    let targetLesson = null;

    if (course) {
      for (const mod of course.modules) {
        const found = mod.lessons.find(l => l.id === lessonId);
        if (found) {
          targetLesson = found;
          break;
        }
      }
    }

    setActiveCourseId(courseId);
    setActiveLessonId(lessonId);
    setActiveTab('interactive-learning');

    if (course && targetLesson) {
      setLastAccessedLesson({
        courseId,
        lessonId,
        title: targetLesson.title,
        courseTitle: course.title,
        timestamp: new Date().toISOString()
      });
    }
  };

  // Progress Calculations
  const getCourseProgress = (courseId) => {
    const course = coursesData.find(c => c.id === courseId);
    if (!course) return { total: 0, completed: 0, percentage: 0 };

    let totalLessons = 0;
    let completedCount = 0;

    course.modules.forEach(mod => {
      mod.lessons.forEach(lesson => {
        totalLessons += 1;
        if (completedLessons.includes(lesson.id)) {
          completedCount += 1;
        }
      });
    });

    const percentage = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;
    return {
      total: totalLessons,
      completed: completedCount,
      percentage
    };
  };

  const getOverallProgress = () => {
    let totalLessons = 0;
    let completedCount = 0;

    coursesData.forEach(course => {
      course.modules.forEach(mod => {
        mod.lessons.forEach(lesson => {
          totalLessons += 1;
          if (completedLessons.includes(lesson.id)) {
            completedCount += 1;
          }
        });
      });
    });

    const percentage = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;
    return {
      totalLessons,
      completedCount,
      pendingCount: totalLessons - completedCount,
      percentage
    };
  };

  // Update profile
  const updateStudentProfile = (updates) => {
    setStudentProfile(prev => ({
      ...prev,
      ...updates
    }));
  };

  // Reset progress (for testing / fresh study)
  const resetAllProgress = () => {
    setCompletedLessons([]);
    setQuizAttempts({});
    localStorage.removeItem('pm2_completed_lessons');
    localStorage.removeItem('pm2_quiz_attempts');
  };

  return (
    <LmsContext.Provider
      value={{
        activeTab,
        setActiveTab,
        activeCourseId,
        setActiveCourseId,
        activeLessonId,
        setActiveLessonId,
        completedLessons,
        toggleLessonCompleted,
        markLessonCompleted,
        isLessonCompleted,
        quizAttempts,
        saveQuizAttempt,
        bookmarkedItems,
        toggleBookmark,
        isBookmarked,
        studentProfile,
        updateStudentProfile,
        lastAccessedLesson,
        setLastAccessedLesson,
        openLesson,
        darkMode,
        toggleDarkMode,
        isSearchOpen,
        setIsSearchOpen,
        searchQuery,
        setSearchQuery,
        getCourseProgress,
        getOverallProgress,
        resetAllProgress,
        courses: coursesData,
        quizzes: quizzesData
      }}
    >
      {children}
    </LmsContext.Provider>
  );
}

export function useLms() {
  const context = useContext(LmsContext);
  if (!context) {
    throw new Error('useLms must be used within an LmsProvider');
  }
  return context;
}
