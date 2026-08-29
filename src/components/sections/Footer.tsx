'use client';

import { motion } from 'framer-motion';
import { Bot, Github, MessageSquare, Twitter, Linkedin, Mail } from 'lucide-react';

const footerLinks = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'AI Agents', href: '#agents' },
    { label: 'Workflow Builder', href: '#how-it-works' },
    { label: 'Integrations', href: '#integrations' },
    { label: 'Analytics', href: '#analytics' },
    { label: 'Security', href: '#security' },
  ],
  resources: [
    { label: 'Documentation', href: '#docs' },
    { label: 'API Reference', href: '#api' },
    { label: 'Blog', href: '#blog' },
    { label: 'Tutorials', href: '#tutorials' },
    { label: 'Changelog', href: '#changelog' },
  ],
  community: [
    { label: 'GitHub', href: '#github', icon: Github, external: true },
    { label: 'Discord', href: '#discord', icon: MessageSquare, external: true },
    { label: 'X (Twitter)', href: '#twitter', icon: Twitter, external: true },
    { label: 'LinkedIn', href: '#linkedin', icon: Linkedin, external: true },
  ],
  company: [
    { label: 'About', href: '#about' },
    { label: 'Careers', href: '#careers' },
    { label: 'Contact', href: '#contact' },
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
  ],
};

export const Footer = () => {
  return (
    <footer className="border-t border-black/10 bg-white" role="contentinfo">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-20 py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16 mb-16"
        >
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 font-fustat font-extrabold text-[22px] text-black mb-4">
              <Bot className="w-6 h-6 text-[#0084FF]" aria-hidden="true" />
              AgentForge
            </div>
            <p className="font-sans text-[15px] text-black/60 leading-relaxed mb-6 max-w-[280px]">
              Build intelligent AI agents with memory, tools, and workflows. Deploy anywhere — local or cloud.
            </p>
            <div className="flex items-center gap-4">
              <a href="#github" className="text-black/50 hover:text-black transition-colors" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="#discord" className="text-black/50 hover:text-black transition-colors" aria-label="Discord" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="#twitter" className="text-black/50 hover:text-black transition-colors" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="#linkedin" className="text-black/50 hover:text-black transition-colors" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="#email" className="text-black/50 hover:text-black transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav aria-label="Product links">
            <h3 className="font-outfit font-bold text-[16px] text-black mb-4">Product</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-sans text-[15px] text-black/60 hover:text-black transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Resource links">
            <h3 className="font-outfit font-bold text-[16px] text-black mb-4">Resources</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-sans text-[15px] text-black/60 hover:text-black transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Community links">
            <h3 className="font-outfit font-bold text-[16px] text-black mb-4">Community</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 font-sans text-[15px] text-black/60 hover:text-black transition-colors"
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                  >
                    {link.icon && <link.icon className="w-4 h-4" aria-hidden="true" />}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company links">
            <h3 className="font-outfit font-bold text-[16px] text-black mb-4">Company</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-sans text-[15px] text-black/60 hover:text-black transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="pt-8 border-t border-black/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="font-sans text-[14px] text-black/50">
            © {new Date().getFullYear()} AgentForge. All rights reserved.
          </p>
          <p className="font-sans text-[14px] text-black/50">
            Built with AgentForge AI agents
          </p>
        </motion.div>
      </div>
    </footer>
  );
};