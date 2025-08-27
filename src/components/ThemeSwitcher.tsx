import React from 'react';
import { Moon, Sun } from 'lucide-react';

export const ThemeSwitcher = () => {
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'light');
  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <div
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="w-10 h-10 cursor-pointer rounded-full flex items-center justify-center bg-white dark:bg-gray-500 dark:text-white">
      {theme === 'light' ? <Moon size={14} /> : <Sun size={14} />}
    </div>
  );
};
