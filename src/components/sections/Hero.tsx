'use client';

import { motion } from 'framer-motion';
import { FloatingBadge } from '@/components/ui/FloatingBadge';
import { AvatarGroup } from '@/components/ui/AvatarGroup';
import { Button, LinkButton } from '@/components/ui/Button';

const avatars = [
  { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face', alt: 'User 1' },
  { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face', alt: 'User 2' },
  { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face', alt: 'User 3' },
  { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face', alt: 'User 4' },
];

const highlights = [
  'No-code + developer-friendly AI agent builder',
  'Supports local and cloud AI models',
  'Multi-agent orchestration',
  'Built-in RAG knowledge base',
  'One-click deployment',
];

export const Hero = () => {
  return (
    <section className="relative w-full max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-20 pt-[80px] md:pt-[80px] pb-20 lg:pb-28" aria-labelledby="hero-heading">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="hero-gradient-1 absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full blur-[120px]" aria-hidden="true" />
        <div className="hero-gradient-2 absolute top-[10%] right-[5%] w-[400px] h-[400px] rounded-full blur-[120px]" aria-hidden="true" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        <div className="lg:col-span-5 flex flex-col justify-center items-start text-left max-w-[620px] lg:pr-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <div className="px-3 py-1.5 rounded-full bg-black/5 border border-black/5 flex items-center gap-3 w-fit shadow-xs">
              <AvatarGroup avatars={avatars} />
              <span className="text-[12px] text-black/80 font-sans">
                Trusted by <span className="font-bold text-neutral-900">10,000+ users</span> worldwide
              </span>
            </div>

            <h1
              id="hero-heading"
              className="font-outfit font-black text-[36px] sm:text-[44px] lg:text-[60px] leading-[1.08] tracking-[-3px] mt-6 select-none text-black text-balance"
            >
              Forge Intelligent AI Agents.<br />
              <span className="text-[#0084FF]">Deploy Them Anywhere.</span>
            </h1>

            <p className="font-sans text-[18px] text-black/60 tracking-[-0.5px] leading-relaxed mt-5 max-w-[480px]">
              Build autonomous AI agents with memory, tools, workflows, and integrations from one unified platform. Create production-ready AI assistants for businesses, developers, and teams in minutes.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <LinkButton
                size="md"
                variant="primary"
                icon="chevron"
                iconPosition="right"
                href="#get-started"
              >
                Get Started Free
              </LinkButton>
              <LinkButton variant="demo" size="sm" icon="play" iconPosition="left" href="#demo">
                Watch Live Demo
              </LinkButton>
            </div>

            <div className="mt-10 flex flex-wrap gap-3" role="list" aria-label="Key highlights">
              {highlights.map((highlight, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="px-3 py-1.5 rounded-full bg-black/5 border border-black/5 text-[12px] font-medium text-black/70 whitespace-nowrap"
                  role="listitem"
                >
                  {highlight}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-7 relative w-full flex items-center justify-center lg:justify-end py-10 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[600px]"
          >
            <div className="absolute top-[30%] left-[20%] w-[420px] h-[420px] bg-sky-400/15 rounded-full blur-[110px] -z-10 animate-pulse-slow" aria-hidden="true" />

            <svg
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[52%] w-[620px] h-[620px] -z-10 opacity-35"
              viewBox="0 0 620 620"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="310" cy="310" r="280" stroke="url(#orbitalGradient1)" strokeWidth="1.5" strokeDasharray="8 12" />
              <circle cx="310" cy="310" r="220" stroke="url(#orbitalGradient2)" strokeWidth="1" strokeDasharray="4 8" />
              <circle cx="310" cy="310" r="160" stroke="url(#orbitalGradient1)" strokeWidth="0.5" strokeDasharray="2 6" />
              <defs>
                <linearGradient id="orbitalGradient1" x1="0" y1="0" x2="620" y2="620">
                  <stop offset="0%" stopColor="#60B1FF" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#319AFF" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="orbitalGradient2" x1="620" y1="0" x2="0" y2="620">
                  <stop offset="0%" stopColor="#319AFF" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#60B1FF" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>

            <div className="relative z-10">
              <video
                src="https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_robo_video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto max-w-[600px] rounded-[24px] select-none block"
                style={{ filter: 'brightness(1.02) contrast(1.04)' }}
                aria-label="AgentForge AI agent demonstration"
                poster="https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_robo_poster.jpg"
              />
            </div>

            <FloatingBadge variant="email" className="absolute top-[18%] -right-4 sm:-right-10 md:-right-14" animate />
            <FloatingBadge variant="summarize" className="absolute top-[48%] -left-6 sm:-left-12 md:-left-16" animate />
            <FloatingBadge variant="todo" className="absolute bottom-[18%] -right-4 sm:-right-8 md:-right-12" animate />
          </motion.div>
        </div>
      </div>
    </section>
  );
};