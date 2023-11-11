import Card from '@/components/card';
import Column from '@/components/column';
import Intro from '@/components/intro';
import Row from '@/components/row';
import Typography from '@/components/typography';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="mt-10">
      <div className="flex justify-center">
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
      </div>
      <Row className="h-full mt-10">
        <Column md={4}>
          <Card
            title="How to Master Shapes in UX/UI Design Through its Psychology"
            subtitle="Constructing humanlike artificial intelligence often starts with deconstructing humans..."
            color="light"
            href="/"
          />
          <Card
            title="When to useMemo and useCallback"
            subtitle="Constructing humanlike artificial intelligence often starts with deconstructing humans..."
            color="dark"
            href="/"
          />
        </Column>
        <Column md={4}>
          <Card
            title="A Very Gentle Introduction to Large Language Models without the Hype"
            subtitle="Constructing humanlike artificial intelligence often starts with deconstructing humans..."
            color="mid"
            href="/"
          />
        </Column>
        <Column md={4}>
          <Card
            title="Why Japanese Websites Look So Different"
            subtitle="Constructing humanlike artificial intelligence often starts with deconstructing humans..."
            color="accent"
            href="/"
          />
        </Column>
      </Row>
    </main>
  );
}
