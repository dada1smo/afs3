import { FunctionComponent } from 'react';
import styles from './styles.module.css';

interface MonogramProps {
  width?: number;
}

const Monogram: FunctionComponent<MonogramProps> = ({ width = 30 }) => {
  const height = width * 2;

  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.monogram}
    >
      <path d="M22 16V26H8V24C8 15.18 15.18 8 24 8V0C10.76 0 0 10.76 0 24V44H8V34H22V36C22 44.82 14.82 52 6 52V60C19.24 60 30 49.24 30 36V16H22Z" />
    </svg>
  );
};

export default Monogram;
