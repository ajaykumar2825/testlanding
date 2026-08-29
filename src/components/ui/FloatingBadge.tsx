'use client';

import { forwardRef } from 'react';
import { PenLine, FileText, Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface BadgeProps {
  variant?: 'email' | 'summarize' | 'todo';
  animate?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const badgeConfig = {
  email: {
    icon: PenLine,
    iconColor: 'from-[#0084FF] to-[#0066CC]',
    shadow: 'shadow-badge-blue',
    ringColor: 'ring-[#0084FF]/20',
    primaryText: 'Write an email',
    secondaryText: 'for meeting',
  },
  summarize: {
    icon: FileText,
    iconColor: 'from-[#10B981] to-[#059669]',
    shadow: 'shadow-badge-green',
    ringColor: 'ring-[#10B981]/20',
    primaryText: 'Summarize',
    secondaryText: 'this document',
  },
  todo: {
    icon: Check,
    iconColor: 'from-[#9333EA] to-[#7E22CE]',
    shadow: 'shadow-badge-purple',
    ringColor: 'ring-[#9333EA]/20',
    primaryText: 'Create a to-do list',
    secondaryText: 'for today',
  },
};

export const FloatingBadge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ variant = 'email', animate = true, className = '', style, ...props }, ref) => {
    const config = badgeConfig[variant];
    const Icon = config.icon;

    return (
      <motion.div
        ref={ref}
        className={`
          glass-panel pointer-events-auto px-5 py-3 rounded-[20px] flex items-center gap-3
          border border-white/70 ring-1 ring-black/5
          backdrop-blur-[20px] shadow-[inset_0_2.5px_4px_rgba(255,255,255,0.8)]
          ${config.shadow} ${config.ringColor} ${className}
        `}
        style={style}
        animate={animate ? {
          y: variant === 'email' ? [-8, 8, -8] : variant === 'summarize' ? [8, -8, 8] : [-10, 10, -10],
          x: variant === 'email' ? [2, -2, 2] : variant === 'summarize' ? [-2, 2, -2] : [-1, 1, -1],
          rotate: variant === 'email' ? [0, 1, 0] : variant === 'summarize' ? [0, -1, 0] : [0, 1.5, 0],
          transition: {
            duration: variant === 'email' ? 5 : variant === 'summarize' ? 5.5 : 4.8,
            ease: 'easeInOut',
            repeat: Infinity,
          }
        } : {}}
        whileHover={{ scale: 1.05, rotate: variant === 'email' ? 1 : variant === 'summarize' ? -1 : 1.5 }}
        {...props}
      >
        <div className={`
          w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0
          bg-gradient-to-br ${config.iconColor}
          ${variant === 'email' ? 'shadow-icon-blue' : variant === 'summarize' ? 'shadow-icon-green' : 'shadow-icon-purple'}
        `}>
          <Icon className="w-4 h-4 text-white" strokeWidth={variant === 'todo' ? 3 : 2} aria-hidden="true" />
        </div>
        <div className="flex flex-col text-left leading-tight">
          <span className="font-fustat font-black text-[13px] text-neutral-900 tracking-tight">
            {config.primaryText}
          </span>
          <span className="font-sans font-semibold text-[10px] text-neutral-500 mt-0.5">
            {config.secondaryText}
          </span>
        </div>
      </motion.div>
    );
  }
);

FloatingBadge.displayName = 'FloatingBadge';