import React, { createContext, useContext, useEffect, useState } from 'react';
import { THEMES } from '../constants';

type ThemeMode = 'light' | 'dark';

interface ThemeContextValue {
  themeMode: ThemeMode;
  setThemeMode: (m: ThemeMode) => void;
  currentTheme: typeof THEMES.light;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    try {
      const stored = localStorage.getItem('themeMode');
      return stored === 'dark' ? 'dark' : 'light';
    } catch (e) {
      return 'light';
    }
  });

  const currentTheme = THEMES[themeMode];

  useEffect(() => {
    try {
      localStorage.setItem('themeMode', themeMode);
      document.body.style.backgroundColor = currentTheme.backgroundColor;
      document.body.style.color = currentTheme.textColor;
      document.body.style.transition = 'background-color 0.35s ease, color 0.35s ease';
    } catch (e) {}
  }, [themeMode, currentTheme]);

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};

export default ThemeProvider;
