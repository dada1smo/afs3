import { FunctionComponent, ReactNode } from 'react';
import Image from '../image';

interface IntroProps {
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  content: ReactNode;
}

const Intro: FunctionComponent<IntroProps> = ({
  imageSrc,
  content,
  imageHeight,
  imageWidth,
}) => {
  return (
    <div className="flex items-center gap-4 pb-6 border-b border-primary-300">
      {/* <Image
        src={imageSrc}
        alt=""
        width={imageWidth}
        height={imageHeight}
        className="border border-primary-300"
      /> */}
      <div>{content}</div>
    </div>
  );
};

export default Intro;
