'use client';

import { motion } from 'framer-motion';
import { Bot, Brain, Database, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Bot,
    title: 'Choose an AI Model',
    description: 'Select from 50+ models including GPT-4, Claude, Gemini, DeepSeek, Llama, or run local models via Ollama for complete privacy.',
  },
  {
    number: '02',
    icon: Brain,
    title: 'Give Instructions & Memory',
    description: 'Define your agent\'s personality, goals, and constraints. Enable persistent memory so it learns and improves over time.',
  },
  {
    number: '03',
    icon: Database,
    title: 'Connect Tools & Knowledge',
    description: 'Attach knowledge bases (PDFs, websites, databases) and connect 200+ integrations like Slack, GitHub, APIs, and databases.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Deploy & Monitor',
    description: 'Launch with one click. Track executions, token usage, costs, and performance in real-time analytics dashboard.',
  },
];

const supportedInputs = [
  'PDFs', 'Word Documents', 'CSV Files', 'Databases',
  'Websites', 'APIs', 'Images', 'Audio'
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-28" aria-labelledby="how-heading">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 id="how-heading" className="font-outfit font-bold text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.08] tracking-[-3px] text-black mb-4">
            Build and launch an AI agent in <br />
            <span className="text-[#0084FF]">four simple steps</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-8"
          role="list"
          aria-label="Build steps"
        >
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className="relative flex flex-col items-center text-center lg:items-start lg:text-left group"
              role="listitem"
            >
              <div className="w-16 h-16 rounded-[20px] bg-gradient-to-br from-[#0084FF] to-[#0066CC] flex items-center justify-center mb-6 shadow-[0_4px_12px_rgba(0,132,255,0.3)] group-hover:scale-110 transition-transform duration-300">
                <step.icon className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <div className="font-outfit font-black text-[48px] text-[#0084FF]/20 mb-2">{step.number}</div>
              <h3 className="font-outfit font-bold text-[24px] text-black mb-3">{step.title}</h3>
              <p className="font-sans text-[16px] text-black/60 leading-relaxed max-w-[300px]">{step.description}</p>
              
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden lg:block absolute top-8 left-[calc(50%+8px)] w-full h-0.5 bg-gradient-to-r from-[#0084FF]/30 to-transparent -z-10"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1, ease: 'easeOut' }}
                  style={{ transformOrigin: 'left center' }}
                  aria-hidden="true"
                />
              )}
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20"
        >
          <h3 className="font-outfit font-bold text-[24px] text-black text-center mb-8">Supported Inputs</h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {supportedInputs.map((input, index) => (
              <motion.span
                key={input}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                className="px-4 py-2 rounded-full bg-white/80 border border-black/10 text-black/70 font-medium text-sm"
              >
                {input}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};