import type { Metadata } from 'next';
import { Instrument_Sans, Libre_Baskerville } from 'next/font/google';
import './globals.css';

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '700'],
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
      <body className={`${libreBaskerville.variable} ${instrumentSans.variable}`}>{children}</body>
    </html>
  );
}

