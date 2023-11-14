import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import { customComponents, useMDXComponents } from '@/mdx-components';

export interface PostSummaryProps {
  id: string;
  label: string;
}

export interface MetaProps {
  slug: string;
  title?: string;
  subtitle?: string;
  author?: string;
  publishDate?: string;
}

export interface FrontMatterProps {
  meta: MetaProps;
  content: any;
  summary: PostSummaryProps[];
}

export function formatSummary(heading: string) {
  return heading
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('en-US')
    .split(' ')
    .join('-');
}

function generateSummaries(markdownString: string) {
  const h2Regex = /^##\s+(.+)/gm;
  const matches = markdownString.match(h2Regex);

  if (matches) {
    const h2Headings = matches.map((match) => {
      return {
        id: formatSummary(match.replace(/^##\s+/, '')),
        label: match.replace(/^##\s+/, ''),
      };
    });
    return h2Headings;
  }

  return [];
}

const rootDirectory = path.join(process.cwd(), 'content');

export const getPostBySlug = async (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, '');
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
    components: customComponents,
  });

  const head: FrontMatterProps = {
    meta: { ...frontmatter, slug: realSlug },
    content,
    summary: generateSummaries(fileContent),
  };

  return head;
};

export const getAllPostsMeta = async () => {
  const files = fs.readdirSync(rootDirectory);

  let posts = [];

  for (const file of files) {
    const { meta } = await getPostBySlug(file);
    posts.push(meta);
  }

  return posts;
};
