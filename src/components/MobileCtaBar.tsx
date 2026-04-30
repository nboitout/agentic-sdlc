'use client';

import { useEffect, useState } from 'react';

type Props = {
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
};

export function MobileCtaBar({ primaryLabel, primaryHref, secondaryLabel, secondaryHref }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`mobile-cta-bar${visible ? ' is-visible' : ''}`} aria-hidden={!visible}>
      <div className="mobile-cta-bar-inner">
        <a
          href={primaryHref}
          className="btn btn-primary"
          data-calendly-link="true"
          aria-label={primaryLabel}
        >
          {primaryLabel}
        </a>
        <a
          href={secondaryHref}
          className="btn btn-ghost"
          target="_blank"
          rel="noreferrer"
          aria-label={secondaryLabel}
        >
          {secondaryLabel}
        </a>
      </div>
    </div>
  );
}
