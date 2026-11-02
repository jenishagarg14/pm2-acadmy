import React from 'react';
import { resourcesData } from '../data/resourcesData';
import {
  Download,
  FileText,
  ExternalLink,
  BookOpen,
  HelpCircle,
  Sparkles,
  Presentation,
  CheckCircle2
} from 'lucide-react';

export default function ResourcesPage() {
  const { downloadablePpts, externalDocLinks, pmInterviewGuide } = resourcesData;

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Learning Resources & Original Slide Decks
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Direct downloads of the original PowerPoint (.pptx) presentation files, official documentation, and PM interview guides
        </p>
      </div>

      {/* Downloadable PPTs Subject-Wise */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Presentation className="h-5 w-5 text-indigo-500" />
          <span>Original PowerPoint Presentations (.pptx)</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {downloadablePpts.map((ppt) => (
            <div
              key={ppt.id}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 rounded-lg font-bold bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                    {ppt.slidesCount} Slides
                  </span>
                  <span className="text-slate-400 font-medium">{ppt.fileSize}</span>
                </div>

                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {ppt.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {ppt.subtitle}
                  </p>
                </div>

                {/* Topics Preview List */}
                <div className="space-y-1 pt-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Key Deck Topics:</span>
                  <div className="space-y-1">
                    {ppt.topics.slice(0, 4).map((t, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="h-3.5 w-3.5 text-indigo-500 flex-shrink-0" />
                        <span className="truncate">{t}</span>
                      </div>
                    ))}
                    {ppt.topics.length > 4 && (
                      <p className="text-[11px] text-slate-400 pl-5">+ {ppt.topics.length - 4} more topics in deck</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <a
                  href={ppt.downloadUrl}
                  download
                  className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
                >
                  <Download className="h-4 w-4" />
                  <span>Download File ({ppt.fileName})</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Official Documentation Links */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-indigo-500" />
            <span>Recommended External Technical Documentation</span>
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Authoritative documentation referenced throughout the lecture curriculum
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {externalDocLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold text-indigo-600 dark:text-indigo-400">{link.category}</span>
                  <ExternalLink className="h-3.5 w-3.5 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                </div>
                <h5 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors">
                  {link.title}
                </h5>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  {link.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Technical PM Interview Cheat Sheet */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-50/50 to-white dark:from-slate-900 dark:to-indigo-950/20 border border-indigo-200/80 dark:border-indigo-900/60 shadow-sm space-y-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-bold mb-2">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Interview Frameworks</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Technical Product Management Interview Questions
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            How to articulate architectural decisions in senior PM interviews using lecture principles
          </p>
        </div>

        <div className="space-y-4">
          {pmInterviewGuide.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2 shadow-xs"
            >
              <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="h-5 w-5 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center font-bold">
                  Q{idx + 1}
                </span>
                <span>{item.question}</span>
              </h4>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 text-xs text-slate-700 dark:text-slate-300 leading-relaxed border border-slate-100 dark:border-slate-800">
                <span className="font-bold text-indigo-600 dark:text-indigo-400 block mb-1">Recommended Response Framework:</span>
                {item.answerFramework}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
