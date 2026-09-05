import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AgentForge — Your AI Project Manager for Startup Teams',
  description: 'Automate sprint planning, standups, meeting notes, reminders, reports, and project tracking with AI.',
  keywords: [
    'AI project management',
    'sprint planning',
    'AI automation',
    'standups',
    'meeting notes',
    'project tracking',
    'startup tools',
    'remote teams',
  ],
  authors: [{ name: 'AgentForge' }],
  creator: 'AgentForge',
  publisher: 'AgentForge',
  robots: 'index, follow',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'AgentForge — Your AI Project Manager for Startup Teams',
    description: 'Automate sprint planning, standups, meeting notes, reminders, reports, and project tracking with AI.',
    type: 'website',
    locale: 'en_US',
    siteName: 'AgentForge',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AgentForge — Your AI Project Manager for Startup Teams',
    description: 'Automate sprint planning, standups, meeting notes, reminders, reports, and project tracking with AI.',
  },
};

export const viewport: Viewport = {
  themeColor: '#F8FAFC',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'AgentForge',
    applicationCategory: 'BusinessApplication',
    description: 'Automate sprint planning, standups, meeting notes, reminders, reports, and project tracking with AI.',
    operatingSystem: 'Web, Linux, macOS, Windows',
    url: 'https://agentforge.dev',
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
