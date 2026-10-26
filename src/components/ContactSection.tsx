import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Copy, Check, Send, AlertCircle, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    phone: '',
    inquiryTopic: '',
    message: '',
    consent: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText('alex.rivera.it@university.edu');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) {
      errs.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Please provide a valid name';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format (e.g. name@domain.com)';
    }

    if (formData.website && !formData.website.startsWith('http')) {
      errs.website = 'URL must begin with http:// or https://';
    }

    if (!formData.inquiryTopic) {
      errs.inquiryTopic = 'Please select an inquiry topic from the list';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide message details';
    } else if (formData.message.trim().length < 20) {
      errs.message = `Message must be at least 20 characters (current: ${formData.message.trim().length})`;
    }

    if (!formData.consent) {
      errs.consent = 'You must confirm the educational portfolio disclosure';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmittedData({ ...formData });
        setFormData({
          name: '',
          email: '',
          website: '',
          phone: '',
          inquiryTopic: '',
          message: '',
          consent: false
        });
        setErrors({});
      }, 700);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-16 md:py-24 border-t transition-colors duration-300"
      style={{
        backgroundColor: 'var(--color-bg-surface)',
        borderColor: 'var(--color-border-subtle)'
      }}
    >
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="mb-12">
          <h2
            id="contact-heading"
            className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--color-text-main)] mb-3"
          >
            Contact &amp; Professional Inquiries
          </h2>
          <p className="text-base text-[var(--color-text-muted)] max-w-[65ch]">
            Interested in discussing internship opportunities, undergraduate research, or software testing methodologies? Feel free to reach out directly or send a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-8 md:gap-12 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              {/* Email */}
              <div
                className="p-4 rounded-xl border flex items-center justify-between transition-colors"
                style={{
                  backgroundColor: 'var(--color-bg-base)',
                  borderColor: 'var(--color-border-subtle)'
                }}
              >
                <div>
                  <div className="text-[11px] font-semibold text-[var(--color-text-light)] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                    <span>Academic Email</span>
                  </div>
                  <a
                    href="mailto:alex.rivera.it@university.edu"
                    className="font-semibold text-sm md:text-[15px] text-[var(--color-primary)] hover:underline break-all"
                  >
                    alex.rivera.it@university.edu
                  </a>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="p-2 rounded-lg border text-xs text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-bg-surface)] transition-all shrink-0 ml-2"
                  style={{ borderColor: 'var(--color-border-card)' }}
                  aria-label="Copy academic email address to clipboard"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div
                className="p-4 rounded-xl border transition-colors"
                style={{
                  backgroundColor: 'var(--color-bg-base)',
                  borderColor: 'var(--color-border-subtle)'
                }}
              >
                <div className="text-[11px] font-semibold text-[var(--color-text-light)] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                  <span>Campus Phone</span>
                </div>
                <a
                  href="tel:+15550198342"
                  className="font-semibold text-sm md:text-[15px] text-[var(--color-primary)] hover:underline"
                >
                  +1 (555) 019-8342
                </a>
              </div>

              {/* Location */}
              <div
                className="p-4 rounded-xl border transition-colors"
                style={{
                  backgroundColor: 'var(--color-bg-base)',
                  borderColor: 'var(--color-border-subtle)'
                }}
              >
                <div className="text-[11px] font-semibold text-[var(--color-text-light)] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                  <span>University Location</span>
                </div>
                <div className="font-semibold text-sm md:text-[15px] text-[var(--color-text-main)] leading-snug">
                  School of Computing, Room 402<br />
                  University Tech Quad, Suite B
                </div>
              </div>

              {/* GitHub */}
              <div
                className="p-4 rounded-xl border transition-colors"
                style={{
                  backgroundColor: 'var(--color-bg-base)',
                  borderColor: 'var(--color-border-subtle)'
                }}
              >
                <div className="text-[11px] font-semibold text-[var(--color-text-light)] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Github className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                  <span>Code Repository &amp; Network</span>
                </div>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-sm md:text-[15px] text-[var(--color-primary)] hover:underline"
                >
                  <span>GitHub Profile</span>
                  <span aria-hidden="true" className="text-xs">↗</span>
                </a>
              </div>
            </div>

            {/* Academic Portfolio Notice Box */}
            <div
              className="p-4 rounded-r-lg border-l-4 text-xs leading-relaxed"
              style={{
                backgroundColor: 'var(--color-bg-accent-light)',
                borderLeftColor: 'var(--color-primary)',
                color: 'var(--color-tag-text)'
              }}
            >
              <strong>Academic Portfolio Notice:</strong> This site was created for an HTML5 &amp; CSS3 university curriculum assignment. Form submission demonstrates semantic validation and client accessibility.
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div
            className="p-6 md:p-8 rounded-2xl border"
            style={{
              backgroundColor: 'var(--color-bg-base)',
              borderColor: 'var(--color-border-card)',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            {submittedData ? (
              <div className="text-center py-8 space-y-4 animate-in fade-in">
                <div
                  className="w-14 h-14 rounded-full mx-auto flex items-center justify-center text-white"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text-main)]">
                  Message Dispatched Successfully
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] max-w-md mx-auto">
                  Thank you, <strong>{submittedData.name}</strong>. Your inquiry regarding{' '}
                  <span className="font-semibold text-[var(--color-primary)]">{submittedData.inquiryTopic}</span>{' '}
                  has been simulated and logged. A verification receipt has been routed to{' '}
                  <span className="font-mono text-xs">{submittedData.email}</span>.
                </p>

                <div
                  className="p-4 rounded-xl border max-w-md mx-auto text-left text-xs text-[var(--color-text-muted)] space-y-1"
                  style={{
                    backgroundColor: 'var(--color-bg-surface)',
                    borderColor: 'var(--color-border-subtle)'
                  }}
                >
                  <div className="font-bold text-[var(--color-text-main)] mb-1">Message Preview:</div>
                  <div className="italic line-clamp-3">"{submittedData.message}"</div>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setSubmittedData(null)}
                    className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-lg md:text-xl font-bold text-[var(--color-text-main)] mb-1">
                  Send a Direct Message
                </h3>
                <p
                  className="text-xs text-[var(--color-text-muted)] pb-4 mb-6 border-b"
                  style={{ borderColor: 'var(--color-border-subtle)' }}
                >
                  Fields marked with an asterisk (<span className="text-red-500 font-bold">*</span>) are required.
                </p>

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold text-[var(--color-text-main)] mb-1"
                      >
                        Full Name <span className="text-red-500 font-bold">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        autoComplete="name"
                        placeholder="e.g. Dr. Jane Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        aria-invalid={!!errors.name}
                        aria-describedby="name-hint"
                        className="w-full px-3.5 py-2.5 rounded-md border text-sm transition-colors"
                        style={{
                          backgroundColor: 'var(--color-bg-surface)',
                          borderColor: errors.name ? '#ef4444' : 'var(--color-border-card)',
                          color: 'var(--color-text-main)'
                        }}
                      />
                      <p id="name-hint" className="text-[11px] text-[var(--color-text-light)] mt-1">
                        {errors.name ? (
                          <span className="text-red-500 font-medium flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.name}
                          </span>
                        ) : (
                          'Your first and last name'
                        )}
                      </p>
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold text-[var(--color-text-main)] mb-1"
                      >
                        Email Address <span className="text-red-500 font-bold">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        autoComplete="email"
                        placeholder="name@organization.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        aria-invalid={!!errors.email}
                        aria-describedby="email-hint"
                        className="w-full px-3.5 py-2.5 rounded-md border text-sm transition-colors"
                        style={{
                          backgroundColor: 'var(--color-bg-surface)',
                          borderColor: errors.email ? '#ef4444' : 'var(--color-border-card)',
                          color: 'var(--color-text-main)'
                        }}
                      />
                      <p id="email-hint" className="text-[11px] text-[var(--color-text-light)] mt-1">
                        {errors.email ? (
                          <span className="text-red-500 font-medium flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.email}
                          </span>
                        ) : (
                          'A valid reply email'
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Website */}
                    <div>
                      <label
                        htmlFor="contact-website"
                        className="block text-xs font-semibold text-[var(--color-text-main)] mb-1"
                      >
                        Website or Portfolio URL
                      </label>
                      <input
                        id="contact-website"
                        type="url"
                        placeholder="https://example.com"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        aria-invalid={!!errors.website}
                        aria-describedby="website-hint"
                        className="w-full px-3.5 py-2.5 rounded-md border text-sm transition-colors"
                        style={{
                          backgroundColor: 'var(--color-bg-surface)',
                          borderColor: errors.website ? '#ef4444' : 'var(--color-border-card)',
                          color: 'var(--color-text-main)'
                        }}
                      />
                      <p id="website-hint" className="text-[11px] text-[var(--color-text-light)] mt-1">
                        {errors.website ? (
                          <span className="text-red-500 font-medium flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.website}
                          </span>
                        ) : (
                          'Optional corporate or personal website'
                        )}
                      </p>
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-semibold text-[var(--color-text-main)] mb-1"
                      >
                        Telephone Number
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="(555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        aria-describedby="phone-hint"
                        className="w-full px-3.5 py-2.5 rounded-md border text-sm transition-colors"
                        style={{
                          backgroundColor: 'var(--color-bg-surface)',
                          borderColor: 'var(--color-border-card)',
                          color: 'var(--color-text-main)'
                        }}
                      />
                      <p id="phone-hint" className="text-[11px] text-[var(--color-text-light)] mt-1">
                        Optional phone number with area code
                      </p>
                    </div>
                  </div>

                  {/* Inquiry Topic Dropdown */}
                  <div>
                    <label
                      htmlFor="inquiry-type"
                      className="block text-xs font-semibold text-[var(--color-text-main)] mb-1"
                    >
                      Inquiry Topic <span className="text-red-500 font-bold">*</span>
                    </label>
                    <select
                      id="inquiry-type"
                      value={formData.inquiryTopic}
                      onChange={(e) => setFormData({ ...formData, inquiryTopic: e.target.value })}
                      aria-invalid={!!errors.inquiryTopic}
                      aria-describedby="topic-hint"
                      className="w-full px-3.5 py-2.5 rounded-md border text-sm transition-colors cursor-pointer"
                      style={{
                        backgroundColor: 'var(--color-bg-surface)',
                        borderColor: errors.inquiryTopic ? '#ef4444' : 'var(--color-border-card)',
                        color: 'var(--color-text-main)'
                      }}
                    >
                      <option value="" disabled>Please select a subject...</option>
                      <option value="Internship or Career Opportunity">Internship or Career Opportunity</option>
                      <option value="Academic Collaboration or Research">Academic Collaboration or Research</option>
                      <option value="Inquiry Regarding Featured Projects">Inquiry Regarding Featured Projects</option>
                      <option value="General Student Inquiry">General Student Inquiry</option>
                    </select>
                    {errors.inquiryTopic && (
                      <p id="topic-hint" className="text-[11px] text-red-500 font-medium mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.inquiryTopic}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-semibold text-[var(--color-text-main)]"
                      >
                        Message <span className="text-red-500 font-bold">*</span>
                      </label>
                      <span className="text-[11px] font-mono text-[var(--color-text-light)]">
                        {formData.message.length}/500 chars
                      </span>
                    </div>
                    <textarea
                      id="contact-message"
                      rows={5}
                      placeholder="Please include details about the role, project, or topic..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      aria-invalid={!!errors.message}
                      aria-describedby="message-hint"
                      className="w-full px-3.5 py-2.5 rounded-md border text-sm transition-colors resize-y min-h-[120px]"
                      style={{
                        backgroundColor: 'var(--color-bg-surface)',
                        borderColor: errors.message ? '#ef4444' : 'var(--color-border-card)',
                        color: 'var(--color-text-main)'
                      }}
                    />
                    <p id="message-hint" className="text-[11px] text-[var(--color-text-light)] mt-1">
                      {errors.message ? (
                        <span className="text-red-500 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.message}
                        </span>
                      ) : (
                        'Minimum 20 characters recommended'
                      )}
                    </p>
                  </div>

                  {/* Consent Checkbox */}
                  <div className="pt-2">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        id="consent-checkbox"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-1 w-4 h-4 rounded text-[var(--color-primary)] cursor-pointer"
                        style={{ accentColor: 'var(--color-primary)' }}
                      />
                      <span className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                        I confirm that this message is related to student academic or career networking, and understand this form is part of an educational course portfolio demonstration.{' '}
                        <span className="text-red-500 font-bold">*</span>
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="text-[11px] text-red-500 font-medium mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.consent}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-6 rounded-lg font-semibold text-white text-sm flex items-center justify-center gap-2 transition-all shadow hover:shadow-md hover:opacity-95 active:scale-[0.99] disabled:opacity-60"
                      style={{ backgroundColor: 'var(--color-primary)' }}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Dispatching Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Inquiry Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
