import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('alex-rivera-theme-preference') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = prefersDark ? 'dark' : 'light';
      setTheme(initialTheme);
      document.documentElement.setAttribute('data-theme', initialTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('alex-rivera-theme-preference', newTheme);
  };

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="site-header sticky top-0 z-50 backdrop-blur-md transition-colors duration-300 border-b"
      style={{
        backgroundColor: 'var(--header-bg)',
        borderColor: 'var(--color-border-subtle)',
        boxShadow: 'var(--shadow-sm)'
      }}
      role="banner"
    >
      <div className="max-w-[1140px] mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          className="flex items-center gap-3 text-lg font-bold tracking-tight text-[var(--color-text-main)] hover:opacity-90 transition-opacity whitespace-nowrap shrink-0 group"
          aria-label="Alex Rivera Portfolio Home"
        >
          <span
            className="w-9 h-9 rounded-lg flex items-center justify-center font-mono font-bold text-sm text-white transition-transform group-hover:scale-105"
            style={{ backgroundColor: 'var(--color-primary)' }}
            aria-hidden="true"
          >
            &lt;/&gt;
          </span>
          <span className="text-[1.15rem] font-bold">Alex Rivera</span>
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-2" aria-label="Primary portfolio navigation">
          <ul className="flex items-center gap-1 list-none p-0 m-0">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`px-3 py-1.5 rounded-md text-[15px] font-medium transition-colors whitespace-nowrap block ${
                      isActive
                        ? 'text-[var(--color-primary)] font-semibold'
                        : 'text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-bg-subtle)]'
                    }`}
                    style={isActive ? { backgroundColor: 'var(--color-bg-accent-light)' } : undefined}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Zone 3: Actions (Theme Toggle & Mobile Menu Trigger) */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            id="theme-toggle"
            className="w-10 h-10 rounded-lg flex items-center justify-center border transition-all hover:scale-105 active:scale-95 focus-visible:outline-2"
            style={{
              borderColor: 'var(--color-border-card)',
              backgroundColor: 'var(--color-bg-surface)',
              color: 'var(--color-text-main)',
            }}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={theme === 'dark'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-amber-400 transition-transform duration-300 rotate-0" />
            ) : (
              <Moon className="w-5 h-5 text-slate-700 transition-transform duration-300 rotate-0" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border text-[var(--color-text-main)]"
            style={{
              borderColor: 'var(--color-border-card)',
              backgroundColor: 'var(--color-bg-surface)'
            }}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="md:hidden border-b px-6 py-4 animate-in slide-in-from-top-2"
          style={{
            backgroundColor: 'var(--color-bg-surface)',
            borderColor: 'var(--color-border-subtle)',
          }}
        >
          <ul className="flex flex-col gap-2 list-none p-0 m-0">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2.5 rounded-md text-[15px] font-medium transition-colors ${
                      isActive
                        ? 'text-[var(--color-primary)] font-semibold'
                        : 'text-[var(--color-text-muted)] hover:text-[var(--color-primary)]'
                    }`}
                    style={isActive ? { backgroundColor: 'var(--color-bg-accent-light)' } : undefined}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
};
