'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { CalendarRange, Sunrise, NotebookPen, Gauge, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Container, Section } from '@/components/ui/Container';

const agents = [
  {
    icon: CalendarRange,
    name: 'Sprint Planner',
    description: 'Plans sprints around team capacity and priorities, so the work stays realistic.',
    capability: 'Auto-drafts your plan for the next two weeks.',
  },
  {
    icon: Sunrise,
    name: 'Standup Manager',
    description: 'Runs daily check-ins through chat and turns updates into tracked follow-ups.',
    capability: 'Never chase a status update again.',
  },
  {
    icon: NotebookPen,
    name: 'Meeting Assistant',
    description: 'Takes notes, captures decisions, and files action items to the right owner.',
    capability: 'Every meeting ends with clear next steps.',
  },
  {
    icon: Gauge,
    name: 'Project Health Monitor',
    description: 'Tracks tasks, deadlines, and risks in one live view for the whole team.',
    capability: 'Flags what is at risk before it slips.',
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
              Meet your AI Project Team
            </h2>
            <p className="mt-4 text-lg text-ink/60">
              A specialist for every part of running projects — ready to jump in when you are.
            </p>
          </div>
          <Link
            href="#how-it-works"
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-blue-700"
          >
            See how it works
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
