// context/ThemeContext.js
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const lightTheme = {
  background: '#fff',
  text: '#000',
  color: '#f2f2f2',
  card: '#f5f5f5',
  iconBackground: '#f5f5f5',
  headerBackground: '#fff',
  transactionBackground: '#fff',
  transactionText: '#0D0D26',
};

export const darkTheme = {
  background: '#000',
  text: '#fff',
  card: '#333',
  color: '#333',
  iconBackground: '#444',
  headerBackground: '#000',
  transactionBackground: '#1a1a1a',
  transactionText: '#fff',
};

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
