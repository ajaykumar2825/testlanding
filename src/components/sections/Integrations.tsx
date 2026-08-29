'use client';

import { motion } from 'framer-motion';
import {
  Github,
  MessageSquare,
  Mail,
  Database,
  HardDrive,
  Server,
  Zap,
  Code,
  DollarSign,
  Globe,
} from 'lucide-react';

const integrationCategories = [
  { name: 'Communication', icon: MessageSquare, items: ['Slack', 'Discord', 'Microsoft Teams', 'Gmail', 'Outlook'] },
  { name: 'Development', icon: Github, items: ['GitHub', 'GitLab', 'Bitbucket', 'VS Code', 'Jira', 'Linear'] },
  { name: 'Data & Storage', icon: Database, items: ['PostgreSQL', 'MySQL', 'Redis', 'Supabase', 'MongoDB', 'Google Drive', 'Notion'] },
  { name: 'APIs & Automation', icon: Zap, items: ['REST APIs', 'GraphQL', 'Webhooks', 'Zapier', 'Make', 'n8n'] },
  { name: 'Infrastructure', icon: Server, items: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'Azure', 'Vercel'] },
  { name: 'Business', icon: DollarSign, items: ['Stripe', 'HubSpot', 'Salesforce', 'Airtable', 'QuickBooks'] },
];

export const Integrations = () => {
  return (
    <section id="integrations" className="py-20 lg:py-28" aria-labelledby="integrations-heading">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 id="integrations-heading" className="font-outfit font-bold text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.08] tracking-[-3px] text-black mb-4">
            Connect AgentForge with <br />
            <span className="text-[#0084FF]">your favorite tools</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          role="list"
          aria-label="Integration categories"
        >
          {integrationCategories.map((category, index) => (
            <motion.article
              key={category.name}
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
                <category.icon className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="font-outfit font-bold text-[20px] text-black mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                    className="px-3 py-1.5 rounded-full bg-black/5 border border-black/5 text-[12px] font-medium text-black/70"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
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
            Allow agents to read, write, trigger, and automate
          </h3>
          <p className="font-sans text-[16px] text-black/60 leading-relaxed max-w-[600px] mx-auto mb-6">
            Build custom integrations with our API and SDK. Connect any service with webhooks, REST APIs, or GraphQL endpoints.
          </p>
          <a href="#docs" className="inline-flex items-center gap-2 bg-[#0084FF] text-white px-6 py-3 rounded-[16px] font-bold text-sm hover:bg-[#0074E0] transition-colors shadow-[inset_0px_4px_4px_0px_rgba(255,255,255,0.35),_0_10px_25px_-5px_rgba(0,132,255,0.25)]">
            View API Docs
          </a>
        </motion.div>
      </div>
    </section>
  );
};