'use client';

import { motion } from 'framer-motion';
import { Plus, Upload, Link2, Play, Terminal, BarChart3, Users as UsersIcon } from 'lucide-react';

const demoSteps = [
  { icon: Plus, title: 'Create an AI Agent', description: 'Define name, instructions, model, and memory settings in minutes' },
  { icon: Upload, title: 'Upload Knowledge', description: 'Add PDFs, websites, documents, and databases to your agent\'s knowledge base' },
  { icon: Link2, title: 'Connect Tools', description: 'Link APIs, webhooks, databases, Slack, GitHub, and 200+ integrations' },
  { icon: Play, title: 'Run Workflows', description: 'Execute multi-step workflows with branching, conditions, and parallel execution' },
  { icon: Terminal, title: 'View Execution Logs', description: 'Debug every step with detailed logs, token usage, and latency metrics' },
  { icon: BarChart3, title: 'Monitor Analytics', description: 'Track performance, costs, success rates, and model comparison dashboards' },
  { icon: UsersIcon, title: 'Manage Multiple Agents', description: 'Orchestrate teams of agents with shared memory and task delegation' },
];

export const ProductDemo = () => {
  return (
    <section id="demo" className="py-20 lg:py-28 bg-black/2" aria-labelledby="demo-heading">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 id="demo-heading" className="font-outfit font-bold text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.08] tracking-[-3px] text-black mb-4">
            See AgentForge <br />
            <span className="text-[#0084FF]">in action</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          role="list"
          aria-label="Product demo steps"
        >
          {demoSteps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
              className="glass-panel p-6 rounded-[20px] hover:glass-panel-hover transition-all duration-300 group text-center"
              style={{
                background: 'linear-gradient(to bottom right, rgba(255,255,255,0.75), rgba(255,255,255,0.45))',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.7)',
                boxShadow: 'inset 0 2.5px 4px rgba(255,255,255,0.8)',
              }}
              role="listitem"
              whileHover={{ y: -2, scale: 1.02 }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0084FF] to-[#0066CC] flex items-center justify-center mx-auto mb-4 shadow-[0_4px_12px_rgba(0,132,255,0.3)] group-hover:scale-110 transition-transform duration-300">
                <step.icon className="w-7 h-7 text-white" aria-hidden="true" />
              </div>
              <h3 className="font-outfit font-bold text-[18px] text-black mb-2">{step.title}</h3>
              <p className="font-sans text-[14px] text-black/60 leading-relaxed">{step.description}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[24px] overflow-hidden glass-panel"
          style={{
            background: 'linear-gradient(to bottom right, rgba(0,0,0,0.03), rgba(0,0,0,0.01))',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(0,0,0,0.1)',
          }}
        >
          <div className="aspect-video bg-black/5 flex items-center justify-center relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg border border-black/10 group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-[#0084FF] ml-1" aria-hidden="true" />
              </div>
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
              <p className="font-sans text-white/80 text-sm">Click to watch full demo</p>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      </div>
    </section>
  );
};