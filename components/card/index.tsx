import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { FunctionComponent } from 'react';
import Typography from '../typography';
import Link from 'next/link';

const cardVariants = cva('pt-20 pb-6 px-6 flex flex-col gap-4', {
  variants: {
    color: {
      light: 'bg-white border border-primary-300',
      mid: 'bg-primary-300 border border-primary-300',
      accent: 'bg-accent-300 border border-accent-300',
      dark: 'bg-primary-800 text-white border border-primary-800',
    },
    defaultVariants: {
      color: 'light',
    },
  },
});

interface CardProps extends VariantProps<typeof cardVariants> {
  title: string;
  subtitle: string;
  className?: string;
  href: string;
}

const Card: FunctionComponent<CardProps> = ({
  title,
  subtitle,
  className,
  color,
  href,
}) => {
  return (
    <Link href={href}>
      <div className={cn(cardVariants({ color, className }))}>
        <Typography
          as="h3"
          variant="h3"
          className={color !== 'dark' ? 'text-primary-900' : 'text-white'}
        >
          {title}
        </Typography>
        <Typography
          as="p"
          variant="p"
          className={color !== 'dark' ? 'text-primary-700' : 'text-primary-200'}
        >
          {subtitle}
        </Typography>
        <div className="mt">
          <Typography
            as="span"
            variant="link"
            className={
              color !== 'dark' ? 'text-primary-600' : 'text-primary-200'
            }
          >
            Ler mais
          </Typography>
        </div>
      </div>
    </Link>
  );
};

export default Card;
