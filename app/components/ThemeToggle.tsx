'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mouted, setMouted] = useState(false);

  const handleClick = () => {
    console.log(theme);
    if (theme === 'light') setDarkMode();
    if (theme === 'dark') setLightMode();
  };

  const setLightMode = () => setTheme('light');
  const setDarkMode = () => setTheme('dark');

  useEffect(() => {
    setMouted(true);
  }, []);

  if (!mouted) return null;

  return (
    <button onClick={handleClick} className="themeToggle">
      Change to {theme === 'light' ? 'dark' : 'light'}
    </button>
  );
};

export default ThemeToggle;
