'use client';

import { motion } from 'framer-motion';

interface AvatarProps {
  src: string;
  alt: string;
  index: number;
}

const Avatar = ({ src, alt, index }: AvatarProps) => (
  <motion.div
    whileHover={{ x: index * -4, zIndex: 10 }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className="relative"
    style={{ zIndex: 1000 - index } as React.CSSProperties}
  >
    <img
      src={src}
      alt={alt}
      className="w-6 h-6 rounded-full border-1.5 border-white object-cover"
      loading="lazy"
    />
  </motion.div>
);

interface AvatarGroupProps {
  avatars: Array<{ src: string; alt: string }>;
}

export const AvatarGroup = ({ avatars }: AvatarGroupProps) => (
  <div className="flex -space-x-2 select-none" role="img" aria-label={`${avatars.length} user avatars`}>
    {avatars.map((avatar, index) => (
      <Avatar key={index} {...avatar} index={avatars.length - index} />
    ))}
  </div>
);