'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Container, Section } from '@/components/ui/Container';

const comparisons = [
  {
    feature: 'Sprint planning',
    manual: 'Hours in spreadsheets every cycle',
    automated: 'Generated from your backlog in minutes',
  },
  {
    feature: 'Daily standups',
    manual: 'Another scheduled meeting to run',
    automated: 'Async check-ins, no calendar blocks',
  },
  { feature: 'Meeting notes', manual: 'Notes scattered across docs', automated: 'Summarized with owners assigned' },
  {
    feature: 'Status reports',
    manual: 'Friday scramble for updates',
    automated: 'Drafted and delivered automatically',
  },
  { feature: 'Risk tracking', manual: 'Manually updated, often stale', automated: 'Flagged live before things slip' },
];

export function WhyAgentForge() {
  const reduce = useReducedMotion();

  return (
    <Section id="why" ariaLabelledBy="why-heading" className="bg-white py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="why-heading" className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Stop doing these tasks manually
          </h2>
          <p className="mt-4 text-lg text-ink/60">
            The weekly project busywork that quietly eats your team&apos;s focus.
          </p>
        </div>

        <motion.div
          className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-24 border border-ink/5 bg-surface shadow-soft"
          {...(reduce
            ? {}
            : {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, margin: '-80px' },
                transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
              })}
        >
          <table className="w-full text-left" aria-label="Manual project management versus AgentForge automation">
            <thead>
              <tr className="border-b border-ink/10 bg-white">
                <th scope="col" className="px-6 py-4 text-sm font-semibold text-ink">
                  Task
                </th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-ink/60">
                  Manually
                </th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-primary">
                  With AgentForge
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, index) => (
                <tr
                  key={row.feature}
                  className={`${index !== comparisons.length - 1 ? 'border-b border-ink/5' : ''} ${index % 2 === 1 ? 'bg-white/60' : ''}`}
                >
                  <th scope="row" className="px-6 py-4 text-sm font-medium text-ink">
                    {row.feature}
                  </th>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-ink/50">
                      <X className="h-4 w-4 shrink-0 text-ink/25" aria-hidden="true" />
                      <span>{row.manual}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-primary">
                      <Check className="h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
                      <span>{row.automated}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </Container>
    </Section>
  );
}
