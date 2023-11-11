import { FunctionComponent } from 'react';
import Monogram from '../monogram';
import Link from 'next/link';

const Nav: FunctionComponent = () => {
  return (
    <Link href="/">
      <div style={{ zIndex: 4 }}>
        <Monogram />
      </div>
    </Link>
  );
};

export default Nav;
