import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code, Settings, Cloud, Search, Check, Sparkles } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const renderIcon = (type: 'code' | 'settings' | 'cloud') => {
    switch (type) {
      case 'code':
        return <span className="font-mono font-bold text-sm">&lt;/&gt;</span>;
      case 'settings':
        return <Settings className="w-4 h-4" />;
      case 'cloud':
        return <Cloud className="w-4 h-4" />;
    }
  };

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-16 md:py-24 border-t border-b transition-colors duration-300"
      style={{
        backgroundColor: 'var(--color-bg-surface)',
        borderColor: 'var(--color-border-subtle)'
      }}
    >
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2
              id="skills-heading"
              className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--color-text-main)] mb-3"
            >
              Technical Skills &amp; Competencies
            </h2>
            <p className="text-base text-[var(--color-text-muted)] max-w-[65ch]">
              Categorized technical toolset acquired through coursework, independent research, and production-grade laboratory projects.
            </p>
          </div>

          {/* Interactive Skill Quick Search Filter */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-light)]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search competencies..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border transition-colors"
              style={{
                backgroundColor: 'var(--color-bg-base)',
                borderColor: 'var(--color-border-card)',
                color: 'var(--color-text-main)'
              }}
              aria-label="Filter competencies by keyword"
            />
          </div>
        </div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {SKILL_CATEGORIES.map((category) => {
            const matchesQuery = (skill: string) =>
              searchQuery === '' || skill.toLowerCase().includes(searchQuery.toLowerCase());

            return (
              <div
                key={category.title}
                className="p-6 md:p-8 rounded-xl border flex flex-col justify-between transition-all hover:shadow-md"
                style={{
                  backgroundColor: 'var(--color-bg-base)',
                  borderColor: 'var(--color-border-subtle)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="w-8 h-8 rounded-md flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: 'var(--color-tag-bg)',
                        color: 'var(--color-tag-text)'
                      }}
                      aria-hidden="true"
                    >
                      {renderIcon(category.iconType)}
                    </span>
                    <h3 className="text-lg font-bold text-[var(--color-text-main)] leading-snug">
                      {category.title}
                    </h3>
                  </div>

                  {/* Category Description */}
                  <p className="text-sm leading-relaxed text-[var(--color-text-muted)] mb-6">
                    {category.description}
                  </p>
                </div>

                {/* Skill Pills */}
                <ul
                  className="flex flex-wrap gap-2 list-none p-0 m-0 pt-4 border-t"
                  style={{ borderColor: 'var(--color-border-subtle)' }}
                  aria-label={`${category.title} competencies`}
                >
                  {category.skills.map((skill) => {
                    const isHighlighted = matchesQuery(skill);
                    const isSelected = selectedSkill === skill;

                    return (
                      <li key={skill}>
                        <button
                          type="button"
                          onClick={() => setSelectedSkill(isSelected ? null : skill)}
                          className={`px-2.5 py-1 text-xs font-semibold rounded transition-all text-left ${
                            isHighlighted ? 'opacity-100' : 'opacity-30'
                          } ${
                            isSelected
                              ? 'ring-2 ring-offset-1 ring-[var(--color-primary)]'
                              : 'hover:border-[var(--color-primary)]'
                          }`}
                          style={{
                            backgroundColor: isSelected
                              ? 'var(--color-bg-accent-light)'
                              : 'var(--color-bg-surface)',
                            color: isSelected ? 'var(--color-primary)' : 'var(--color-text-muted)',
                            borderColor: 'var(--color-border-card)',
                            borderWidth: '1px'
                          }}
                          title={`Click to view details for ${skill}`}
                        >
                          {skill}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Selected Skill Info Drawer / Banner */}
        {selectedSkill && (
          <div
            className="mt-8 p-4 rounded-xl border flex items-center justify-between gap-4 animate-in fade-in"
            style={{
              backgroundColor: 'var(--color-bg-accent-light)',
              borderColor: 'var(--color-primary)'
            }}
          >
            <div className="flex items-center gap-3">
              <span
                className="w-7 h-7 rounded-full flex items-center justify-center text-white"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                <Check className="w-4 h-4" />
              </span>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
                  Active Competency Selected
                </span>
                <h4 className="text-sm font-bold text-[var(--color-text-main)]">
                  {selectedSkill}
                </h4>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setSelectedSkill(null)}
              className="text-xs font-semibold px-3 py-1.5 rounded border bg-white text-[var(--color-text-muted)] hover:text-[var(--color-text-main)]"
            >
              Clear Selection
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
