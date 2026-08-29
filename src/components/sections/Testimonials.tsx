'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Senior ML Engineer',
    company: 'TechStart Inc.',
    content: 'AgentForge cut our AI agent development time from weeks to hours. The multi-agent orchestration is a game-changer for complex workflows.',
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'Founder & CEO',
    company: 'DataFlow Labs',
    content: 'We deployed 50+ agents in production within our first month. The local deployment option was crucial for our privacy requirements.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Data Analyst',
    company: 'FinanceCorp',
    content: 'The RAG implementation is incredible. Our agents now query 10,000+ documents instantly. Saved our team hundreds of hours monthly.',
    rating: 5,
  },
  {
    name: 'David Park',
    role: 'Product Manager',
    company: 'SaaSify',
    content: 'Building customer-facing AI features used to require a dedicated ML team. Now our PMs can prototype and deploy agents themselves.',
    rating: 5,
  },
  {
    name: 'Alex Kim',
    role: 'Student Developer',
    company: 'MIT CSAIL',
    content: 'As a student, I love that I can run everything locally for free. The template marketplace helped me build my thesis project in days.',
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28" aria-labelledby="testimonials-heading">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 id="testimonials-heading" className="font-outfit font-bold text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.08] tracking-[-3px] text-black mb-4">
            What builders say about <br />
            <span className="text-[#0084FF]">AgentForge</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label="Customer testimonials"
        >
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
              className="glass-panel p-8 rounded-[24px] hover:glass-panel-hover transition-all duration-300"
              style={{
                background: 'linear-gradient(to bottom right, rgba(255,255,255,0.75), rgba(255,255,255,0.45))',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.7)',
                boxShadow: 'inset 0 2.5px 4px rgba(255,255,255,0.8)',
              }}
              role="listitem"
            >
              <div className="flex gap-1 mb-4" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" aria-hidden="true" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-black/10 mb-4" aria-hidden="true" />
              <p className="font-sans text-[16px] text-black/70 leading-relaxed mb-6">\"{testimonial.content}\"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0084FF] to-[#0066CC] flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-outfit font-bold text-[15px] text-black">{testimonial.name}</div>
                  <div className="font-sans text-[13px] text-black/50">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};