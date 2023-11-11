import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { FunctionComponent, ReactNode } from 'react';

const columnVariants = cva('h-full w-full block', {
  variants: {
    xl: {
      0: 'xl:hidden',
      1: 'xl:w-1/12',
      2: 'xl:w-2/12',
      3: 'xl:w-3/12',
      4: 'xl:w-4/12',
      5: 'xl:w-5/12',
      6: 'xl:w-6/12',
      7: 'xl:w-7/12',
      8: 'xl:w-8/12',
      9: 'xl:w-9/12',
      10: 'xl:w-10/12',
      11: 'xl:w-11/12',
      12: 'xl:w-12/12',
    },
    lg: {
      0: 'lg:hidden',
      1: 'lg:w-1/12',
      2: 'lg:w-2/12',
      3: 'lg:w-3/12',
      4: 'lg:w-4/12',
      5: 'lg:w-5/12',
      6: 'lg:w-6/12',
      7: 'lg:w-7/12',
      8: 'lg:w-8/12',
      9: 'lg:w-9/12',
      10: 'lg:w-10/12',
      11: 'lg:w-11/12',
      12: 'lg:w-12/12',
    },
    md: {
      0: 'md:hidden',
      1: 'md:w-1/12',
      2: 'md:w-2/12',
      3: 'md:w-3/12',
      4: 'md:w-4/12',
      5: 'md:w-5/12',
      6: 'md:w-6/12',
      7: 'md:w-7/12',
      8: 'md:w-8/12',
      9: 'md:w-9/12',
      10: 'md:w-10/12',
      11: 'md:w-11/12',
      12: 'md:w-12/12',
    },
    sm: {
      0: 'sm:nhidden',
      1: 'sm:w-1/12',
      2: 'sm:w-2/12',
      3: 'sm:w-3/12',
      4: 'sm:w-4/12',
      5: 'sm:w-5/12',
      6: 'sm:w-6/12',
      7: 'sm:w-7/12',
      8: 'sm:w-8/12',
      9: 'sm:w-9/12',
      10: 'sm:w-10/12',
      11: 'sm:w-11/12',
      12: 'sm:w-12/12',
    },
    xs: {
      0: 'xs:hidden',
      1: 'xs:w-1/12',
      2: 'xs:w-2/12',
      3: 'xs:w-3/12',
      4: 'xs:w-4/12',
      5: 'xs:w-5/12',
      6: 'xs:w-6/12',
      7: 'xs:w-7/12',
      8: 'xs:w-8/12',
      9: 'xs:w-9/12',
      10: 'xs:w-10/12',
      11: 'xs:w-11/12',
      12: 'xs:w-12/12',
    },
    gutter: {
      default: 'pl-4',
      none: 'pl-0',
    },
    defaultVariants: {
      sm: '12',
      xs: '12',
      gutter: 'default',
    },
  },
});

interface ColumnProps extends VariantProps<typeof columnVariants> {
  className?: string;
  children: ReactNode;
}

const Column: FunctionComponent<ColumnProps> = ({
  xl,
  lg,
  md,
  sm,
  xs,
  gutter = 'default',
  className,
  children,
}) => {
  return (
    <div
      className={cn(columnVariants({ xl, lg, md, sm, xs, gutter, className }))}
    >
      {children}
    </div>
  );
};

export default Column;
