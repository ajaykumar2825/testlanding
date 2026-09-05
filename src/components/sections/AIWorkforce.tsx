'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Search, BarChart3, Code2, Workflow, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Container, Section } from '@/components/ui/Container';

const agents = [
  {
    icon: Search,
    name: 'Research Agent',
    description: 'Autonomously gathers, cross-references, and synthesizes information across sources.',
    capability: 'Delivers a cited brief on any topic in minutes.',
  },
  {
    icon: BarChart3,
    name: 'Data Analyst Agent',
    description: 'Queries datasets and produces insights, charts, and summaries in plain language.',
    capability: 'Turns a raw SQL database into daily executive reports.',
  },
  {
    icon: Code2,
    name: 'Coding Agent',
    description: 'Writes, reviews, and refactors code with full repository context and tool access.',
    capability: 'Fixes failing CI builds and files a PR on its own.',
  },
  {
    icon: Workflow,
    name: 'Automation Agent',
    description: 'Runs scheduled workflows that call tools, transform data, and trigger downstream systems.',
    capability: 'Automates your entire billing reconciliation overnight.',
  },
];

export function AIWorkforce() {
  const reduce = useReducedMotion();

  return (
    <Section id="workforce" ariaLabelledBy="workforce-heading" className="bg-surface py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 id="workforce-heading" className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Meet your AI workforce
            </h2>
            <p className="mt-4 text-lg text-ink/60">
              Purpose-built agents that ship out of the box and plug straight into your stack.
            </p>
          </div>
          <Link
            href="#get-started"
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-blue-700"
          >
            Explore Agent Marketplace
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {agents.map((agent, index) => {
            const Icon = agent.icon;
            return (
              <motion.article
                key={agent.name}
                className="flex flex-col rounded-24 border border-ink/5 bg-white p-6 shadow-soft transition-shadow hover:shadow-card"
                {...(reduce
                  ? {}
                  : {
                      initial: { opacity: 0, y: 20 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true, margin: '-80px' },
                      transition: { duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] as const },
                    })}
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-ink">{agent.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{agent.description}</p>
                <p className="mt-4 border-t border-ink/5 pt-4 text-sm font-medium text-primary">{agent.capability}</p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
