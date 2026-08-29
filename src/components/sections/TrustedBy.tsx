'use client';

import { motion } from 'framer-motion';

const techPartners = [
  { name: 'OpenAI', icon: 'openai' },
  { name: 'Google Gemini', icon: 'gemini' },
  { name: 'DeepSeek', icon: 'deepseek' },
  { name: 'Claude', icon: 'claude' },
  { name: 'Ollama', icon: 'ollama' },
  { name: 'FastAPI', icon: 'fastapi' },
  { name: 'Docker', icon: 'docker' },
  { name: 'GitHub', icon: 'github' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'Redis', icon: 'redis' },
  { name: 'LangChain', icon: 'langchain' },
];

const stats = [
  { label: 'AI Models Supported', value: '50+' },
  { label: 'Agent Templates', value: '100+' },
  { label: 'Integrations', value: '200+' },
  { label: 'Workflow Speed', value: '10x' },
  { label: 'Deployment Options', value: 'Local + Cloud' },
];

const TechIcon = ({ name, className = '', ...props }: { name: string; className?: string; 'aria-hidden'?: boolean }) => {
  const icons: Record<string, JSX.Element> = {
    openai: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.761.293-1.627.447-2.597.447-1.99 0-3.682-1.382-4.279-3.253h-3.14v-2.046h3.053c.128-1.23.91-2.243 2.231-2.654v-2.126c0-1.339-1.424-2.273-2.817-2.273-1.392 0-2.817.934-2.817 2.273v2.312c0 .76.22 1.37.534 1.813l-2.076 2.076c-.453-.52-.762-1.17-.762-1.887 0-1.78 1.784-3.224 3.975-3.224 2.383 0 4.222 1.632 4.573 3.657h3.228v2.234h-3.107c-.157 1.287-1.082 2.383-2.527 2.756v2.261zm-4.527-5.594c0-1.12.827-2.046 1.847-2.046 1.021 0 1.847.926 1.847 2.046v2.511c0 1.119-.826 2.045-1.847 2.045-1.02 0-1.847-.926-1.847-2.045v-2.511z"/></svg>,
    gemini: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>,
    deepseek: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5L19.5 9 12 14.5 4.5 9 12 4.5zM4.5 15l7.5 4 7.5-4v5L12 22.5 4.5 18.5v-3.5z"/></svg>,
    claude: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-9h-2V7h-2v4H9v2h2v4h2v-4h2v-2z"/></svg>,
    ollama: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><circle cx="12" cy="12" r="10"/><path d="M12 6v12M6 12h12"/></svg>,
    fastapi: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm-2 15l-6-3 6-3v6zm8-8l-6 3 6 3V9z"/></svg>,
    docker: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6 0h-4V4h4v2z"/></svg>,
    github: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>,
    postgresql: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>,
    redis: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>,
    langchain: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5L19.5 9 12 14.5 4.5 9 12 4.5zM4.5 15l7.5 4 7.5-4v5L12 22.5 4.5 18.5v-3.5z"/></svg>,
  };
  const Icon = icons[name.toLowerCase().replace(/\s+/g, '')];
  if (!Icon) return <span className={`text-sm font-medium ${className}`} {...props}>{name}</span>;
  return <span className={className} {...props}>{Icon}</span>;
};

export const TrustedBy = () => {
  return (
    <section className="py-16 lg:py-24 border-y border-black/10" aria-labelledby="trusted-heading">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 id="trusted-heading" className="font-outfit font-bold text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.1] tracking-[-2px] text-black mb-4">
            Powered by the AI ecosystem you already use
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 mb-20 opacity-60 hover:opacity-100 transition-opacity duration-300"
          role="list"
          aria-label="Technology partners"
        >
          {techPartners.map((partner, index) => (
            <motion.span
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center gap-2 text-black/50 font-medium text-sm"
              role="listitem"
            >
              <TechIcon name={partner.name} className="text-black/40" aria-hidden={true} />
              <span>{partner.name}</span>
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-5 gap-8"
          role="list"
          aria-label="Platform statistics"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              className="text-center"
              role="listitem"
            >
              <div className="font-outfit font-black text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.1] tracking-[-2px] text-black mb-2">
                {stat.value}
              </div>
              <div className="font-sans text-[14px] text-black/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};