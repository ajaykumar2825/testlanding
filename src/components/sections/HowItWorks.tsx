'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Cpu, Hammer, Rocket } from 'lucide-react';
import { Container, Section } from '@/components/ui/Container';

const steps = [
  {
    icon: Cpu,
    title: 'Choose Your AI Model',
    description: 'Pick a cloud model or run a local one with Ollama. Bring your own API keys.',
  },
  {
    icon: Hammer,
    title: 'Build Your Agent',
    description: 'Deploy your agent with tools, memory, and a knowledge base. Test any workflow instantly.',
  },
  {
    icon: Rocket,
    title: 'Deploy & Monitor',
    description: 'Ship to the cloud or your own infrastructure and watch live execution, usage, and cost.',
  },
];

export function HowItWorks() {
  const reduce = useReducedMotion();

  return (
    <Section id="how-it-works" ariaLabelledBy="how-heading" className="bg-white py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="how-heading" className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            From model to deployed agent in three steps
          </h2>
          <p className="mt-4 text-lg text-ink/60">No scaffolds. No boilerplate. Just config and go.</p>
        </div>

        <ol className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.li
                key={step.title}
                className="flex flex-col items-start"
                {...(reduce
                  ? {}
                  : {
                      initial: { opacity: 0, y: 20 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true, margin: '-80px' },
                      transition: { duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] as const },
                    })}
              >
                <div className="mb-4 inline-flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold tracking-wide text-primary/70">Step {index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{step.description}</p>
              </motion.li>
            );
          })}
        </ol>

        <motion.div
          className="mt-20"
          {...(reduce
            ? {}
            : {
                initial: { opacity: 0, y: 24 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, margin: '-80px' },
                transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
              })}
        >
          <DashboardPreview />
        </motion.div>
      </Container>
    </Section>
  );
}

function DashboardPreview() {
  return (
    <div
      className="overflow-hidden rounded-24 border border-ink/5 bg-surface shadow-card"
      role="img"
      aria-label="AgentForge monitoring dashboard preview"
    >
      <div className="flex items-center gap-2 border-b border-ink/5 bg-white px-5 py-3">
        <span className="h-3 w-3 rounded-full bg-ink/10" />
        <span className="h-3 w-3 rounded-full bg-ink/10" />
        <span className="h-3 w-3 rounded-full bg-ink/10" />
        <span className="ml-4 text-xs font-medium text-ink/50">agentforge.dev — Agent Console</span>
      </div>
      <div className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-3">
        <div className="rounded-16 border border-ink/5 bg-white p-4">
          <p className="text-xs font-medium text-ink/50">Active Agents</p>
          <p className="mt-1 text-2xl font-bold text-ink">24</p>
          <div className="mt-3 flex h-1.5 overflow-hidden rounded-full bg-ink/5">
            <div className="h-full w-2/3 rounded-full bg-primary" />
          </div>
        </div>
        <div className="rounded-16 border border-ink/5 bg-white p-4">
          <p className="text-xs font-medium text-ink/50">Executions Today</p>
          <p className="mt-1 text-2xl font-bold text-ink">4,182</p>
          <div className="mt-3 flex h-1.5 overflow-hidden rounded-full bg-ink/5">
            <div className="h-full w-4/5 rounded-full bg-accent" />
          </div>
        </div>
        <div className="rounded-16 border border-ink/5 bg-white p-4">
          <p className="text-xs font-medium text-ink/50">Avg. Latency</p>
          <p className="mt-1 text-2xl font-bold text-ink">320ms</p>
          <div className="mt-3 flex h-1.5 overflow-hidden rounded-full bg-ink/5">
            <div className="h-full w-1/2 rounded-full bg-emerald-400" />
          </div>
        </div>
      </div>
      <div className="px-5 pb-5">
        <div className="rounded-16 border border-ink/5 bg-white p-4">
          <p className="mb-4 text-xs font-medium text-ink/50">Execution Stream</p>
          <div className="space-y-3">
            <div className="h-2.5 w-3/4 rounded-full bg-ink/5" />
            <div className="h-2.5 w-full rounded-full bg-ink/5" />
            <div className="h-2.5 w-2/3 rounded-full bg-primary/20" />
            <div className="h-2.5 w-5/6 rounded-full bg-ink/5" />
          </div>
        </div>
      </div>
    </div>
  );
}
