'use client';

import { motion } from 'framer-motion';
import { Button, LinkButton } from '@/components/ui/Button';
import { Github, FileText, ArrowRight } from 'lucide-react';

export const FinalCTA = () => {
  return (
    <section id="get-started" className="py-20 lg:py-28" aria-labelledby="cta-heading">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 id="cta-heading" className="font-outfit font-bold text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.08] tracking-[-3px] text-black mb-6">
            Start Building AI Agents <br />
            <span className="text-[#0084FF]">Today</span>
          </h2>
          <p className="font-sans text-[18px] text-black/60 tracking-[-0.5px] leading-relaxed max-w-[700px] mx-auto">
            Create intelligent agents that can think, remember, retrieve knowledge, call tools, automate workflows, and scale with your projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          <LinkButton size="lg" variant="primary" icon="chevron" iconPosition="right" href="#get-started">
            Get Started Free
          </LinkButton>
          <LinkButton size="lg" variant="secondary" icon="file-text" iconPosition="left" href="#docs">
            Explore Documentation
          </LinkButton>
          <LinkButton size="lg" variant="ghost" icon="github" iconPosition="left" href="#github" target="_blank" rel="noopener noreferrer">
            View GitHub Repository
          </LinkButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel p-8 lg:p-12 rounded-[24px]"
          style={{
            background: 'linear-gradient(to bottom right, rgba(0,132,255,0.05), rgba(0,132,255,0.02))',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(0,132,255,0.15)',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="font-outfit font-black text-[48px] text-[#0084FF] mb-2">100%</div>
              <div className="font-sans text-[15px] text-black/60">Open Source Core</div>
            </div>
            <div className="border-x border-black/10 my-8 md:my-0">
              <div className="font-outfit font-black text-[48px] text-[#0084FF] mb-2">50+</div>
              <div className="font-sans text-[15px] text-black/60">AI Models Supported</div>
            </div>
            <div>
              <div className="font-outfit font-black text-[48px] text-[#0084FF] mb-2">200+</div>
              <div className="font-sans text-[15px] text-black/60">Integrations Ready</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};