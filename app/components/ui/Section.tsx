import { ReactNode } from 'react';
import clsx from 'clsx';

type Props = {
  children: ReactNode;
  variant?: 'default' | 'muted' | 'dark' | 'gradient';
  className?: string;
  as?: any;
};

export default function Section({ children, variant = 'default', className, as: Tag = 'section' }: Props) {
  const bg = {
    default: 'bg-white',
    muted: 'bg-gray-50',
    dark: 'bg-black text-white',
    gradient: 'bg-gradient-to-b from-white to-gray-50'
  }[variant];

  return (
    <Tag className={clsx('section', bg, className)}>
      {children}
    </Tag>
  );
}
