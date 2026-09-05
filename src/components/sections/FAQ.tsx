'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Container, Section } from '@/components/ui/Container';

const faqs = [
  {
    question: 'Can I run AgentForge on my own infrastructure?',
    answer:
      'Yes. AgentForge is self-hostable and ships as a Docker image, so your data never leaves your environment when you run it locally.',
  },
  {
    question: 'Which AI models can I use?',
    answer:
      'Any model you can reach by API — or bring your own key for OpenAI. You can also run open models locally through Ollama with no usage fees.',
  },
  {
    question: 'Do agents retain memory across sessions?',
    answer:
      'Agents keep long-term memory with built-in retrieval (RAG), so they stay consistent and informed across conversations and tasks.',
  },
  {
    question: 'Can multiple agents work together?',
    answer:
      'Yes. Multi-agent orchestration is core to AgentForge — agents delegate work, share context, and complete end-to-end workflows as a team.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <Section id="faq" ariaLabelledBy="faq-heading" className="bg-surface py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="faq-heading" className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-2xl space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <div key={faq.question} className="overflow-hidden rounded-16 border border-ink/5 bg-white shadow-soft">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span className="text-base font-semibold text-ink">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 text-ink/40"
                    aria-hidden="true"
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={reduce ? undefined : { height: 'auto', opacity: 1 }}
                      exit={reduce ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-ink/60">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
