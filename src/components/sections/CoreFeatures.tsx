'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Network, BrainCircuit, Plug, Rocket } from 'lucide-react';
import { Container, Section } from '@/components/ui/Container';

const features = [
  {
    icon: Network,
    title: 'Multi-Agent Orchestration',
    description: 'Coordinate teams of AI agents that delegate, share context, and collaborate on complex tasks.',
  },
  {
    icon: BrainCircuit,
    title: 'Long-Term Memory + RAG',
    description: 'Agents retain context across sessions and retrieve knowledge from your private sources.',
  },
  {
    icon: Plug,
    title: 'Tool Calling & Integrations',
    description: 'Connect APIs, databases, webhooks, and live services so agents act on real data.',
  },
  {
    icon: Rocket,
    title: 'Deploy Anywhere',
    description: 'Ship agents to Docker, the cloud, or your own servers with a single configuration.',
  },
];

export function CoreFeatures() {
  const reduce = useReducedMotion();

  return (
    <Section id="features" ariaLabelledBy="features-heading" className="py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="features-heading" className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Everything you need to build production agents
          </h2>
          <p className="mt-4 text-lg text-ink/60">
            One platform for the full agent lifecycle — no glue code, no vendor lock-in.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="group rounded-24 border border-ink/5 bg-white p-6 shadow-soft transition-shadow hover:shadow-card"
                {...(reduce
                  ? {}
                  : {
                      initial: { opacity: 0, y: 20 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true, margin: '-80px' },
                      transition: { duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] as const },
                    })}
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-cta">
                  <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-ink">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
