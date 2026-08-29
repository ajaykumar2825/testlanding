'use client';

import { motion } from 'framer-motion';
import { Shield, Server, Key, Users, FileText, Lock, Database, CheckCircle, Globe } from 'lucide-react';

const securityFeatures = [
  { icon: Server, title: 'Local AI Deployment', description: 'Run models entirely on your infrastructure with Ollama. Zero data leaves your network.' },
  { icon: Globe, title: 'Cloud Deployment', description: 'Scalable cloud hosting with auto-scaling, load balancing, and global CDN.' },
  { icon: Key, title: 'Secure API Keys', description: 'Encrypted storage, rotation policies, and scoped permissions for all credentials.' },
  { icon: Users, title: 'Role-Based Access', description: 'Granular permissions: Admin, Developer, Viewer. Team workspaces with isolation.' },
  { icon: FileText, title: 'Audit Logs', description: 'Comprehensive logging of all agent executions, config changes, and data access.' },
  { icon: Lock, title: 'Encrypted Communication', description: 'TLS 1.3 for all traffic. AES-256 encryption at rest for all stored data.' },
  { icon: Database, title: 'Workspace Isolation', description: 'Complete data separation between workspaces. No cross-contamination.' },
  { icon: Shield, title: 'Private Knowledge Bases', description: 'Your documents and embeddings never leave your controlled environment.' },
  { icon: CheckCircle, title: 'Human Approval Workflows', description: 'Mandatory human review for sensitive actions. Configurable approval chains.' },
];

export const SecurityPrivacy = () => {
  return (
    <section id="security" className="py-20 lg:py-28 bg-black/2" aria-labelledby="security-heading">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 id="security-heading" className="font-outfit font-bold text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.08] tracking-[-3px] text-black mb-4">
            Enterprise-grade security <br />
            <span className="text-[#0084FF]">with complete control</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Security features"
        >
          {securityFeatures.map((feature, index) => (
            <motion.article
              key={feature.title}
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
                <feature.icon className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="font-outfit font-bold text-[20px] text-black mb-2">{feature.title}</h3>
              <p className="font-sans text-[15px] text-black/60 leading-relaxed">{feature.description}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 glass-panel p-8 lg:p-12 rounded-[24px]"
          style={{
            background: 'linear-gradient(to bottom right, rgba(0,132,255,0.05), rgba(0,132,255,0.02))',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(0,132,255,0.15)',
          }}
        >
          <h3 className="font-outfit font-bold text-[24px] sm:text-[32px] leading-[1.1] tracking-[-2px] text-black mb-6 text-center">
            Compliance & Certifications
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="font-outfit font-black text-[32px] text-[#0084FF] mb-1">SOC 2</div>
              <div className="font-sans text-sm text-black/60">Type II Certified</div>
            </div>
            <div className="p-4">
              <div className="font-outfit font-black text-[32px] text-[#0084FF] mb-1">GDPR</div>
              <div className="font-sans text-sm text-black/60">Compliant</div>
            </div>
            <div className="p-4">
              <div className="font-outfit font-black text-[32px] text-[#0084FF] mb-1">HIPAA</div>
              <div className="font-sans text-sm text-black/60">Ready</div>
            </div>
            <div className="p-4">
              <div className="font-outfit font-black text-[32px] text-[#0084FF] mb-1">ISO 27001</div>
              <div className="font-sans text-sm text-black/60">Certified</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};