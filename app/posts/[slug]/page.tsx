import Column from '@/components/column';
import Row from '@/components/row';
import Summary from '@/components/summary';
import Typography from '@/components/typography';
import { getPostBySlug } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';

interface ParamsProps {
  params: {
    slug: string;
  };
}

const getPageContent = async (slug: string) => {
  const { meta, content, summary } = await getPostBySlug(slug);
  return { meta, content, summary };
};

export async function generateMetadata({ params }: ParamsProps) {
  const { meta } = await getPageContent(params.slug);
  return { title: meta.title || '' };
}

const Page = async ({ params }: ParamsProps) => {
  const { meta, content, summary } = await getPageContent(params.slug);

  return (
    <section>
      <Row gutter="wide" alignItems="stretch">
        <Column lg={9} gutter="wide">
          <main className="pt-10 pb-10 lg:px-40 md:px-20 px-8 mt-32 bg-white">
            <Typography
              as="h1"
              variant="h1"
              className="-mt-20 mb-8 text-primary-500"
            >
              {meta.title}
            </Typography>
            <div>{content}</div>
          </main>
        </Column>
        <Column lg={3} gutter="wide" className="h-auto pt-32">
          <aside className="sticky top-8">
            <Summary items={summary} />
          </aside>
        </Column>
      </Row>
    </section>
  );
};

export default Page;
