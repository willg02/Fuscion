import clsx from 'clsx';

type Props = {
  as?: any;
  children: React.ReactNode;
  size?: 'display1' | 'display2' | 'h2' | 'h3';
  align?: 'left' | 'center';
  className?: string;
  measure?: 'tight' | 'normal' | false;
};

export default function Heading({ as: Tag = 'h2', children, size = 'h2', align = 'left', className, measure = false }: Props) {
  const sizeClass =
    size === 'display1' ? 'display-1' :
    size === 'display2' ? 'display-2' :
    size === 'h3' ? 'text-2xl md:text-3xl font-semibold' :
    'text-4xl md:text-5xl font-semibold';

  const measureClass = measure === 'tight' ? 'measure-tight' : measure === 'normal' ? 'measure' : '';
  return (
    <Tag className={clsx(sizeClass, 'balance', align === 'center' && 'text-center', measureClass, className)}>
      {children}
    </Tag>
  );
}
