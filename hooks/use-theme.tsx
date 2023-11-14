'use client';

import { ThemeType } from '@/providers/theme.provider';
import { useState } from 'react';

export default function useTheme() {
  const [theme, setTheme] = useState<ThemeType>('light');

  return {
    theme,
  };
}
