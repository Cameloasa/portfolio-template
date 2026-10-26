import React, { useState, useEffect } from 'react';
import { ProjectItem } from '../data/portfolioData';
import { X, ExternalLink, Play, CheckCircle2, AlertTriangle, RefreshCw, Layers, ShieldCheck, Terminal, Cpu } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'interactive' | 'architecture' | 'spec'>('interactive');

  // Simulator states for Project 1: Cloud Monitor
  const [containerStats, setContainerStats] = useState([
    { name: 'nginx-ingress-v2', status: 'Healthy', cpu: 2.4, ram: 124, restarts: 0 },
    { name: 'auth-service-go', status: 'Healthy', cpu: 6.8, ram: 256, restarts: 0 },
    { name: 'redis-cache-cluster', status: 'Healthy', cpu: 1.1, ram: 512, restarts: 0 },
    { name: 'postgres-replica-01', status: 'Healthy', cpu: 11.4, ram: 1024, restarts: 0 },
  ]);
  const [isSimulatingSpike, setIsSimulatingSpike] = useState(false);

  // Simulator states for Project 2: Nexus Test Harness
  const [testRunning, setTestRunning] = useState(false);
  const [testLogs, setTestLogs] = useState<string[]>([
    'Playwright Test Runner v1.42 initialized.',
    'Discovered 14 test specs across 3 test suites.',
    'Workers: 4 parallel threads ready.'
  ]);
  const [testsPassed, setTestsPassed] = useState(14);

  // Keyboard navigation: Escape key closes modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const runTrafficSpike = () => {
    setIsSimulatingSpike(true);
    setContainerStats(prev =>
      prev.map(c => ({
        ...c,
        cpu: +(c.cpu * 2.8).toFixed(1),
        ram: +(c.ram * 1.3).toFixed(0)
      }))
    );
    setTimeout(() => {
      setContainerStats(prev =>
        prev.map(c => ({
          ...c,
          cpu: +(c.cpu / 2.8).toFixed(1),
          ram: +(c.ram / 1.3).toFixed(0)
        }))
      );
      setIsSimulatingSpike(false);
    }, 2800);
  };

  const runTestHarness = () => {
    setTestRunning(true);
    setTestLogs(['[RUNNER] Initiating parallel test execution across 4 threads...']);
    const testCases = [
      '✓ PASS specs/auth_session_test.py (28ms) - Token expiration validated',
      '✓ PASS specs/order_pipeline_test.py (114ms) - Cart checkout idempotency verified',
      '✓ PASS specs/latency_sla_test.py (42ms) - 99th percentile < 150ms verified',
      '✓ PASS specs/a11y_keyboard_test.py (88ms) - Focus traps in modals resolved',
      '✓ ALL 14 TESTS PASSED (0 failures, 0 skipped, latency target met)'
    ];

    testCases.forEach((log, index) => {
      setTimeout(() => {
        setTestLogs(prev => [...prev, log]);
        if (index === testCases.length - 1) {
          setTestRunning(false);
          setTestsPassed(14);
        }
      }, (index + 1) * 450);
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="w-full max-w-3xl max-h-[90vh] rounded-2xl border shadow-2xl flex flex-col overflow-hidden relative animate-in zoom-in-95 duration-200"
        style={{
          backgroundColor: 'var(--color-bg-surface)',
          borderColor: 'var(--color-border-card)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="p-6 border-b flex items-start justify-between gap-4"
          style={{ borderColor: 'var(--color-border-subtle)' }}
        >
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-xs font-mono font-semibold"
                  style={{
                    backgroundColor: 'var(--color-bg-accent-light)',
                    color: 'var(--color-primary)'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 id="modal-project-title" className="text-xl md:text-2xl font-bold text-[var(--color-text-main)]">
              {project.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-[var(--color-text-light)] hover:text-[var(--color-text-main)] hover:bg-[var(--color-bg-subtle)] transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div
          className="flex border-b px-6 bg-[var(--color-bg-subtle)]"
          style={{ borderColor: 'var(--color-border-subtle)' }}
        >
          <button
            type="button"
            onClick={() => setActiveTab('interactive')}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition-colors ${
              activeTab === 'interactive'
                ? 'border-[var(--color-primary)] text-[var(--color-primary)]'
                : 'border-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text-main)]'
            }`}
          >
            Interactive Demo / Lab
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('architecture')}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition-colors ${
              activeTab === 'architecture'
                ? 'border-[var(--color-primary)] text-[var(--color-primary)]'
                : 'border-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text-main)]'
            }`}
          >
            System Architecture
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('spec')}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition-colors ${
              activeTab === 'spec'
                ? 'border-[var(--color-primary)] text-[var(--color-primary)]'
                : 'border-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text-main)]'
            }`}
          >
            Full Project Specifications
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Tab 1: Interactive Simulator */}
          {activeTab === 'interactive' && (
            <div>
              {project.id === 'cloud-monitor' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-[var(--color-text-main)] flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-[var(--color-primary)]" />
                        <span>Live Telemetry Socket Simulator</span>
                      </h4>
                      <p className="text-xs text-[var(--color-text-light)]">
                        Polling Docker container metrics at 2s intervals via Prometheus daemon.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={runTrafficSpike}
                      disabled={isSimulatingSpike}
                      className="px-3 py-1.5 rounded text-xs font-semibold flex items-center gap-1.5 transition-all"
                      style={{
                        backgroundColor: isSimulatingSpike ? 'var(--color-bg-subtle)' : 'var(--color-primary)',
                        color: isSimulatingSpike ? 'var(--color-text-light)' : '#ffffff'
                      }}
                    >
                      <RefreshCw className={`w-3.5 h-3.5 ${isSimulatingSpike ? 'animate-spin' : ''}`} />
                      <span>{isSimulatingSpike ? 'Simulating Spike...' : 'Simulate Traffic Spike'}</span>
                    </button>
                  </div>

                  {/* Telemetry Table */}
                  <div className="border rounded-xl overflow-hidden text-xs" style={{ borderColor: 'var(--color-border-card)' }}>
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr style={{ backgroundColor: 'var(--color-bg-subtle)', color: 'var(--color-text-main)' }}>
                          <th className="p-2.5 font-semibold">Container ID</th>
                          <th className="p-2.5 font-semibold">Status</th>
                          <th className="p-2.5 font-semibold">CPU Load</th>
                          <th className="p-2.5 font-semibold">RAM Usage</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y" style={{ borderColor: 'var(--color-border-subtle)' }}>
                        {containerStats.map((c) => (
                          <tr key={c.name} className="hover:bg-[var(--color-bg-base)]">
                            <td className="p-2.5 font-mono font-medium text-[var(--color-text-main)]">{c.name}</td>
                            <td className="p-2.5">
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400">
                                <CheckCircle2 className="w-3 h-3" />
                                {c.status}
                              </span>
                            </td>
                            <td className="p-2.5 font-mono tabular-nums text-[var(--color-text-muted)]">{c.cpu}%</td>
                            <td className="p-2.5 font-mono tabular-nums text-[var(--color-text-muted)]">{c.ram} MB</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="p-3 rounded-lg border text-xs" style={{ backgroundColor: 'var(--color-bg-accent-light)', borderColor: 'var(--color-primary)' }}>
                    <strong>Monitoring Invariant:</strong> Auto-scaler scales replica sets when average CPU &gt; 25% or memory exceeds 800MB.
                  </div>
                </div>
              )}

              {project.id === 'nexus-harness' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-[var(--color-text-main)] flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-[var(--color-primary)]" />
                        <span>Playwright CI Pipeline Execution Runner</span>
                      </h4>
                      <p className="text-xs text-[var(--color-text-light)]">
                        Run simulated regression test suite against target endpoints.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={runTestHarness}
                      disabled={testRunning}
                      className="px-3.5 py-1.5 rounded text-xs font-semibold text-white flex items-center gap-1.5"
                      style={{ backgroundColor: 'var(--color-primary)' }}
                    >
                      <Play className="w-3.5 h-3.5" />
                      <span>{testRunning ? 'Running Tests...' : 'Execute Suite'}</span>
                    </button>
                  </div>

                  {/* Terminal Log Box */}
                  <div
                    className="p-4 rounded-xl font-mono text-xs text-emerald-400 bg-slate-950 border border-slate-800 h-44 overflow-y-auto space-y-1"
                    aria-live="polite"
                  >
                    {testLogs.map((log, i) => (
                      <div key={i} className="leading-relaxed">
                        {log}
                      </div>
                    ))}
                    {testRunning && (
                      <div className="flex items-center gap-2 text-slate-400">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                        <span>Executing headless Chromium assertion matrix...</span>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="p-3 rounded-lg border" style={{ backgroundColor: 'var(--color-bg-base)', borderColor: 'var(--color-border-card)' }}>
                      <div className="text-xs text-[var(--color-text-light)]">Passing Specs</div>
                      <div className="text-lg font-bold text-emerald-600">{testsPassed}/14</div>
                    </div>
                    <div className="p-3 rounded-lg border" style={{ backgroundColor: 'var(--color-bg-base)', borderColor: 'var(--color-border-card)' }}>
                      <div className="text-xs text-[var(--color-text-light)]">Avg SLA Latency</div>
                      <div className="text-lg font-bold text-[var(--color-primary)]">42ms</div>
                    </div>
                    <div className="p-3 rounded-lg border" style={{ backgroundColor: 'var(--color-bg-base)', borderColor: 'var(--color-border-card)' }}>
                      <div className="text-xs text-[var(--color-text-light)]">Test Flakiness</div>
                      <div className="text-lg font-bold text-[var(--color-text-main)]">0.0%</div>
                    </div>
                  </div>
                </div>
              )}

              {project.id === 'lumora-storefront' && (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-[var(--color-text-main)] flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[var(--color-primary)]" />
                      <span>WCAG 2.2 Level AA Verification Matrix</span>
                    </h4>
                    <p className="text-xs text-[var(--color-text-light)]">
                      Rigorous compliance audit verified using axe-core and manual screen reader testing.
                    </p>
                  </div>

                  <div className="space-y-2">
                    {[
                      { rule: 'WCAG 1.4.3: Minimum Contrast', result: '14.2:1 against background (AAA standard achieved)', status: 'PASS' },
                      { rule: 'WCAG 2.1.1: Keyboard Accessibility', result: 'All filters, cart modals, and checkout inputs fully navigable with Tab/Shift+Tab', status: 'PASS' },
                      { rule: 'WCAG 2.1.2: No Keyboard Trap', result: 'Cart drawer traps focus when open and returns focus to trigger button on close', status: 'PASS' },
                      { rule: 'WCAG 4.1.2: Name, Role, Value', result: 'Semantic HTML5 landmark tags (main, nav, article, aside) paired with ARIA', status: 'PASS' }
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg border flex items-center justify-between gap-4 text-xs"
                        style={{
                          backgroundColor: 'var(--color-bg-base)',
                          borderColor: 'var(--color-border-subtle)'
                        }}
                      >
                        <div>
                          <div className="font-bold text-[var(--color-text-main)]">{item.rule}</div>
                          <div className="text-[var(--color-text-muted)] mt-0.5">{item.result}</div>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400 shrink-0">
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tab 2: Architecture */}
          {activeTab === 'architecture' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-[var(--color-text-main)] mb-1">Architecture Notes</h4>
                <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {project.details.architectureNotes}
                </p>
              </div>

              <div className="p-4 rounded-xl border" style={{ backgroundColor: 'var(--color-bg-base)', borderColor: 'var(--color-border-subtle)' }}>
                <h5 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-light)] mb-2">
                  Key Technical Problem Solved
                </h5>
                <p className="text-sm text-[var(--color-text-muted)]">
                  {project.details.problemSolved}
                </p>
              </div>

              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-light)] mb-2">
                  Technology Stack
                </h5>
                <div className="flex flex-wrap gap-2">
                  {project.details.techStack.map(tech => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded text-xs font-medium border"
                      style={{
                        backgroundColor: 'var(--color-bg-surface)',
                        borderColor: 'var(--color-border-card)',
                        color: 'var(--color-text-main)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Full Project Specification */}
          {activeTab === 'spec' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-[var(--color-text-main)] mb-1">Project Overview</h4>
                <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {project.details.overview}
                </p>
              </div>

              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-light)] mb-2">
                  Engineering Highlights
                </h5>
                <ul className="space-y-2 list-none p-0 m-0 text-sm text-[var(--color-text-muted)]">
                  {project.details.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {project.metrics && (
                <div className="grid grid-cols-3 gap-3 pt-3 border-t" style={{ borderColor: 'var(--color-border-subtle)' }}>
                  {project.metrics.map((m, i) => (
                    <div key={i} className="p-3 rounded-lg border text-center" style={{ backgroundColor: 'var(--color-bg-base)', borderColor: 'var(--color-border-card)' }}>
                      <div className="text-xs text-[var(--color-text-light)]">{m.label}</div>
                      <div className="text-sm font-bold text-[var(--color-text-main)] mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div
          className="p-4 px-6 border-t flex items-center justify-between"
          style={{
            backgroundColor: 'var(--color-bg-base)',
            borderColor: 'var(--color-border-subtle)'
          }}
        >
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-primary)] hover:underline"
          >
            <span>External Source / Audit</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
