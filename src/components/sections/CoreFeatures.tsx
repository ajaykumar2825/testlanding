'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { CalendarRange, Megaphone, ClipboardList, Gauge } from 'lucide-react';
import { Container, Section } from '@/components/ui/Container';

const features = [
  {
    icon: CalendarRange,
    title: 'AI Sprint Planning',
    description: 'Plans realistic sprints from your backlog, using team capacity and past velocity.',
  },
  {
    icon: Megaphone,
    title: 'Daily Standups & Follow-ups',
    description: 'Async check-ins through chat, with follow-ups tracked until they are done.',
  },
  {
    icon: ClipboardList,
    title: 'Meeting Notes & Action Items',
    description: 'Meeting notes summarized with action items assigned to the right owner.',
  },
  {
    icon: Gauge,
    title: 'Project Health Dashboard',
    description: 'A live view of progress, blockers, and deadlines across every project.',
  },
];

export function CoreFeatures() {
  const reduce = useReducedMotion();

  return (
    <Section id="features" ariaLabelledBy="features-heading" className="py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="features-heading" className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            The AI copilot that runs your project operations
          </h2>
          <p className="mt-4 text-lg text-ink/60">
            Sprint planning, standups, meeting notes, and reporting — handled automatically.
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
