'use client';

import { motion } from 'framer-motion';
import {
  Headphones,
  HeartPulse,
  DollarSign,
  GraduationCap,
  ShoppingBag,
  Users,
  Scale,
  Megaphone,
  Cpu,
  Rocket,
  Code,
  Building2,
} from 'lucide-react';

const useCases = [
  { icon: Headphones, title: 'Customer Support', description: 'Resolve 80% of tickets automatically with AI agents that know your product and escalate seamlessly to humans.' },
  { icon: HeartPulse, title: 'Healthcare', description: 'Automate patient intake, appointment scheduling, and medical documentation while maintaining HIPAA compliance.' },
  { icon: DollarSign, title: 'Finance', description: 'Automate expense processing, fraud detection, financial reporting, and regulatory compliance workflows.' },
  { icon: GraduationCap, title: 'Education', description: 'Create personalized tutoring agents, automate grading, and build adaptive learning experiences.' },
  { icon: ShoppingBag, title: 'E-commerce', description: 'Power product recommendations, inventory management, customer service, and personalized marketing.' },
  { icon: Users, title: 'HR', description: 'Streamline recruitment, onboarding, employee support, and performance management with AI agents.' },
  { icon: Scale, title: 'Legal', description: 'Automate contract review, legal research, document drafting, and compliance monitoring.' },
  { icon: Megaphone, title: 'Marketing', description: 'Generate content, optimize campaigns, analyze competitors, and personalize customer journeys at scale.' },
  { icon: Cpu, title: 'Operations', description: 'Automate workflow orchestration, process monitoring, incident response, and resource optimization.' },
  { icon: Rocket, title: 'Startups', description: 'Build MVPs faster, automate customer support, and scale operations without hiring large teams.' },
  { icon: Code, title: 'Developers', description: 'Code generation, code review, documentation, testing, and DevOps automation with AI agents.' },
  { icon: Building2, title: 'Enterprises', description: 'Deploy secure, compliant AI agents at scale with governance, audit trails, and SSO integration.' },
];

export const UseCases = () => {
  return (
    <section id="use-cases" className="py-20 lg:py-28" aria-labelledby="usecases-heading">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 id="usecases-heading" className="font-outfit font-bold text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.08] tracking-[-3px] text-black mb-4">
            Built for every team <br />
            <span className="text-[#0084FF]">and industry</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Use cases by industry"
        >
          {useCases.map((useCase, index) => (
            <motion.article
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.03 }}
              className="glass-panel p-6 rounded-[20px] hover:glass-panel-hover transition-all duration-300 group"
              style={{
                background: 'linear-gradient(to bottom right, rgba(255,255,255,0.75), rgba(255,255,255,0.45))',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.7)',
                boxShadow: 'inset 0 2.5px 4px rgba(255,255,255,0.8)',
              }}
              role="listitem"
              whileHover={{ y: -2, scale: 1.02 }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0084FF] to-[#0066CC] flex items-center justify-center mb-4 shadow-[0_4px_12px_rgba(0,132,255,0.3)] group-hover:scale-110 transition-transform duration-300">
                <useCase.icon className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="font-outfit font-bold text-[20px] text-black mb-2">{useCase.title}</h3>
              <p className="font-sans text-[15px] text-black/60 leading-relaxed">{useCase.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};