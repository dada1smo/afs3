import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { FunctionComponent, ReactNode } from 'react';

const rowVariants = cva('flex flex-wrap', {
  variants: {
    alignItems: {
      start: 'items-start',
      end: 'items-end',
      center: 'items-center',
      baseline: 'items-baseline',
      stretch: 'items-stretch',
    },
    justifyContent: {
      normal: 'justify-normal',
      start: 'justify-start',
      end: 'justify-end',
      center: 'justify-center',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
      stretch: 'justify-stretch',
    },
    gutter: {
      default: '-ml-4',
      none: 'ml-0',
    },
    defaultVariants: {
      alignItems: 'start',
      justifyContent: 'stretch',
    },
  },
});

interface RowProps extends VariantProps<typeof rowVariants> {
  className?: string;
  children: ReactNode;
}

const Row: FunctionComponent<RowProps> = ({
  alignItems,
  justifyContent,
  gutter = 'default',
  className,
  children,
}) => {
  return (
    <div className="mx-auto w-full h-full">
      <div
        style={{ width: gutter === 'default' ? 'calc(100% + 16px)' : '100%' }}
        className={cn(
          rowVariants({ alignItems, justifyContent, gutter, className })
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Row;
