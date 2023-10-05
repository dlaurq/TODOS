'use client';
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mouted, setMouted] = useState(false);
  useEffect(() => {
    setMouted(true);
  }, []);

  if (!mouted) return <>{children}</>;
  return <ThemeProvider>{children}</ThemeProvider>;
}
