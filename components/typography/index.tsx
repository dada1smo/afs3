import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { FunctionComponent, ReactNode } from 'react';

const typographyVariants = cva('font-archivo text-primary-900', {
  variants: {
    variant: {
      h1: 'text-4xl font-bold lg:text-5xl',
      h3: 'text-2xl font-medium lg:text-3xl',
      subtitle: 'text-2xl leading-7',
      p: 'text-lg leading-6',
      link: 'underline',
    },
    align: {
      center: 'text-center',
      right: 'text-right',
      left: 'text-left',
    },
  },
  defaultVariants: {
    variant: 'p',
    align: 'left',
  },
});

interface TypographyProps extends VariantProps<typeof typographyVariants> {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  children: ReactNode;
  className?: string;
}

const Typography: FunctionComponent<TypographyProps> = ({
  as: Tag = 'p',
  variant,
  align,
  children,
  className,
}) => {
  return (
    <Tag className={cn(typographyVariants({ variant, align, className }))}>
      {children}
    </Tag>
  );
};

export default Typography;
