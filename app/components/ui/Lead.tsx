import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
};

export default function Lead({ children, align = 'left', className }: Props) {
  return (
    <p className={clsx('lead measure', align === 'center' && 'text-center', className)}>{children}</p>
  );
}
