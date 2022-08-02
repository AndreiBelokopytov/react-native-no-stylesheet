import React, { useContext } from 'react';

const themeContext = React.createContext<object>({});

export const ThemeProvider = themeContext.Provider;

export const useTheme = () => useContext(themeContext);
