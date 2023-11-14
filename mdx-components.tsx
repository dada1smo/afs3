import type { MDXComponents } from 'mdx/types';
import Typography from './components/typography';
import { formatSummary } from './lib/mdx';
import Link from 'next/link';

export const customComponents = {
  h2: ({ children }: any) => {
    const headingId = formatSummary(children);
    return (
      <Typography as="h2" variant="h2" className="mb-5 pt-5" id={headingId}>
        <Link href={`#${headingId}`} className="text-accent-500">
          #
        </Link>{' '}
        {children}
      </Typography>
    );
  },
  p: ({ children }: any) => {
    return (
      <Typography as="p" variant="p" className="mb-5">
        {children}
      </Typography>
    );
  },
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...customComponents,
    ...components,
  };
}
