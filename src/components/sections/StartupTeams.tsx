'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Rocket, Kanban, Code2, Globe } from 'lucide-react';
import { Container, Section } from '@/components/ui/Container';

const teams = [
  {
    icon: Rocket,
    name: 'Founders',
    description: 'See project progress and risk without digging through tools yourself.',
  },
  {
    icon: Kanban,
    name: 'Project Managers',
    description: 'Offload the weekly busywork and focus on coordination that matters.',
  },
  {
    icon: Code2,
    name: 'Developers',
    description: 'Spend less time in status meetings, more time shipping.',
  },
  {
    icon: Globe,
    name: 'Remote Teams',
    description: 'Stay aligned across time zones with async updates and shared context.',
  },
];

export function StartupTeams() {
  const reduce = useReducedMotion();

  return (
    <Section id="teams" ariaLabelledBy="teams-heading" className="bg-white py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="teams-heading" className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Built for startup teams
          </h2>
          <p className="mt-4 text-lg text-ink/60">
            From first sprint to scale — sized for the way lean teams actually work.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teams.map((team, index) => {
            const Icon = team.icon;
            return (
              <motion.div
                key={team.name}
                className="rounded-24 border border-ink/5 bg-surface p-6 shadow-soft transition-shadow hover:shadow-card"
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
                <h3 className="text-lg font-semibold text-ink">{team.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{team.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
