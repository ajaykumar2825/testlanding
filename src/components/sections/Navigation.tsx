'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Menu, X, ChevronRight } from 'lucide-react';
import { Button, LinkButton } from '@/components/ui/Button';
import Link from 'next/link';

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#agents', label: 'AI Agents' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#integrations', label: 'Integrations' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#templates', label: 'Templates' },
];

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="fixed top-[30px] left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
        role="navigation"
        aria-label="Main navigation"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[1280px] h-12 rounded-[16px] pointer-events-auto transition-all duration-300 glass-panel"
          style={{
            background: 'linear-gradient(to bottom right, rgba(255,255,255,0.75), rgba(255,255,255,0.45))',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.7)',
            boxShadow: 'inset 0 2.5px 4px rgba(255,255,255,0.8)',
          }}
        >
          <div className="flex items-center justify-between gap-8 px-6 py-2 w-full">
            <Link href="/" className="flex items-center gap-2 text-[22px] font-fustat font-extrabold tracking-tight text-black" aria-label="AgentForge Home">
              <Bot className="w-6 h-6 text-[#0084FF]" aria-hidden="true" />
              AgentForge
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <ul className="flex items-center gap-6" role="menubar">
                {navLinks.map((link) => (
                  <li key={link.href} role="none">
                    <Link
                      href={link.href}
                      role="menuitem"
                      className="text-[14px] font-medium text-black/60 hover:text-black transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <LinkButton variant="secondary" size="sm" icon="chevron" iconPosition="right" href="#get-started">
                Get Started Free
              </LinkButton>
            </div>

            <button
              className="md:hidden p-2 rounded-lg text-black/60 hover:text-black hover:bg-black/5 transition-colors"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
            >
              <Menu className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        </motion.div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-[260px] bg-white/95 backdrop-blur-[40px] border-l border-black/10 z-50 md:hidden p-6 flex flex-col"
            role="dialog"
            aria-label="Navigation menu"
          >
            <div className="flex justify-end mb-8">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg text-black/60 hover:text-black hover:bg-black/5 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
            <nav className="flex-1">
              <ul className="space-y-4" role="menu">
                {navLinks.map((link) => (
                  <li key={link.href} role="none">
                    <Link
                      href={link.href}
                      role="menuitem"
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-[16px] font-medium text-black/80 hover:text-black transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <LinkButton variant="primary" size="md" icon="chevron" iconPosition="right" className="w-full" href="#get-started" onClick={() => setIsMenuOpen(false)}>
              Get Started Free
            </LinkButton>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};