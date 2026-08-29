'use client';

import { motion } from 'framer-motion';
import { Bot, Search, FileText, CheckCircle, Send, ArrowRight } from 'lucide-react';

const workflowSteps = [
  { icon: Bot, title: 'Planner Agent', description: 'Receives request, breaks down into tasks, and creates execution plan' },
  { icon: Search, title: 'Research Agent', description: 'Gathers information from web, documents, APIs, and knowledge bases' },
  { icon: FileText, title: 'Writer Agent', description: 'Creates content, code, reports, or deliverables based on research' },
  { icon: CheckCircle, title: 'Reviewer Agent', description: 'Validates output quality, checks accuracy, and ensures compliance' },
  { icon: Send, title: 'Execution Agent', description: 'Publishes, sends, deploys, or triggers actions based on approved output' },
];

const features = [
  'Agents share memory and context seamlessly',
  'Dynamic task delegation based on agent capabilities',
  'Parallel execution for faster completion',
  'Human approval gates at any step',
  'Automatic retry and error recovery',
  'Full observability of multi-agent interactions',
];

export const MultiAgentWorkflow = () => {
  return (
    <section id="multi-agent" className="py-20 lg:py-28 bg-black/2" aria-labelledby="multiagent-heading">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 id="multiagent-heading" className="font-outfit font-bold text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.08] tracking-[-3px] text-black mb-4">
            AI agents that <br />
            <span className="text-[#0084FF]">work together</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-16"
        >
          <div className="hidden lg:flex items-center justify-between">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="flex flex-col items-center relative z-10"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0084FF] to-[#0066CC] flex items-center justify-center mb-4 shadow-[0_4px_12px_rgba(0,132,255,0.3)]">
                  <step.icon className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
                <h3 className="font-outfit font-bold text-[16px] text-black text-center mb-1">{step.title}</h3>
                <p className="font-sans text-[13px] text-black/60 text-center max-w-[140px]">{step.description}</p>
                {index < workflowSteps.length - 1 && (
                  <motion.div
                    className="absolute top-8 left-[calc(100%+12px)] w-16 h-0.5 bg-gradient-to-r from-[#0084FF]/50 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    style={{ transformOrigin: 'left center' }}
                    aria-hidden="true"
                  />
                )}
              </motion.div>
            ))}
          </div>

          <div className="lg:hidden space-y-6">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0084FF] to-[#0066CC] flex items-center justify-center flex-shrink-0 shadow-[0_4px_12px_rgba(0,132,255,0.3)]">
                  <step.icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-outfit font-bold text-[16px] text-black">{step.title}</h3>
                  <p className="font-sans text-[14px] text-black/60 mt-1">{step.description}</p>
                </div>
                {index < workflowSteps.length - 1 && (
                  <div className="absolute left-6 top-[calc(100%+4px)] bottom-0 w-0.5 bg-gradient-to-b from-[#0084FF]/50 to-transparent -ml-3" aria-hidden="true" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Multi-agent features"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
              className="glass-panel p-6 rounded-[20px] hover:glass-panel-hover transition-all duration-300"
              style={{
                background: 'linear-gradient(to bottom right, rgba(255,255,255,0.75), rgba(255,255,255,0.45))',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.7)',
                boxShadow: 'inset 0 2.5px 4px rgba(255,255,255,0.8)',
              }}
              role="listitem"
            >
              <p className="font-sans text-[15px] text-black/70 leading-relaxed flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#0084FF]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0084FF]" aria-hidden="true" />
                </span>
                {feature}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};