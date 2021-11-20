import { React, createContext, useState } from 'react';

export const UserContext = createContext();

export const GlobalContext = ({ children }) => {
  const [fontSize, setFontSize] = useState('1');
  const [color, setColor] = useState('#ffffff');
  const [background, setBackground] = useState('#1b1b1b');
  const [textAlign, setTextAlign] = useState('left');
  const [letterSpacing, setLetterSpacing] = useState('0');
  const [lineHeight, setLineHeight] = useState('1.1');

  const value = {
    fontSize,
    setFontSize,
    color,
    setColor,
    background,
    textAlign,
    setTextAlign,
    setBackground,
    letterSpacing,
    setLetterSpacing,
    lineHeight,
    setLineHeight,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
