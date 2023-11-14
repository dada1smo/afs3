import { PostSummaryProps } from '@/lib/mdx';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import Typography from '../typography';

interface SummaryProps {
  items: PostSummaryProps[];
}

const Summary: FunctionComponent<SummaryProps> = ({ items }) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <nav>
      <Typography as="h4" variant="h4" className="mb-3">
        Sumário
      </Typography>
      <ul>
        {items.map(({ id, label }) => {
          return (
            <Typography
              key={id}
              as="li"
              variant="link"
              className="text-sm mb-2 summary-item"
            >
              <Link href={`#${id}`}>{label}</Link>
            </Typography>
          );
        })}
      </ul>
    </nav>
  );
};

export default Summary;
