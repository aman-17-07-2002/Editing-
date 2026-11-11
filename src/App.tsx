import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  ExternalLink,
  Mail,
  Copy,
  Check,
  GraduationCap,
  Film,
  Scissors,
  Smartphone,
  Sparkles,
  Tv,
  Flame,
  FolderGit2,
  MonitorPlay,
  Palette,
  Eye,
  CheckCircle2,
  Video,
  ChevronRight,
  Info
} from 'lucide-react';

// ============================================================================
// PROFILE CONFIGURATION
// Replace this link with your actual Google Drive folder or showcase link:
// ============================================================================
const DRIVE_PORTFOLIO_LINK = "https://drive.google.com/drive/folders/1wfn2ykivePOLC1Jkg4zf1QEBd6f46wio?usp=sharing";
const EMAIL_ADDRESS = "amangoswami800@gmail.com";

export default function App() {
  const [copied, setCopied] = useState(false);
  const [showDriveNotice, setShowDriveNotice] = useState(false);

  // Helper for opening Drive portfolio link safely
  const handleDriveClick = (e: React.MouseEvent) => {
    if (!DRIVE_PORTFOLIO_LINK || DRIVE_PORTFOLIO_LINK.includes("[PASTE") || DRIVE_PORTFOLIO_LINK.startsWith("[")) {
      e.preventDefault();
      setShowDriveNotice(true);
    }
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(EMAIL_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#090b11] text-slate-100 overflow-hidden font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Background ambient lighting effects */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-indigo-500/15 via-purple-600/5 to-transparent blur-3xl opacity-70" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      </div>

      {/* Top Floating Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#090b11]/80 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
              <Film className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="font-bold text-white tracking-tight text-base group-hover:text-indigo-300 transition-colors">
                Aman Kumar
              </span>
              <span className="text-[10px] block text-slate-400 font-medium tracking-wide uppercase">
                Video Editor
              </span>
            </div>
          </motion.a>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-400">
            <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('tools')} className="hover:text-white transition-colors">
              Tools & Skills
            </button>
            <button onClick={() => scrollToSection('showcase')} className="hover:text-white transition-colors">
              Featured Showcase
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">
              Contact
            </button>
          </nav>

          {/* Header Action Button */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <a
              href={DRIVE_PORTFOLIO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDriveClick}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 border border-white/10 hover:border-indigo-400/40 transition-all duration-200 shadow-sm"
            >
              <span>Drive Samples</span>
              <ExternalLink className="w-3.5 h-3.5 text-indigo-400" />
            </a>
          </motion.div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10">

        {/* ================================================================== */}
        {/* SECTION 1: HERO SECTION                                            */}
        {/* ================================================================== */}
        <section className="relative pt-20 pb-24 md:pt-28 md:pb-32 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">

            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/40 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-6 shadow-sm shadow-indigo-950/50"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Editing & Design Projects</span>
            </motion.div>

            {/* Name with smooth fade-in animation */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-5"
            >
              Aman <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-200">Kumar</span>
            </motion.h1>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-block text-base sm:text-xl font-medium text-indigo-200/90 tracking-wide mb-4"
            >
              MCA Student | Passionate Video Editor &amp; Visual Storyteller
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
            >
              Creating high-impact, story-driven edits for YouTube and social media using mobile &amp; desktop tools.
            </motion.p>

            {/* Two CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              {/* CTA 1: View My Drive Edits */}
              <motion.a
                href={DRIVE_PORTFOLIO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDriveClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:from-indigo-500 hover:to-purple-500 transition-all border border-indigo-400/30"
              >
                <span>View My Drive Edits</span>
                <ExternalLink className="w-4 h-4 text-indigo-100" />
              </motion.a>

              {/* CTA 2: Get In Touch */}
              <motion.button
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm bg-white/[0.05] hover:bg-white/[0.09] text-slate-200 border border-white/10 hover:border-slate-400/30 transition-all"
              >
                <Mail className="w-4 h-4 text-purple-300" />
                <span>Get In Touch</span>
              </motion.button>
            </motion.div>

            {/* Minimal feature spec pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-14 pt-8 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs text-slate-400 font-medium"
            >
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-indigo-400" />
                <span>Dynamic YouTube Edits</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-purple-400" />
                <span>High-Retention 9:16 Reels</span>
              </div>
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4 text-indigo-400" />
                <span>CTR-Driven Thumbnails</span>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ================================================================== */}
        {/* SECTION 2: ABOUT & EDUCATION                                       */}
        {/* ================================================================== */}
        <section id="about" className="py-20 px-4 sm:px-6 border-t border-white/[0.06] bg-[#0b0d15]/50">
          <div className="max-w-4xl mx-auto">

            <div className="flex items-center gap-2.5 mb-3">
              <span className="h-px w-6 bg-indigo-500"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">Background</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-8">
              About &amp; Creative Approach
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
              {/* Creative Vision Intro */}
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="md:col-span-7 p-6 sm:p-7 rounded-2xl glass-card flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-5 text-indigo-400">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Crafting Stories that Hold Attention
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                    I believe great editing is invisible — it sets the mood, directs the viewer’s focus, and makes storytelling feel effortless. By combining sharp narrative pacing, synchronized audio cues, and deliberate visual hooks, I help content creators keep audiences glued from the very first frame.
                  </p>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    Whether working with mobile platforms like CapCut &amp; VN for agile turnarounds, or desktop suites for precision polish, my focus is always on audience retention and clean aesthetics.
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center gap-4 text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Story Pacing</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Hook Psychology</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Visual Balance</span>
                  </div>
                </div>
              </motion.div>

              {/* Education Card: G. L. Bajaj */}
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="md:col-span-5 p-6 sm:p-7 rounded-2xl glass-card flex flex-col justify-between border-indigo-500/15"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-5 text-purple-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="inline-block px-2.5 py-1 rounded-md text-[11px] font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20 mb-3">
                    Academic Background
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1.5">
                    Master of Computer Applications (MCA)
                  </h3>
                  <p className="text-sm font-medium text-indigo-300 mb-4">
                    G. L. Bajaj Institute of Technology &amp; Management
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    Currently pursuing MCA in Greater Noida. This academic foundation sharpens my analytical thinking, digital workflow efficiency, and technical problem-solving.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-[11px] text-slate-400">
                  <span className="text-slate-200 font-semibold">Location:</span> Greater Noida, Uttar Pradesh, India
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* ================================================================== */}
        {/* SECTION 3: TOOLS & SKILLS                                          */}
        {/* ================================================================== */}
        <section id="tools" className="py-20 px-4 sm:px-6 border-t border-white/[0.06]">
          <div className="max-w-4xl mx-auto">

            <div className="flex items-center gap-2.5 mb-3">
              <span className="h-px w-6 bg-indigo-500"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">Capabilities</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              Tools &amp; Core Strengths
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mb-10">
              A streamlined toolkit tailored for fast turnarounds, creative storytelling, and high-retention social media content.
            </p>

            {/* Grid layout for editing tools and design tools */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

              {/* Primary Video Editing Tools */}
              <div className="p-6 rounded-2xl glass-card">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <Scissors className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-base">Primary Editing Tools</h3>
                    <p className="text-xs text-slate-400">Daily drivers for long-form &amp; short-form</p>
                  </div>
                </div>

                <div className="space-y-3.5">
                  {/* CapCut */}
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:border-indigo-500/30 transition-all flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center font-bold text-xs text-indigo-300 border border-white/10">
                        CC
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white flex items-center gap-2">
                          <span>CapCut</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-semibold">Core</span>
                        </div>
                        <p className="text-xs text-slate-400">Keyframe animations, speed ramps &amp; dynamic captions</p>
                      </div>
                    </div>
                  </div>

                  {/* VN Video Editor */}
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:border-indigo-500/30 transition-all flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center font-bold text-xs text-purple-300 border border-white/10">
                        VN
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white flex items-center gap-2">
                          <span>VN Video Editor</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 font-semibold">Core</span>
                        </div>
                        <p className="text-xs text-slate-400">Multi-track precision timeline &amp; music beat sync</p>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Editing Suite */}
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:border-white/15 transition-all flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center font-bold text-xs text-blue-300 border border-white/10">
                        Pr
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white flex items-center gap-2">
                          <span>Adobe Premiere Pro</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-700/50 text-slate-300">Basic</span>
                        </div>
                        <p className="text-xs text-slate-400">Fundamental desktop cutting &amp; sequence assembly</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Graphic Design & Visual Tools */}
              <div className="p-6 rounded-2xl glass-card">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                    <Palette className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-base">Design &amp; Visual Tools</h3>
                    <p className="text-xs text-slate-400">Thumbnails, banners &amp; graphic assets</p>
                  </div>
                </div>

                <div className="space-y-3.5">
                  {/* Canva */}
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:border-purple-500/30 transition-all flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center font-bold text-xs text-cyan-300 border border-white/10">
                        Cn
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white flex items-center gap-2">
                          <span>Canva</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-semibold">Primary</span>
                        </div>
                        <p className="text-xs text-slate-400">Rapid social graphics, YouTube thumbnails &amp; overlays</p>
                      </div>
                    </div>
                  </div>

                  {/* Adobe Photoshop Basics */}
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:border-purple-500/30 transition-all flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center font-bold text-xs text-blue-400 border border-white/10">
                        Ps
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white flex items-center gap-2">
                          <span>Adobe Photoshop</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-700/50 text-slate-300">Basics</span>
                        </div>
                        <p className="text-xs text-slate-400">Subject cutout, color grading &amp; thumbnail composition</p>
                      </div>
                    </div>
                  </div>

                  {/* Creative Asset Workflow */}
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:border-white/15 transition-all flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center font-bold text-xs text-purple-300 border border-white/10">
                        Fx
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white flex items-center gap-2">
                          <span>Sound Effects &amp; Overlays</span>
                        </div>
                        <p className="text-xs text-slate-400">Whooshes, risers, pops, sound design library curation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Key Creative Strengths (Visual Badges Grid) */}
            <div className="p-6 sm:p-7 rounded-2xl glass-card border-indigo-500/10">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-5">
                Key Creative Strengths
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

                {/* Strength 1 */}
                <motion.div
                  whileHover={{ y: -3 }}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:border-indigo-500/30 transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-3">
                    <Tv className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">YouTube Pacing</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Trimming dead air, retention-focused jump cuts, and smooth visual transitions.
                  </p>
                </motion.div>

                {/* Strength 2 */}
                <motion.div
                  whileHover={{ y: -3 }}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:border-purple-500/30 transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mb-3">
                    <Flame className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">Hook-Focused Editing</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    First 3–5 second psychological hooks designed to stop viewers from scrolling away.
                  </p>
                </motion.div>

                {/* Strength 3 */}
                <motion.div
                  whileHover={{ y: -3 }}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:border-indigo-500/30 transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-3">
                    <Eye className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">Thumbnail Design</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    High click-through rate (CTR) thumbnails with bold readable typography and subject isolation.
                  </p>
                </motion.div>

                {/* Strength 4 */}
                <motion.div
                  whileHover={{ y: -3 }}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:border-purple-500/30 transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mb-3">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">Reels &amp; Shorts</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Dynamic vertical storytelling, animated subtitles, and trending audio beat-syncing.
                  </p>
                </motion.div>

              </div>
            </div>

          </div>
        </section>

        {/* ================================================================== */}
        {/* SECTION 4: FEATURED WORKS / DRIVE SHOWCASE                         */}
        {/* ================================================================== */}
        <section id="showcase" className="py-20 px-4 sm:px-6 border-t border-white/[0.06] bg-[#0b0d15]/50">
          <div className="max-w-4xl mx-auto">

            <div className="flex items-center gap-2.5 mb-3">
              <span className="h-px w-6 bg-indigo-500"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">Portfolio</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              Featured Works &amp; Drive Showcase
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mb-10">
              Browse raw cut samples, finished edits, and graphic assets hosted directly on Google Drive for high-fidelity viewing.
            </p>

            {/* Main Highlighted Drive Showcase Card */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="relative rounded-3xl p-6 sm:p-9 glass-card border border-indigo-500/25 shadow-2xl shadow-indigo-950/40 overflow-hidden mb-10"
            >
              {/* Subtle decorative glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-indigo-500/15 via-purple-500/10 to-transparent blur-2xl pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">

                {/* Left Showcase Info */}
                <div className="max-w-lg">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 mb-4">
                    <FolderGit2 className="w-3.5 h-3.5" />
                    <span>Cloud Video Repository</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                    Google Drive Video Showcase
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    Access the complete portfolio folder containing full HD &amp; 4K export files, project breakdowns, short-form reels, and graphic design deliverables.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="px-3 py-1 rounded-lg text-xs font-medium bg-white/[0.04] text-slate-300 border border-white/[0.06]">
                      YouTube Long-form
                    </span>
                    <span className="px-3 py-1 rounded-lg text-xs font-medium bg-white/[0.04] text-slate-300 border border-white/[0.06]">
                      Shorts &amp; Reels
                    </span>
                    <span className="px-3 py-1 rounded-lg text-xs font-medium bg-white/[0.04] text-slate-300 border border-white/[0.06]">
                      Thumbnails &amp; Posters
                    </span>
                  </div>

                  {/* Primary Drive CTA Button */}
                  <motion.a
                    href={DRIVE_PORTFOLIO_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleDriveClick}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl font-semibold text-sm bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 transition-all border border-indigo-400/30"
                  >
                    <Play className="w-4 h-4 fill-white text-white" />
                    <span>Watch Samples on Google Drive</span>
                    <ExternalLink className="w-4 h-4 text-indigo-200 ml-1" />
                  </motion.a>
                </div>

                {/* Right Mockup Showcase Display */}
                <div className="w-full md:w-64 lg:w-72 flex-shrink-0">
                  <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950/60 border border-white/10 p-4 relative group flex flex-col justify-between overflow-hidden shadow-inner">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        REC
                      </span>
                      <span>1080p • 60 FPS</span>
                    </div>

                    <div className="my-auto text-center py-4">
                      <div className="w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 mx-auto flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-indigo-300 ml-0.5" />
                      </div>
                      <span className="block mt-3 text-xs font-medium text-slate-300">
                        Click to Open Drive Folder
                      </span>
                    </div>

                    <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                      <div className="bg-indigo-500 h-full w-2/3" />
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Three Category Breakdown Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

              {/* Category 1: YouTube Long-form Edits */}
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="p-5 rounded-2xl glass-card flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4">
                    <MonitorPlay className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-semibold text-white mb-2">
                    YouTube Long-form Edits
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    Documentaries, vlogs, commentary, and tutorial cuts. Featuring tight pacing, strategic B-roll, SFX soundscapes, and visual pattern interrupts.
                  </p>
                </div>
                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-indigo-300">
                  <span>16:9 Format</span>
                  <span className="flex items-center gap-1 font-medium">In Drive Folder <ChevronRight className="w-3 h-3" /></span>
                </div>
              </motion.div>

              {/* Category 2: Shorts/Reels */}
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="p-5 rounded-2xl glass-card flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-semibold text-white mb-2">
                    Shorts &amp; Reels
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    Fast-moving Instagram Reels and YouTube Shorts. Crafted with rhythmic cuts, kinetic typography, trend-conscious audio, and zero viewer drag.
                  </p>
                </div>
                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-purple-300">
                  <span>9:16 Vertical</span>
                  <span className="flex items-center gap-1 font-medium">In Drive Folder <ChevronRight className="w-3 h-3" /></span>
                </div>
              </motion.div>

              {/* Category 3: Poster & Thumbnail Designs */}
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="p-5 rounded-2xl glass-card flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
                    <Palette className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-semibold text-white mb-2">
                    Poster &amp; Thumbnail Designs
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    High CTR thumbnail concepts made with Canva and Photoshop. Focused on high-contrast text, clear emotional focal points, and mobile readability.
                  </p>
                </div>
                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-cyan-300">
                  <span>Graphic Design</span>
                  <span className="flex items-center gap-1 font-medium">In Drive Folder <ChevronRight className="w-3 h-3" /></span>
                </div>
              </motion.div>

            </div>

          </div>
        </section>

        {/* ================================================================== */}
        {/* SECTION 5: FOOTER / CONTACT                                        */}
        {/* ================================================================== */}
        <section id="contact" className="py-20 px-4 sm:px-6 border-t border-white/[0.06] relative">
          <div className="max-w-4xl mx-auto">

            <div className="p-8 sm:p-12 rounded-3xl glass-card border-indigo-500/20 text-center relative overflow-hidden mb-12">
              <div className="inline-flex p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 mb-5 border border-indigo-500/20">
                <Mail className="w-6 h-6" />
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                Let&apos;s Create Something Great
              </h2>

              <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
                Need edits for your next YouTube video, high-converting social shorts, or clean thumbnail graphics? Get in touch directly via email.
              </p>

              {/* Action Buttons: Email and Drive */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                {/* Email Direct mailto */}
                <a
                  href={`mailto:${EMAIL_ADDRESS}?subject=Video%20Editing%20Inquiry%20-%20Aman%20Kumar`}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-600/30 transition-all border border-indigo-400/30"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Email</span>
                </a>

                {/* Quick Copy Email Button */}
                <button
                  onClick={copyEmailToClipboard}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium bg-white/[0.05] hover:bg-white/[0.09] text-slate-200 border border-white/10 transition-all"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-300 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              {/* Display plain text email for easy visibility */}
              <div className="mt-5 text-xs text-slate-400 font-mono">
                {EMAIL_ADDRESS}
              </div>

              {/* Google Drive Link direct button in contact */}
              <div className="mt-7 pt-7 border-t border-white/[0.06] flex items-center justify-center">
                <a
                  href={DRIVE_PORTFOLIO_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleDriveClick}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-300 hover:text-indigo-200 transition-colors"
                >
                  <span>Open Google Drive Video Portfolio Folder</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Simple, Elegant Copyright Line */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 pt-6 border-t border-white/[0.04]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-indigo-500" />
                <span className="text-slate-300 font-medium">Aman Kumar</span>
                <span>•</span>
                <span>Video Editor &amp; Graphic Designer</span>
              </div>
              <p>
                &copy; {new Date().getFullYear()} Aman Kumar. All rights reserved.
              </p>
            </div>

          </div>
        </section>

      </main>

      {/* Notice Dialog if placeholder Drive link is clicked */}
      <AnimatePresence>
        {showDriveNotice && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#131623] border border-indigo-500/30 p-6 rounded-2xl max-w-md w-full shadow-2xl text-left"
            >
              <div className="flex items-center gap-3 text-indigo-400 mb-3">
                <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                  <Info className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Google Drive Link Setup</h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                You are currently viewing the template with the placeholder link:
              </p>

              <div className="p-2.5 rounded-lg bg-black/40 border border-white/10 font-mono text-xs text-amber-300/90 break-all mb-4">
                [PASTE_YOUR_GOOGLE_DRIVE_FOLDER_OR_VIDEO_LINK_HERE]
              </div>

              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                To connect your actual Google Drive portfolio, simply open <code className="text-indigo-300 bg-white/5 px-1 py-0.5 rounded">src/App.tsx</code> and replace the value of <code className="text-indigo-300 bg-white/5 px-1 py-0.5 rounded">DRIVE_PORTFOLIO_LINK</code> with your shared Google Drive folder URL.
              </p>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowDriveNotice(false)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
                >
                  Got It
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
