import React, { useState } from 'react';
import { HERO_AVATAR } from '../data/portfolioData';
import { ArrowRight, Mail, UserCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="py-16 md:py-24 border-b transition-colors duration-300"
      style={{
        background: 'linear-gradient(180deg, var(--color-bg-surface) 0%, var(--color-bg-base) 100%)',
        borderColor: 'var(--color-border-subtle)'
      }}
    >
      <div className="max-w-[1140px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] items-center gap-12 lg:gap-16">
        {/* Left Column: Content */}
        <div className="flex flex-col items-start text-left">
          {/* Eyebrow badge */}
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-6"
            style={{
              backgroundColor: 'var(--color-tag-bg)',
              color: 'var(--color-tag-text)'
            }}
          >
            <span
              className="w-2 h-2 rounded-full inline-block"
              style={{ backgroundColor: '#0284c7' }}
              aria-hidden="true"
            />
            <span>B.S. Information Technology • Class of 2025</span>
          </div>

          {/* Main Headline */}
          <h1
            id="hero-title"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-text-main)] leading-[1.15] mb-5"
            style={{ textWrap: 'balance' }}
          >
            Building resilient web software, test pipelines, and cloud systems.
          </h1>

          {/* Description */}
          <p className="text-lg md:text-[1.15rem] leading-relaxed text-[var(--color-text-muted)] mb-8 max-w-[58ch]">
            Hello! I am Alex Rivera, a 3rd-year undergraduate IT student specializing in modern web development, automated quality assurance testing, and cloud infrastructure deployment.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white rounded-lg transition-all shadow-md hover:shadow-lg hover:opacity-95 active:scale-[0.98] w-full sm:w-auto whitespace-nowrap"
              style={{
                backgroundColor: 'var(--color-primary)',
                boxShadow: '0 2px 8px rgba(29, 78, 216, 0.25)'
              }}
            >
              <span>View Featured Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold rounded-lg border transition-all hover:bg-[var(--color-bg-subtle)] active:scale-[0.98] w-full sm:w-auto text-[var(--color-text-main)] whitespace-nowrap"
              style={{
                backgroundColor: 'var(--color-bg-surface)',
                borderColor: 'var(--color-border-card)'
              }}
            >
              <Mail className="w-4 h-4 text-[var(--color-text-light)]" />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>

        {/* Right Column: Avatar Photo */}
        <div className="flex justify-center lg:justify-end order-first lg:order-last">
          <div className="relative group">
            {/* Subtle background glow accent */}
            <div
              className="absolute -inset-1 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"
              style={{ backgroundColor: 'var(--color-primary)' }}
              aria-hidden="true"
            />

            {!imageError ? (
              <img
                src={HERO_AVATAR}
                alt="Portrait of Alex Rivera, IT Computer Science student, smiling in a modern university lab"
                width={320}
                height={320}
                className="relative w-64 sm:w-72 md:w-80 aspect-square object-cover rounded-2xl border-4 shadow-xl transition-transform duration-300 group-hover:scale-[1.01]"
                style={{
                  borderColor: 'var(--color-bg-surface)',
                  boxShadow: 'var(--shadow-lg)'
                }}
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
              />
            ) : (
              <div
                className="w-64 sm:w-72 md:w-80 aspect-square rounded-2xl border-4 flex flex-col items-center justify-center p-6 text-center"
                style={{
                  backgroundColor: 'var(--color-bg-subtle)',
                  borderColor: 'var(--color-border-card)'
                }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-4 text-white font-mono text-2xl font-bold"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  <UserCheck className="w-10 h-10" />
                </div>
                <h3 className="font-bold text-lg text-[var(--color-text-main)]">Alex Rivera</h3>
                <p className="text-xs text-[var(--color-text-light)] mt-1">
                  B.S. Information Technology • Systems Architecture
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
