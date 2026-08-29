'use client';

import { motion } from 'framer-motion';
import {
  Headphones,
  Search,
  Briefcase,
  Users,
  BarChart3,
  Calculator,
  Megaphone,
  Code,
  FileText,
  Mic,
  Mail,
  Share2,
} from 'lucide-react';

const agents = [
  { icon: Headphones, name: 'Customer Support Agent', description: 'Resolve tickets 24/7 with AI that understands your product and escalates to humans when needed', useCase: 'Support teams' },
  { icon: Search, name: 'Research Agent', description: 'Autonomously search, analyze, and synthesize information from web, documents, and databases', useCase: 'Research & analysis' },
  { icon: Briefcase, name: 'Sales Assistant', description: 'Qualify leads, draft personalized outreach, and prepare meeting briefs automatically', useCase: 'Sales teams' },
  { icon: Users, name: 'HR Recruitment Agent', description: 'Screen resumes, schedule interviews, and match candidates to roles with AI precision', useCase: 'HR & recruiting' },
  { icon: BarChart3, name: 'Data Analyst Agent', description: 'Query databases, generate visualizations, and deliver insights in natural language', useCase: 'Data teams' },
  { icon: Calculator, name: 'Finance Assistant', description: 'Automate expense tracking, generate reports, and flag anomalies in financial data', useCase: 'Finance teams' },
  { icon: Megaphone, name: 'Marketing Agent', description: 'Create campaigns, write copy, optimize SEO, and analyze performance across channels', useCase: 'Marketing teams' },
  { icon: Code, name: 'Coding Assistant', description: 'Write, review, and debug code across languages with context-aware suggestions', useCase: 'Developers' },
  { icon: FileText, name: 'Document Summarizer', description: 'Extract key points, action items, and insights from long documents instantly', useCase: 'Knowledge workers' },
  { icon: Mic, name: 'Voice Assistant', description: 'Natural voice interactions for hands-free productivity and accessibility', useCase: 'General productivity' },
  { icon: Mail, name: 'Email Automation Agent', description: 'Draft, categorize, prioritize, and respond to emails with contextual awareness', useCase: 'Email management' },
  { icon: Share2, name: 'Social Media Content Agent', description: 'Generate posts, schedule content, and engage audiences across platforms', useCase: 'Content creators' },
];

export const AgentsShowcase = () => {
  return (
    <section id="agents" className="py-20 lg:py-28 bg-black/2" aria-labelledby="agents-heading">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 id="agents-heading" className="font-outfit font-bold text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.08] tracking-[-3px] text-black mb-4">
            Meet the agents you can build with <br />
            <span className="text-[#0084FF]">AgentForge</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="AI agent templates"
        >
          {agents.map((agent, index) => (
            <motion.article
              key={agent.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.03 }}
              className="glass-panel p-6 rounded-[20px] hover:glass-panel-hover transition-all duration-300 group"
              style={{
                background: 'linear-gradient(to bottom right, rgba(255,255,255,0.75), rgba(255,255,255,0.45))',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.7)',
                boxShadow: 'inset 0 2.5px 4px rgba(255,255,255,0.8)',
              }}
              role="listitem"
              whileHover={{ y: -2, scale: 1.02 }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0084FF] to-[#0066CC] flex items-center justify-center mb-4 shadow-[0_4px_12px_rgba(0,132,255,0.3)] group-hover:scale-110 transition-transform duration-300">
                <agent.icon className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="font-outfit font-bold text-[20px] text-black mb-2">{agent.name}</h3>
              <p className="font-sans text-[15px] text-black/60 leading-relaxed mb-3">{agent.description}</p>
              <span className="inline-block px-3 py-1 rounded-full bg-black/5 border border-black/5 text-[12px] font-medium text-black/70">
                {agent.useCase}
              </span>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 text-center"
        >
          <a href="#templates" className="inline-flex items-center gap-2 text-[#0084FF] hover:text-[#0074E0] font-bold text-sm transition-colors">
            View all 50+ agent templates →
          </a>
        </motion.div>
      </div>
    </section>
  );
};