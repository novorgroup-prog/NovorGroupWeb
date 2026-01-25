import React, { ReactNode } from 'react';
import { ThemeProvider, useTheme } from '../src/theme';

interface DemosLayoutProps {
  children: ReactNode;
}

const DemosLayoutContent: React.FC<DemosLayoutProps> = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <main style={{ flexGrow: 1 }}>
        {children}
      </main>
    </div>
  );
};

export const DemosLayout: React.FC<DemosLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <DemosLayoutContent>{children}</DemosLayoutContent>
    </ThemeProvider>
  );
};
