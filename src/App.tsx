import { Navbar } from './components/sections/Navbar'
import { Hero } from './components/sections/Hero'
import { Services } from './components/sections/Services'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { WhyChooseMe } from './components/sections/WhyChooseMe'
import { WorkProcess } from './components/sections/WorkProcess'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'

import { ArrowUp, Mail } from 'lucide-react'

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-textPrimary relative overflow-x-hidden selection:bg-primary/15 selection:text-primary">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Services />
        <Projects />
        <Skills />
        <WhyChooseMe />
        <WorkProcess />
        <About />
        <Contact />
      </main>
      
      <footer className="border-t border-slate-200/80 bg-surfaceSubtle py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-xl font-bold tracking-tight text-gradient">AHMAD</span>
            <p className="text-sm text-textSecondary">
              Full-Stack Developer crafting high-performance web applications & AI solutions.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white border border-slate-200 text-textSecondary hover:text-primary hover:border-primary/40 hover:shadow-sm transition-all"
              aria-label="GitHub"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white border border-slate-200 text-textSecondary hover:text-primary hover:border-primary/40 hover:shadow-sm transition-all"
              aria-label="LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a
              href="mailto:suhebah029@gmail.com"
              className="p-2.5 rounded-xl bg-white border border-slate-200 text-textSecondary hover:text-primary hover:border-primary/40 hover:shadow-sm transition-all"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-primary text-white hover:bg-primaryHover shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all ml-2"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8 pt-6 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-textMuted">
          <p>© {new Date().getFullYear()} Ahmad. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed & Built with modern web technologies
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
