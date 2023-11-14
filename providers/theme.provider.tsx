'use client';

import { FunctionComponent, ReactNode, useState } from 'react';

export type ThemeType = 'light' | 'dark';

interface ThemeProviderProps {
  className: string;
  children: ReactNode;
}

const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({
  className,
  children,
}) => {
  const [theme, setTheme] = useState<ThemeType>('light');

  return <body className={`${theme} ${className}`}>{children}</body>;
};

export default ThemeProvider;
