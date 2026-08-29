'use client';

import { forwardRef, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { ChevronRight, Play, FileText, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'demo';
  size?: 'sm' | 'md' | 'lg';
  icon?: 'chevron' | 'play' | 'file-text' | 'github' | 'none';
  iconPosition?: 'left' | 'right';
  className?: string;
  disabled?: boolean;
}

interface ButtonProps extends BaseButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      icon = 'none',
      iconPosition = 'right',
      className = '',
      disabled,
      onClick,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'inline-flex items-center justify-center font-bold transition-all duration-200 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary: 'bg-[#0084FF] text-white hover:bg-[#0074E0] active:bg-[#0066CC] shadow-[inset_0px_4px_4px_0px_rgba(255,255,255,0.35),_0_10px_25px_-5px_rgba(0,132,255,0.25)]',
      secondary: 'bg-black/5 text-black hover:bg-black/10 border border-black/10 hover:shadow-md',
      ghost: 'bg-transparent text-[#0084FF] hover:text-[#0074E0] hover:bg-blue-50',
      demo: 'bg-transparent text-[#0084FF] hover:text-[#0074E0]',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm gap-2',
      md: 'pl-6 pr-2 py-2 gap-4 text-sm',
      lg: 'px-8 py-3 text-base gap-3',
    };

    const iconMap = {
      chevron: ChevronRight,
      play: Play,
      'file-text': FileText,
      github: Github,
      none: null,
    };
    const IconComponent = iconMap[icon];

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: variant === 'primary' ? 1.02 : 1, y: variant === 'ghost' || variant === 'demo' ? -2 : 0 }}
        whileTap={{ scale: variant === 'primary' ? 0.98 : 0.99 }}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        disabled={disabled}
        onClick={onClick}
        {...props}
      >
        {iconPosition === 'left' && IconComponent && <IconComponent className="w-4 h-4 flex-shrink-0" aria-hidden="true" />}
        <span>{children}</span>
        {iconPosition === 'right' && IconComponent && (
          <motion.div
            whileHover={{ x: variant === 'primary' ? 4 : 0 }}
            className={`flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0084FF] ${variant === 'primary' ? '' : 'hidden'}`}
          >
            <IconComponent className="w-4 h-4" aria-hidden="true" />
          </motion.div>
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

interface LinkButtonProps extends BaseButtonProps {
  href: string;
  target?: string;
  rel?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  children: React.ReactNode;
}

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      icon = 'none',
      iconPosition = 'right',
      className = '',
      href,
      target,
      rel,
      onClick,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'inline-flex items-center justify-center font-bold transition-all duration-200 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variants = {
      primary: 'bg-[#0084FF] text-white hover:bg-[#0074E0] active:bg-[#0066CC] shadow-[inset_0px_4px_4px_0px_rgba(255,255,255,0.35),_0_10px_25px_-5px_rgba(0,132,255,0.25)]',
      secondary: 'bg-black/5 text-black hover:bg-black/10 border border-black/10 hover:shadow-md',
      ghost: 'bg-transparent text-[#0084FF] hover:text-[#0074E0] hover:bg-blue-50',
      demo: 'bg-transparent text-[#0084FF] hover:text-[#0074E0]',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm gap-2',
      md: 'pl-6 pr-2 py-2 gap-4 text-sm',
      lg: 'px-8 py-3 text-base gap-3',
    };

    const iconMap = {
      chevron: ChevronRight,
      play: Play,
      'file-text': FileText,
      github: Github,
      none: null,
    };
    const IconComponent = iconMap[icon];

    return (
      <motion.a
        ref={ref}
        whileHover={{ scale: variant === 'primary' ? 1.02 : 1, y: variant === 'ghost' || variant === 'demo' ? -2 : 0 }}
        whileTap={{ scale: variant === 'primary' ? 0.98 : 0.99 }}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        {...props}
      >
        {iconPosition === 'left' && IconComponent && <IconComponent className="w-4 h-4 flex-shrink-0" aria-hidden="true" />}
        <span>{children}</span>
        {iconPosition === 'right' && IconComponent && (
          <motion.div
            whileHover={{ x: variant === 'primary' ? 4 : 0 }}
            className={`flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0084FF] ${variant === 'primary' ? '' : 'hidden'}`}
          >
            <IconComponent className="w-4 h-4" aria-hidden="true" />
          </motion.div>
        )}
      </motion.a>
    );
  }
);

LinkButton.displayName = 'LinkButton';