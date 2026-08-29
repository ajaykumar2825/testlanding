'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What is AgentForge?',
    answer: 'AgentForge is an AI agent development platform that lets you build, connect, deploy, and monitor intelligent agents from a single workspace. It combines AI models, memory, knowledge retrieval (RAG), external tools, APIs, workflow automation, and analytics.',
  },
  {
    question: 'Do I need coding experience to use AgentForge?',
    answer: 'No! AgentForge offers a no-code visual builder for creating agents and workflows. Developers can also use our APIs and SDKs for custom integrations. It\'s designed for both technical and non-technical users.',
  },
  {
    question: 'Can I use my own AI API keys?',
    answer: 'Yes, you can bring your own API keys for OpenAI, Anthropic, Google, and other providers. AgentForge securely encrypts and manages your credentials. You only pay the provider directly for usage.',
  },
  {
    question: 'Does AgentForge support local AI models?',
    answer: 'Absolutely. AgentForge integrates with Ollama for running models locally (Llama, Mistral, Qwen, CodeLlama, etc.). This gives you complete privacy, zero API costs, and offline capability.',
  },
  {
    question: 'Can I upload PDFs and documents to AgentForge?',
    answer: 'Yes. AgentForge includes a built-in RAG (Retrieval-Augmented Generation) system. Upload PDFs, Word docs, CSVs, text files, websites, and databases. Agents automatically retrieve relevant context.',
  },
  {
    question: 'What is RAG in AgentForge?',
    answer: 'RAG (Retrieval-Augmented Generation) allows agents to search your uploaded knowledge bases and use that information to answer questions. It chunks, embeds, and indexes your documents for semantic search.',
  },
  {
    question: 'Can multiple agents collaborate on tasks?',
    answer: 'Yes! Multi-agent orchestration is a core feature. Create teams of agents with different roles (planner, researcher, writer, reviewer) that share memory, delegate tasks, and work together on complex workflows.',
  },
  {
    question: 'Which integrations are supported?',
    answer: '200+ integrations including Slack, Discord, GitHub, GitLab, Notion, Google Drive, PostgreSQL, MySQL, Redis, Stripe, Zapier, REST APIs, GraphQL, webhooks, and custom connectors.',
  },
  {
    question: 'Is AgentForge open source?',
    answer: 'AgentForge core is available on GitHub under a permissive license. The cloud platform and enterprise features are commercial. You can self-host the open-source version on your own infrastructure.',
  },
  {
    question: 'Can I deploy agents to my own server?',
    answer: 'Yes. AgentForge supports one-click deployment to Docker, Kubernetes, AWS, GCP, Azure, Vercel, or any cloud. You can also run the entire platform on-premises for complete data sovereignty.',
  },
  {
    question: 'Does AgentForge have an API?',
    answer: 'Yes, comprehensive REST APIs and SDKs (TypeScript, Python) let you integrate agents into your own applications, trigger workflows programmatically, and build custom interfaces.',
  },
  {
    question: 'Is my data private and secure?',
    answer: 'Yes. Data is encrypted in transit (TLS 1.3) and at rest (AES-256). Workspaces are isolated. With local deployment, zero data leaves your network. SOC 2 Type II, GDPR, HIPAA-ready, ISO 27001 certified.',
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-black/2" aria-labelledby="faq-heading">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 id="faq-heading" className="font-outfit font-bold text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.08] tracking-[-3px] text-black mb-4">
            Frequently Asked <br />
            <span className="text-[#0084FF]">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[800px] mx-auto space-y-4"
          role="list"
          aria-label="FAQ items"
        >
          {faqs.map((faq, index) => (
            <motion.article
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.03 }}
              className="glass-panel rounded-[20px] overflow-hidden"
              style={{
                background: 'linear-gradient(to bottom right, rgba(255,255,255,0.75), rgba(255,255,255,0.45))',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.7)',
                boxShadow: 'inset 0 2.5px 4px rgba(255,255,255,0.8)',
              }}
              role="listitem"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-[#0084FF] focus:ring-offset-2"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-outfit font-bold text-[18px] text-black pr-10">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 text-black/50"
                  aria-hidden="true"
                >
                  {openIndex === index ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="px-6 pb-6"
                  >
                    <p className="font-sans text-[16px] text-black/60 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};