import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AgentForge - Build Intelligent AI Agents. Deploy Anywhere.',
  description: 'Build autonomous AI agents with memory, tools, workflows, and integrations from one unified platform. Create production-ready AI assistants for businesses, developers, and teams in minutes.',
  keywords: ['AI agents', 'AI automation', 'multi-agent', 'RAG', 'AI workflow', 'LLM', 'autonomous agents'],
  authors: [{ name: 'AgentForge' }],
  creator: 'AgentForge',
  publisher: 'AgentForge',
  robots: 'index, follow',
  openGraph: {
    title: 'AgentForge - Build Intelligent AI Agents. Deploy Anywhere.',
    description: 'Build autonomous AI agents with memory, tools, workflows, and integrations from one unified platform.',
    type: 'website',
    locale: 'en_US',
    siteName: 'AgentForge',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AgentForge - Build Intelligent AI Agents. Deploy Anywhere.',
    description: 'Build autonomous AI agents with memory, tools, workflows, and integrations from one unified platform.',
  },
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-white text-black antialiased">
        {children}
      </body>
    </html>
  );
}