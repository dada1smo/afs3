import { ImageConfig } from 'next/dist/shared/lib/image-config';
import { ForwardRefExoticComponent, FunctionComponent } from 'react';
import NextImage, { ImageProps } from 'next/image';

const Image: FunctionComponent<ImageProps> = (props) => {
  return <NextImage {...props} />;
};

export default Image;
