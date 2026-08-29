'use client';

import { motion } from 'framer-motion';
import { Bot, Search, Headphones, Briefcase, Mail, Megaphone, BarChart3, FileText, Users, Calendar } from 'lucide-react';

const templateCategories = [
  { icon: Bot, name: 'Chatbots', count: '12 templates', description: 'Customer-facing conversational agents for support, sales, and engagement' },
  { icon: Search, name: 'Research', count: '8 templates', description: 'Deep research agents that synthesize information from multiple sources' },
  { icon: Headphones, name: 'Customer Support', count: '10 templates', description: 'Ticket resolution, FAQ automation, and escalation management agents' },
  { icon: Briefcase, name: 'Sales', count: '6 templates', description: 'Lead qualification, outreach automation, and meeting preparation agents' },
  { icon: Mail, name: 'Email Automation', count: '7 templates', description: 'Inbox management, drafting, categorization, and response agents' },
  { icon: Megaphone, name: 'Content Generation', count: '9 templates', description: 'Blog writing, social media, SEO optimization, and copywriting agents' },
  { icon: BarChart3, name: 'Data Analysis', count: '5 templates', description: 'SQL querying, visualization, reporting, and insight generation agents' },
  { icon: FileText, name: 'Resume Screening', count: '4 templates', description: 'Candidate matching, skill extraction, and interview scheduling agents' },
  { icon: Users, name: 'Project Management', count: '6 templates', description: 'Task planning, progress tracking, and team coordination agents' },
  { icon: Calendar, name: 'Meeting Assistant', count: '5 templates', description: 'Transcription, summarization, action items, and follow-up agents' },
];

export const AgentTemplates = () => {
  return (
    <section id="templates" className="py-20 lg:py-28" aria-labelledby="templates-heading">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 id="templates-heading" className="font-outfit font-bold text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.08] tracking-[-3px] text-black mb-4">
            Start with ready-made <br />
            <span className="text-[#0084FF]">AI agent templates</span>
          </h2>
          <p className="font-sans text-[18px] text-black/60 tracking-[-0.5px] leading-relaxed max-w-[600px] mx-auto">
            Choose a template and customize it instead of building from scratch. 80+ production-ready templates across 10 categories.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          role="list"
          aria-label="Template categories"
        >
          {templateCategories.map((category, index) => (
            <motion.article
              key={category.name}
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
                <category.icon className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-outfit font-bold text-[20px] text-black">{category.name}</h3>
                <span className="px-2 py-1 rounded-full bg-black/5 text-[12px] font-medium text-black/60">{category.count}</span>
              </div>
              <p className="font-sans text-[14px] text-black/60 leading-relaxed">{category.description}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel p-8 lg:p-12 rounded-[24px] text-center"
          style={{
            background: 'linear-gradient(to bottom right, rgba(0,132,255,0.05), rgba(0,132,255,0.02))',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(0,132,255,0.15)',
          }}
        >
          <h3 className="font-outfit font-bold text-[24px] sm:text-[32px] leading-[1.1] tracking-[-2px] text-black mb-4">
            Browse the full template marketplace
          </h3>
          <p className="font-sans text-[16px] text-black/60 leading-relaxed max-w-[600px] mx-auto mb-6">
            Filter by category, use case, or complexity. Each template includes pre-configured models, tools, and workflows.
          </p>
          <a href="#templates" className="inline-flex items-center gap-2 bg-[#0084FF] text-white px-6 py-3 rounded-[16px] font-bold text-sm hover:bg-[#0074E0] transition-colors shadow-[inset_0px_4px_4px_0px_rgba(255,255,255,0.35),_0_10px_25px_-5px_rgba(0,132,255,0.25)]">
            Explore Templates
          </a>
        </motion.div>
      </div>
    </section>
  );
};