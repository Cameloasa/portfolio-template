import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="site-footer pt-16 pb-12 mt-auto text-[#94a3b8] transition-colors"
      style={{ backgroundColor: '#0b1329' }}
      role="contentinfo"
    >
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 md:gap-12 pb-12 border-b border-[#1e293b]">
          {/* Column 1: Brand Info */}
          <div>
            <div className="text-white text-lg font-bold mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded bg-blue-600 text-white font-mono text-xs flex items-center justify-center font-bold">
                &lt;/&gt;
              </span>
              <span>Alex Rivera • IT Portfolio</span>
            </div>
            <p className="text-sm leading-relaxed text-[#94a3b8] max-w-[42ch]">
              Demonstrating structured semantic HTML5, pure CSS3 styling, responsive layouts, and WCAG 2.2 AA accessibility principles for IT coursework.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 list-none p-0 m-0 text-sm">
              <li>
                <a href="#home" className="text-[#cbd5e1] hover:text-[#38bdf8] transition-colors">
                  Home / Top
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#cbd5e1] hover:text-[#38bdf8] transition-colors">
                  About Alex
                </a>
              </li>
              <li>
                <a href="#skills" className="text-[#cbd5e1] hover:text-[#38bdf8] transition-colors">
                  Technical Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-[#cbd5e1] hover:text-[#38bdf8] transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#cbd5e1] hover:text-[#38bdf8] transition-colors">
                  Contact Information
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Standards & Resources */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Standards &amp; Resources
            </h3>
            <ul className="space-y-2.5 list-none p-0 m-0 text-sm">
              <li>
                <a
                  href="https://www.w3.org/WAI/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#cbd5e1] hover:text-[#38bdf8] transition-colors inline-flex items-center gap-1"
                >
                  <span>W3C Web Accessibility</span>
                  <span aria-hidden="true" className="text-xs">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#cbd5e1] hover:text-[#38bdf8] transition-colors inline-flex items-center gap-1"
                >
                  <span>MDN HTML5 Guide</span>
                  <span aria-hidden="true" className="text-xs">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#cbd5e1] hover:text-[#38bdf8] transition-colors inline-flex items-center gap-1"
                >
                  <span>GitHub Repository</span>
                  <span aria-hidden="true" className="text-xs">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748b]">
          <p className="m-0">
            © 2025 Alex Rivera. Built with semantic HTML5 &amp; CSS3. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="m-0 text-center sm:text-right">
              Targeting WCAG 2.2 Level AA compliance • Zero external frameworks
            </p>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#1e293b] text-[#cbd5e1] hover:text-white hover:bg-blue-600 transition-all shrink-0"
              aria-label="Back to top of page"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
