'use client';

import { motion } from 'framer-motion';
import {
  GitBranch,
  Brain,
  Database,
  Zap,
  Mic,
  Image,
  GitBranch as Workflow,
  BarChart,
  UserCheck,
  Code,
} from 'lucide-react';

const features = [
  {
    icon: GitBranch,
    title: 'Multi-Agent Orchestration',
    description: 'Create teams of AI agents that collaborate on complex tasks, delegate work, and share context seamlessly.',
  },
  {
    icon: Brain,
    title: 'Persistent Memory',
    description: 'Agents remember conversations, context, and learnings across sessions for continuous improvement.',
  },
  {
    icon: Database,
    title: 'Knowledge Base (RAG)',
    description: 'Upload PDFs, websites, documents, CSVs, and databases. Agents retrieve relevant information instantly.',
  },
  {
    icon: Zap,
    title: 'Tool Calling & Integrations',
    description: 'Connect APIs, webhooks, SQL databases, calendars, email, Slack, and 200+ integrations.',
  },
  {
    icon: Mic,
    title: 'Voice & Chat Agents',
    description: 'Build conversational assistants with text and voice interfaces for natural interactions.',
  },
  {
    icon: Image,
    title: 'Image & Document Intelligence',
    description: 'Analyze files, images, invoices, reports, and extract structured data automatically.',
  },
  {
    icon: Workflow,
    title: 'Visual Workflow Builder',
    description: 'Design complex AI workflows visually with drag-and-drop, branching, and conditional logic.',
  },
  {
    icon: BarChart,
    title: 'Analytics Dashboard',
    description: 'Monitor executions, latency, token usage, API costs, success rates, and model performance.',
  },
  {
    icon: UserCheck,
    title: 'Human Approval Steps',
    description: 'Keep humans in the loop for critical decisions with configurable approval workflows.',
  },
  {
    icon: Code,
    title: 'API & SDK Access',
    description: 'Integrate agents into your own applications with REST APIs, SDKs, and webhooks.',
  },
];

export const CoreFeatures = () => {
  return (
    <section id="features" className="py-20 lg:py-28" aria-labelledby="features-heading">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 id="features-heading" className="font-outfit font-bold text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.08] tracking-[-3px] text-black mb-4">
            Everything you need to build <br />
            <span className="text-[#0084FF]">powerful AI agents</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label="Core features"
        >
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
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
                <feature.icon className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="font-outfit font-bold text-[20px] text-black mb-2">{feature.title}</h3>
              <p className="font-sans text-[15px] text-black/60 leading-relaxed">{feature.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};