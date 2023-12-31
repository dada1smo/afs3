import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { FunctionComponent, ReactNode } from 'react';

const typographyVariants = cva('font-archivo text-primary-900', {
  variants: {
    variant: {
      h1: 'text-4xl font-bold md:text-5xl',
      h2: 'text-2xl font-bold lg:text-3xl',
      h3: 'text-2xl font-medium lg:text-3xl',
      h4: 'text-xl font-medium lg:text-lg',
      subtitle: 'text-2xl leading-7',
      p: 'text-lg leading-6',
      link: 'text-base underline',
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
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'li';
  children: ReactNode;
  className?: string;
  id?: string;
}

const Typography: FunctionComponent<TypographyProps> = ({
  as: Tag = 'p',
  variant,
  align,
  children,
  className,
  id,
}) => {
  return (
    <Tag
      id={id}
      className={cn(typographyVariants({ variant, align, className }))}
    >
      {children}
    </Tag>
  );
};

export default Typography;
