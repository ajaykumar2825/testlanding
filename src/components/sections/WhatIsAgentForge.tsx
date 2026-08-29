'use client';

import { motion } from 'framer-motion';
import { Bot, Database, Zap, Globe, Lock, BarChart3 } from 'lucide-react';

const features = [
  { icon: Bot, title: 'AI Models', description: 'Access 50+ models from OpenAI, Google, Anthropic, and open-source providers' },
  { icon: Database, title: 'Memory & Knowledge', description: 'Persistent memory with RAG-powered knowledge retrieval from documents and databases' },
  { icon: Zap, title: 'Tools & Workflows', description: 'Connect APIs, databases, and services with visual workflow automation' },
  { icon: Globe, title: 'Deploy Anywhere', description: 'Run locally for privacy or deploy to cloud with one-click scaling' },
  { icon: Lock, title: 'Enterprise Security', description: 'Role-based access, audit logs, encrypted communication, and workspace isolation' },
  { icon: BarChart3, title: 'Analytics & Monitoring', description: 'Real-time execution logs, token usage, costs, and performance metrics' },
];

export const WhatIsAgentForge = () => {
  return (
    <section id="what-is" className="py-20 lg:py-28" aria-labelledby="whatis-heading">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[800px] mx-auto text-center mb-20"
        >
          <h2 id="whatis-heading" className="font-outfit font-bold text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.08] tracking-[-3px] text-black mb-6">
            One Platform.<br />
            <span className="text-[#0084FF]">Unlimited AI Agents.</span>
          </h2>
          <p className="font-sans text-[18px] text-black/60 tracking-[-0.5px] leading-relaxed max-w-[600px] mx-auto">
            AgentForge is an AI agent development platform that lets users build, connect, deploy, and monitor intelligent agents from a single workspace.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label="Platform capabilities"
        >
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
              className="glass-panel p-6 rounded-[20px] hover:glass-panel-hover transition-all duration-300"
              style={{
                background: 'linear-gradient(to bottom right, rgba(255,255,255,0.75), rgba(255,255,255,0.45))',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.7)',
                boxShadow: 'inset 0 2.5px 4px rgba(255,255,255,0.8)',
              }}
              role="listitem"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0084FF] to-[#0066CC] flex items-center justify-center mb-4 shadow-[0_4px_12px_rgba(0,132,255,0.3)]">
                <feature.icon className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="font-outfit font-bold text-[20px] text-black mb-2">{feature.title}</h3>
              <p className="font-sans text-[15px] text-black/60 leading-relaxed">{feature.description}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 p-8 lg:p-12 rounded-[24px] glass-panel text-center"
          style={{
            background: 'linear-gradient(to bottom right, rgba(0,132,255,0.05), rgba(0,132,255,0.02))',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(0,132,255,0.15)',
          }}
        >
          <h3 className="font-outfit font-bold text-[28px] sm:text-[36px] leading-[1.1] tracking-[-2px] text-black mb-4">
            It combines everything you need
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3 text-black/70 font-medium text-sm">
            <span className="px-3 py-1.5 rounded-full bg-white/80 border border-black/10">AI Models</span>
            <span className="px-3 py-1.5 rounded-full bg-white/80 border border-black/10">Memory</span>
            <span className="px-3 py-1.5 rounded-full bg-white/80 border border-black/10">Knowledge Retrieval</span>
            <span className="px-3 py-1.5 rounded-full bg-white/80 border border-black/10">External Tools</span>
            <span className="px-3 py-1.5 rounded-full bg-white/80 border border-black/10">APIs</span>
            <span className="px-3 py-1.5 rounded-full bg-white/80 border border-black/10">Workflow Automation</span>
            <span className="px-3 py-1.5 rounded-full bg-white/80 border border-black/10">Analytics</span>
          </div>
          <p className="mt-6 font-sans text-[16px] text-black/60 leading-relaxed max-w-[600px] mx-auto">
            Whether you&apos;re building a chatbot, research assistant, customer support agent, automation workflow, or enterprise AI system, AgentForge provides everything needed in one platform.
          </p>
        </motion.div>
      </div>
    </section>
  );
};