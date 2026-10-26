import React, { useState } from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle2, ChevronRight, X } from 'lucide-react';

interface CourseDetail {
  code: string;
  name: string;
  description: string;
  topics: string[];
}

const COURSES_INFO: Record<string, CourseDetail> = {
  'IT 410': {
    code: 'IT 410',
    name: 'Distributed Web Systems',
    description: 'Covers modern distributed architectures, gRPC, REST protocols, eventual consistency, and cloud microservices integration.',
    topics: ['Microservice decomposition', 'Event-driven streaming', 'API Gateway design', 'Load balancing']
  },
  'CS 375': {
    code: 'CS 375',
    name: 'Software Verification & QA',
    description: 'Formal verification, automated test suites, regression testing matrices, continuous integration, and boundary value analysis.',
    topics: ['Unit & Integration Testing', 'Mutation Testing', 'Playwright & Selenium', 'Test coverage heuristics']
  },
  'IT 330': {
    code: 'IT 330',
    name: 'Cloud Infrastructure & Security',
    description: 'DevOps practices, container orchestration, identity & access management (IAM), and Infrastructure as Code (IaC).',
    topics: ['Docker & Kubernetes', 'Terraform fundamentals', 'Cloud security postures', 'CI/CD pipeline hardening']
  }
};

export const AboutSection: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<CourseDetail | null>(null);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-16 md:py-24 transition-colors duration-300"
    >
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 md:gap-10 items-start">
          {/* Main About Card */}
          <article
            className="p-8 md:p-10 rounded-2xl border transition-all"
            style={{
              backgroundColor: 'var(--color-bg-surface)',
              borderColor: 'var(--color-border-subtle)',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <h2
              id="about-heading"
              className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--color-text-main)] mb-6"
            >
              About Me &amp; Professional Path
            </h2>

            <div className="space-y-4 text-base md:text-[1.0625rem] leading-relaxed text-[var(--color-text-muted)] mb-8">
              <p>
                I am an undergraduate student pursuing a Bachelor of Science in Information Technology with an emphasis on Systems Architecture and Software Engineering. My academic journey combines hands-on engineering with rigorous computer science fundamentals, focusing on test-driven development, semantic accessibility, and distributed architectures.
              </p>
              <p>
                Beyond the classroom, I serve as a student mentor in the Department of Computer Science and contribute to open-source developer tooling. My goal upon graduation is to join an engineering team as an Associate Software Engineer or Cloud QA Automation Specialist.
              </p>
            </div>

            {/* Academic Highlights Grid */}
            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t"
              style={{ borderColor: 'var(--color-border-subtle)' }}
            >
              <div
                className="p-4 rounded-md border-l-[3px] transition-transform hover:-translate-y-0.5"
                style={{
                  backgroundColor: 'var(--color-bg-subtle)',
                  borderLeftColor: 'var(--color-primary)'
                }}
              >
                <div className="text-[12px] font-semibold text-[var(--color-text-light)] uppercase tracking-wider mb-1">
                  Degree Target
                </div>
                <div className="font-bold text-sm md:text-[15px] text-[var(--color-text-main)] leading-snug">
                  B.S. Information Technology
                </div>
              </div>

              <div
                className="p-4 rounded-md border-l-[3px] transition-transform hover:-translate-y-0.5"
                style={{
                  backgroundColor: 'var(--color-bg-subtle)',
                  borderLeftColor: 'var(--color-primary)'
                }}
              >
                <div className="text-[12px] font-semibold text-[var(--color-text-light)] uppercase tracking-wider mb-1">
                  Cumulative GPA
                </div>
                <div className="font-bold text-sm md:text-[15px] text-[var(--color-text-main)] leading-snug">
                  3.91 / 4.00 (Dean's Honor List)
                </div>
              </div>

              <div
                className="p-4 rounded-md border-l-[3px] transition-transform hover:-translate-y-0.5"
                style={{
                  backgroundColor: 'var(--color-bg-subtle)',
                  borderLeftColor: 'var(--color-primary)'
                }}
              >
                <div className="text-[12px] font-semibold text-[var(--color-text-light)] uppercase tracking-wider mb-1">
                  University Department
                </div>
                <div className="font-bold text-sm md:text-[15px] text-[var(--color-text-main)] leading-snug">
                  College of Engineering &amp; Computing
                </div>
              </div>
            </div>
          </article>

          {/* Complementary Sidebar (<aside>) */}
          <aside
            aria-labelledby="aside-heading"
            className="p-6 md:p-8 rounded-2xl border"
            style={{
              backgroundColor: 'var(--color-bg-surface)',
              borderColor: 'var(--color-border-card)',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <h3
              id="aside-heading"
              className="text-xl font-bold text-[var(--color-text-main)] mb-1"
            >
              Current Learning Focus
            </h3>
            <p className="text-xs text-[var(--color-text-light)] mb-6">
              Supplementary technical pursuits and coursework active this semester.
            </p>

            {/* Block 1: Current Courses */}
            <div className="pb-5 mb-5 border-b" style={{ borderColor: 'var(--color-border-subtle)' }}>
              <h4 className="text-[15px] font-semibold text-[var(--color-text-main)] mb-3 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-[var(--color-primary)]" />
                <span>Current Courses</span>
              </h4>
              <ul className="space-y-2.5 list-none p-0 m-0 text-sm">
                {[
                  { id: 'IT 410', title: 'IT 410: Distributed Web Systems' },
                  { id: 'CS 375', title: 'CS 375: Software Verification & QA' },
                  { id: 'IT 330', title: 'IT 330: Cloud Infrastructure & Security' }
                ].map((course) => (
                  <li key={course.id}>
                    <button
                      type="button"
                      onClick={() => setSelectedCourse(COURSES_INFO[course.id])}
                      className="group w-full flex items-center justify-between text-left text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors py-0.5"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                        <span>{course.title}</span>
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Block 2: Technologies Under Study */}
            <div className="pb-5 mb-5 border-b" style={{ borderColor: 'var(--color-border-subtle)' }}>
              <h4 className="text-[15px] font-semibold text-[var(--color-text-main)] mb-3 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-[var(--color-primary)]" />
                <span>Technologies Under Study</span>
              </h4>
              <ul className="space-y-2 list-none p-0 m-0 text-sm text-[var(--color-text-muted)]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                  <span>Kubernetes &amp; Helm Charts</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                  <span>Playwright End-to-End Testing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                  <span>WCAG 2.2 AA Auditing &amp; ARIA</span>
                </li>
              </ul>
            </div>

            {/* Block 3: Certifications in Progress */}
            <div>
              <h4 className="text-[15px] font-semibold text-[var(--color-text-main)] mb-3 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[var(--color-primary)]" />
                <span>Certifications in Progress</span>
              </h4>
              <ul className="space-y-2 list-none p-0 m-0 text-sm text-[var(--color-text-muted)]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                  <span>AWS Certified Cloud Practitioner</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                  <span>HashiCorp Terraform Associate</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in"
          onClick={() => setSelectedCourse(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="course-modal-title"
        >
          <div
            className="w-full max-w-lg p-6 rounded-2xl border shadow-xl relative"
            style={{
              backgroundColor: 'var(--color-bg-surface)',
              borderColor: 'var(--color-border-card)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedCourse(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-[var(--color-text-light)] hover:text-[var(--color-text-main)] hover:bg-[var(--color-bg-subtle)]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span
                className="px-2.5 py-0.5 rounded text-xs font-mono font-bold"
                style={{
                  backgroundColor: 'var(--color-bg-accent-light)',
                  color: 'var(--color-primary)'
                }}
              >
                {selectedCourse.code}
              </span>
              <span className="text-xs text-[var(--color-text-light)]">Active Semester Course</span>
            </div>

            <h3 id="course-modal-title" className="text-xl font-bold text-[var(--color-text-main)] mb-3">
              {selectedCourse.name}
            </h3>

            <p className="text-sm leading-relaxed text-[var(--color-text-muted)] mb-5">
              {selectedCourse.description}
            </p>

            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-light)] mb-2">
              Core Modules &amp; Heuristics
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
              {selectedCourse.topics.map((topic, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-xs p-2 rounded border"
                  style={{
                    backgroundColor: 'var(--color-bg-base)',
                    borderColor: 'var(--color-border-subtle)',
                    color: 'var(--color-text-muted)'
                  }}
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedCourse(null)}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-white"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
