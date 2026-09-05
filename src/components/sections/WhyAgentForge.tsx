'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Container, Section } from '@/components/ui/Container';

const comparisons = [
  { feature: 'Multi-Agent', agentforge: true, others: false },
  { feature: 'Local + Cloud Models', agentforge: true, others: false },
  { feature: 'Bring Your Own LLM', agentforge: true, others: false },
  { feature: 'Memory + RAG', agentforge: true, others: false },
  { feature: 'Docker Deployment', agentforge: true, others: false },
];

export function WhyAgentForge() {
  const reduce = useReducedMotion();

  return (
    <Section id="why" ariaLabelledBy="why-heading" className="bg-white py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="why-heading" className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Why teams choose AgentForge
          </h2>
          <p className="mt-4 text-lg text-ink/60">The capabilities that matter most — built in, not bolted on.</p>
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
          <table className="w-full text-left" aria-label="AgentForge capability comparison">
            <thead>
              <tr className="border-b border-ink/10 bg-white">
                <th scope="col" className="px-6 py-4 text-sm font-semibold text-ink">
                  Capability
                </th>
                <th scope="col" className="px-6 py-4 text-center text-sm font-semibold text-primary">
                  AgentForge
                </th>
                <th scope="col" className="px-6 py-4 text-center text-sm font-semibold text-ink/50">
                  Others
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
                  <td className="px-6 py-4 text-center">
                    <Check className="mx-auto h-5 w-5 text-emerald-500" aria-label="Included" aria-hidden="true" />
                    <span className="sr-only">Included</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <X className="mx-auto h-5 w-5 text-ink/25" aria-label="Not included" aria-hidden="true" />
                    <span className="sr-only">Not included</span>
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
