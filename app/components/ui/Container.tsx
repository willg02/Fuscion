import { ReactNode } from 'react';
import clsx from 'clsx';

type Props = {
  children: ReactNode;
  className?: string;
  max?: '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
};

export default function Container({ children, className, max }: Props) {
  const maxClass = max ? `max-w-${max}` : '';
  return (
    <div className={clsx('container-premium', maxClass, className)}>{children}</div>
  );
}
