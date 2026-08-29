'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const comparisons = [
  { feature: 'Multiple AI Providers', agentforge: true, others: 'Limited' },
  { feature: 'Multi-Agent Collaboration', agentforge: true, others: 'Rare' },
  { feature: 'Built-in RAG', agentforge: true, others: 'Add-on' },
  { feature: 'Local + Cloud Deployment', agentforge: true, others: 'Cloud only' },
  { feature: 'Visual Workflow Builder', agentforge: true, others: 'Code only' },
  { feature: 'Open APIs & SDKs', agentforge: true, others: 'Limited' },
  { feature: 'Monitoring Dashboard', agentforge: true, others: 'Basic' },
  { feature: '200+ Tool Integrations', agentforge: true, others: '~50' },
  { feature: 'Persistent Memory', agentforge: true, others: 'Session only' },
  { feature: 'Production-Ready Deployment', agentforge: true, others: 'Manual' },
];

export const WhyChooseAgentForge = () => {
  return (
    <section id="why-choose" className="py-20 lg:py-28 bg-black/2" aria-labelledby="why-heading">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 id="why-heading" className="font-outfit font-bold text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.08] tracking-[-3px] text-black mb-4">
            Why teams choose AgentForge <br />
            <span className="text-[#0084FF]">over traditional AI tools</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-x-auto"
        >
          <table className="w-full text-left" role="table">
            <thead>
              <tr className="border-b border-black/10">
                <th className="pb-4 font-outfit font-bold text-[18px] text-black">Capability</th>
                <th className="pb-4 px-6 font-outfit font-bold text-[18px] text-black text-center">AgentForge</th>
                <th className="pb-4 px-6 font-outfit font-bold text-[18px] text-black text-center">Other Platforms</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((comp, index) => (
                <motion.tr
                  key={comp.feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.03 }}
                  className="border-b border-black/5 hover:bg-black/2 transition-colors"
                >
                  <td className="py-4 font-sans text-[15px] text-black/80 font-medium">{comp.feature}</td>
                  <td className="py-4 px-6 text-center">
                    <div className="inline-flex items-center justify-center gap-2 text-[#0084FF] font-bold">
                      <Check className="w-5 h-5" aria-hidden="true" />
                      Yes
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center text-black/50 font-medium">{comp.others}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};