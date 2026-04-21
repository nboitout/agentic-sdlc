import type { Metadata } from 'next';
import { Instrument_Sans, Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Agentic SDLC | AI-Enabled Software Delivery Transformation',
  description:
    'Agentic SDLC is a consulting boutique bridging executive strategy and engineering delivery for AI-enabled software delivery transformation.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        {/* Material Symbols Outlined — used for icon tiles across the site */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${manrope.variable} ${instrumentSans.variable}`}>{children}</body>
    </html>
  );
}
