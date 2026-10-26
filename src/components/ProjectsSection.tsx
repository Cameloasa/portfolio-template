import React, { useState } from 'react';
import { PROJECTS_DATA, ProjectItem } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { ExternalLink, ArrowRight, Layout } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setFailedImages(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-16 md:py-24 transition-colors duration-300"
    >
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="mb-12">
          <h2
            id="projects-heading"
            className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--color-text-main)] mb-3"
          >
            Featured Academic Projects
          </h2>
          <p className="text-base text-[var(--color-text-muted)] max-w-[65ch]">
            Practical software implementations built to solve realistic system bottlenecks, automated testing workflows, and responsive commerce needs.
          </p>
        </div>

        {/* 3 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project) => {
            const hasImgError = failedImages[project.id];

            return (
              <article
                key={project.id}
                aria-labelledby={`project-${project.id}-title`}
                className="group rounded-2xl border flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: 'var(--color-bg-surface)',
                  borderColor: 'var(--color-border-subtle)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                {/* Image Container */}
                <div
                  className="relative w-full aspect-video overflow-hidden border-b transition-colors"
                  style={{
                    backgroundColor: 'var(--color-bg-subtle)',
                    borderColor: 'var(--color-border-subtle)'
                  }}
                >
                  {!hasImgError ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      loading="lazy"
                      width={688}
                      height={384}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      onError={() => handleImageError(project.id)}
                    />
                  ) : (
                    <div
                      className="w-full h-full flex flex-col items-center justify-center p-6 text-center"
                      style={{
                        background: 'linear-gradient(135deg, var(--color-bg-subtle) 0%, var(--color-bg-surface) 100%)'
                      }}
                    >
                      <Layout className="w-8 h-8 text-[var(--color-primary)] mb-2 opacity-80" />
                      <span className="text-xs font-bold text-[var(--color-text-main)]">
                        {project.title}
                      </span>
                      <span className="text-[11px] text-[var(--color-text-light)] mt-1">
                        Interactive Dashboard Interface
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6 md:p-7 flex flex-col flex-grow">
                  {/* Tags */}
                  <ul
                    className="flex flex-wrap gap-1.5 list-none p-0 m-0 mb-3"
                    aria-label={`Technologies used in ${project.title}`}
                  >
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="text-[12px] font-mono font-semibold px-2 py-0.5 rounded transition-colors"
                        style={{
                          backgroundColor: 'var(--color-bg-accent-light)',
                          color: 'var(--color-primary)'
                        }}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  {/* Title */}
                  <h3
                    id={`project-${project.id}-title`}
                    className="text-lg md:text-[1.2rem] font-bold text-[var(--color-text-main)] leading-snug mb-3"
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-[var(--color-text-muted)] mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Project Links Footer */}
                  <div
                    className="flex items-center justify-between gap-3 pt-4 border-t mt-auto"
                    style={{ borderColor: 'var(--color-border-subtle)' }}
                  >
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)] hover:underline whitespace-nowrap"
                      aria-label={
                        project.id === 'lumora-storefront'
                          ? 'Review W3C WCAG accessibility standards applied to Lumora project (opens in new window)'
                          : `View ${project.title} source repository on GitHub (opens in new window)`
                      }
                    >
                      <span>
                        {project.id === 'lumora-storefront'
                          ? 'Accessibility Audit'
                          : project.id === 'nexus-harness'
                          ? 'View Documentation'
                          : 'View Repository'}
                      </span>
                      <span aria-hidden="true" className="text-xs">↗</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] hover:underline whitespace-nowrap transition-colors"
                      aria-label={`Open interactive modal for ${project.title}`}
                    >
                      <span>{project.actionText}</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Interactive Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
