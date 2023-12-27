'use client';
import { Next13ProgressBar } from 'next13-progressbar';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from './theme-provider';

export const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider>
      {children}
      <Next13ProgressBar
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height="3px"
        options={{ easing: 'ease', speed: 500, showSpinner: false }}
        showOnShallow
      />
    </ThemeProvider>
  );
};
