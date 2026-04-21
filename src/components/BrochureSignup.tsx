'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';

const FREE_EMAIL_DOMAINS = new Set([
  'gmail.com',
  'googlemail.com',
  'yahoo.com',
  'yahoo.fr',
  'outlook.com',
  'hotmail.com',
  'live.com',
  'msn.com',
  'icloud.com',
  'me.com',
  'aol.com',
  'proton.me',
  'protonmail.com',
  'gmx.com',
  'mail.com',
  'yandex.com',
  'qq.com',
]);

const ROLE_BASED_LOCAL_PARTS = new Set([
  'admin',
  'contact',
  'hello',
  'info',
  'marketing',
  'noreply',
  'no-reply',
  'sales',
  'support',
  'team',
]);

const PROFESSIONAL_EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

function isProfessionalEmail(email: string) {
  const normalized = email.trim().toLowerCase();
  if (!PROFESSIONAL_EMAIL_PATTERN.test(normalized)) return false;

  const [localPart, domain] = normalized.split('@');
  if (!localPart || !domain) return false;

  if (ROLE_BASED_LOCAL_PARTS.has(localPart)) return false;

  const domainParts = domain.split('.');
  if (domainParts.length < 2) return false;

  const baseDomain = domainParts.slice(-2).join('.');
  if (FREE_EMAIL_DOMAINS.has(domain) || FREE_EMAIL_DOMAINS.has(baseDomain)) return false;

  if (domainParts.some((part) => part.length < 2)) return false;

  return true;
}

export function BrochureSignup() {
  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [familyName, setFamilyName] = useState('');
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showProfessionalEmailError = useMemo(
    () => hasSubmitted && !isProfessionalEmail(email),
    [email, hasSubmitted]
  );

  const showConsentError = useMemo(
    () => hasSubmitted && !consent,
    [consent, hasSubmitted]
  );

  const showNameError = useMemo(
    () => hasSubmitted && (firstName.trim().length < 2 || familyName.trim().length < 2),
    [firstName, familyName, hasSubmitted]
  );

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHasSubmitted(true);

    if (firstName.trim().length < 2 || familyName.trim().length < 2 || !isProfessionalEmail(email) || !consent) return;

    setIsSubmitting(true);

    const payload = {
      first_name: firstName.trim(),
      family_name: familyName.trim(),
      name: `${firstName.trim()} ${familyName.trim()}`.trim(),
      email: email.trim().toLowerCase(),
      consent: true,
      source: 'agenticsdlc-homepage-brochure-modal',
      requested_at: new Date().toISOString(),
      page_url: window.location.href,
      user_agent: navigator.userAgent,
    };

    const webhookUrl = process.env.NEXT_PUBLIC_BROCHURE_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } catch {
        // Keep mailto fallback even if webhook is unavailable.
      }
    }

    const subject = encodeURIComponent('Agentic SDLC brochure request');
    const body = encodeURIComponent(
      `Please send the Agentic SDLC brochure to:\n${email.trim()}\n\nFirst name: ${firstName.trim()}\nFamily name: ${familyName.trim()}\nConsent accepted for communications from agentic-sdlc.it.`
    );
    window.location.href = `mailto:nicolas@agentic-sdlc.it?subject=${subject}&body=${body}`;
    setIsSubmitting(false);
    setIsOpen(false);
  };

  return (
    <>
      <button type="button" className="btn btn-ghost btn-brochure-trigger" onClick={() => setIsOpen(true)}>
        Send me the brochure
      </button>

      {isOpen ? (
        <div className="brochure-modal-backdrop" role="presentation" onClick={() => setIsOpen(false)}>
          <section
            className="brochure-panel brochure-modal"
            aria-labelledby="brochure-heading"
            role="dialog"
            aria-modal="true"
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" className="brochure-close" aria-label="Close brochure form" onClick={() => setIsOpen(false)}>
              ×
            </button>
            <h2 id="brochure-heading" className="brochure-title">
              Download the brochure in your inbox
            </h2>
            <p className="brochure-subtitle">
              Request it now and we&apos;ll send the latest Agentic SDLC brochure directly to your mailbox.
            </p>

            <form className="brochure-form" onSubmit={handleSubmit} noValidate>
              <label className="sr-only" htmlFor="brochure-first-name">
                First name
              </label>
              <input
                id="brochure-first-name"
                type="text"
                className="brochure-input"
                placeholder="Your first name"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                aria-invalid={showNameError}
                required
              />

              <label className="sr-only" htmlFor="brochure-family-name">
                Family name
              </label>
              <input
                id="brochure-family-name"
                type="text"
                className="brochure-input"
                placeholder="Your family name"
                value={familyName}
                onChange={(event) => setFamilyName(event.target.value)}
                aria-invalid={showNameError}
                aria-describedby={showNameError ? 'brochure-name-error' : undefined}
                required
              />
              {showNameError ? (
                <p id="brochure-name-error" className="brochure-error">
                  Please enter your first name and family name.
                </p>
              ) : null}

              <label className="sr-only" htmlFor="brochure-email">
                Professional email address
              </label>
              <input
                id="brochure-email"
                type="email"
                className="brochure-input"
                placeholder="Your professional email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                aria-invalid={showProfessionalEmailError}
                aria-describedby={showProfessionalEmailError ? 'brochure-email-error' : undefined}
                required
              />
              {showProfessionalEmailError ? (
                <p id="brochure-email-error" className="brochure-error">
                  Use your work email address (no personal/free providers or role-based aliases).
                </p>
              ) : null}

              <label className="brochure-consent">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(event) => setConsent(event.target.checked)}
                  aria-invalid={showConsentError}
                />
                <span>
                  I would like to receive communications from <strong>agentic-sdlc.it</strong> related to services, events, and updates.
                  For more information, please see our Privacy Policy.
                </span>
              </label>
              {showConsentError ? (
                <p className="brochure-error">
                  Please confirm communication consent before requesting the brochure.
                </p>
              ) : null}

              <button type="submit" className="brochure-submit" disabled={isSubmitting}>
                Send me the brochure <span aria-hidden="true">→</span>
              </button>
            </form>
          </section>
        </div>
      ) : null}
    </>
  );
}
