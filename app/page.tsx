import Card from '@/components/card';
import Column from '@/components/column';
import Intro from '@/components/intro';
import PostList from '@/components/post-list';
import Row from '@/components/row';
import Typography from '@/components/typography';
import { getAllPostsMeta } from '@/lib/mdx';
import Image from 'next/image';

export default async function Home() {
  const posts = await getAllPostsMeta();

  return (
    <main className="mt-10">
      {/* <div className="flex justify-center">
        <Intro
          imageSrc="/img/Perfil-Adalberto-Sampaio.png"
          imageWidth={60}
          imageHeight={60}
          content={
            <Typography as="p" variant="subtitle">
              <strong>Boas-vindas!</strong>
              <br />
              Aqui escrevo sobre desenvolvimento front-end e mostro um pouco do
              meu trabalho.
            </Typography>
          }
        />
      </div> */}
      <div className="mt-12 md:pt-36 sm:pt-16 pt-0 relative">
        <div className="absolute sm:block hidden top-0 -z-10">
          <div className="md:text-9xl sm:text-7xl text-4xl font-bold font-archivo text-primary-300">
            Postagens
          </div>
          <div className="md:text-9xl sm:text-7xl text-4xl font-bold font-archivo text-primary-300 absolute md:top-24 sm:top-14 top-9 md:left-48 sm:left-32">
            recentes
          </div>
        </div>
        <PostList posts={posts} />
      </div>
    </main>
  );
}
