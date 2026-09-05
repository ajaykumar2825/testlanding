import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AgentForge — Build AI Employees That Work Together',
  description:
    'Build, deploy, and manage autonomous AI agents with memory, workflows, RAG, integrations, and local or cloud LLMs.',
  keywords: ['AI agents', 'AI automation', 'multi-agent', 'RAG', 'LLM', 'autonomous agents', 'enterprise AI'],
  authors: [{ name: 'AgentForge' }],
  creator: 'AgentForge',
  publisher: 'AgentForge',
  robots: 'index, follow',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'AgentForge — Build AI Employees That Work Together',
    description:
      'Build, deploy, and manage autonomous AI agents with memory, workflows, RAG, integrations, and local or cloud LLMs.',
    type: 'website',
    locale: 'en_US',
    siteName: 'AgentForge',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AgentForge — Build AI Employees That Work Together',
    description:
      'Build, deploy, and manage autonomous AI agents with memory, workflows, RAG, integrations, and local or cloud LLMs.',
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
    description:
      'Build, deploy, and manage autonomous AI agents with memory, workflows, RAG, integrations, and local or cloud LLMs.',
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
