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

function isProfessionalEmail(email: string) {
  const normalized = email.trim().toLowerCase();
  const atIndex = normalized.lastIndexOf('@');
  if (atIndex <= 0 || atIndex === normalized.length - 1) return false;
  const domain = normalized.slice(atIndex + 1);
  return !FREE_EMAIL_DOMAINS.has(domain);
}

export function BrochureSignup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const showProfessionalEmailError = useMemo(
    () => hasSubmitted && !isProfessionalEmail(email),
    [email, hasSubmitted]
  );

  const showConsentError = useMemo(
    () => hasSubmitted && !consent,
    [consent, hasSubmitted]
  );

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHasSubmitted(true);

    if (!isProfessionalEmail(email) || !consent) return;

    const subject = encodeURIComponent('Agentic SDLC brochure request');
    const body = encodeURIComponent(
      `Please send the Agentic SDLC brochure to:\n${email.trim()}\n\nConsent accepted for communications from agentic-sdlc.it.`
    );
    window.location.href = `mailto:hello@agenticsdlc.com?subject=${subject}&body=${body}`;
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
                  Please enter a professional email address (no personal mailbox providers).
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

              <button type="submit" className="brochure-submit">
                Send me the brochure <span aria-hidden="true">→</span>
              </button>
            </form>
          </section>
        </div>
      ) : null}
    </>
  );
}
