import React from 'react';
import * as C from './styles';
import SelectStyleColumn from '../SelectStyleColumn';
import RightColumn from '../RightColumn/RightColumn';

const MainSection = () => {
  return (
    <C.MainSection>
      <h1>Estilize seus textos de forma rápida e dinâmica!</h1>
      <SelectStyleColumn />
      <RightColumn />
    </C.MainSection>
  );
};

export default MainSection;
