import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { FunctionComponent } from 'react';
import Typography from '../typography';
import Link from 'next/link';

const cardVariants = cva('pt-20 pb-6 px-6 flex flex-col gap-4', {
  variants: {
    color: {
      primaryLight: 'bg-primary-50 border border-primary-300',
      primaryMid: 'bg-primary-300 border border-primary-300',
      accentLight: 'bg-accent-50 border border-accent-50',
      accentMid: 'bg-accent-300 border border-accent-300',
      primaryDark: 'bg-primary-800 text-white border border-primary-800',
    },
  },
  defaultVariants: {
    color: 'primaryLight',
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
          className={
            color !== 'primaryDark' ? 'text-primary-900' : 'text-white'
          }
        >
          {title}
        </Typography>
        <Typography
          as="p"
          variant="p"
          className={
            color !== 'primaryDark' ? 'text-primary-700' : 'text-primary-200'
          }
        >
          {subtitle}
        </Typography>
        <div className="mt">
          <Typography
            as="span"
            variant="link"
            className={
              color !== 'primaryDark' ? 'text-primary-600' : 'text-primary-200'
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
