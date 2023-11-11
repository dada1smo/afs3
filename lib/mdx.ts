import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import { JSXElementConstructor, ReactElement } from 'react';
import { serialize } from 'next-mdx-remote/serialize';

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
}

const rootDirectory = path.join(process.cwd(), 'content');

export const getPostBySlug = async (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, '');
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
  });

  const head: FrontMatterProps = {
    meta: { ...frontmatter, slug: realSlug },
    content,
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
