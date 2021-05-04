
import React from 'react';

export const themes = {
    light: {
      foreground: '#000000',
      background: '#e9f6f4',
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222',
    },
  };

export const ProfileContext = React.createContext({
    theme: themes.light,
    profile: "Sweety",
});