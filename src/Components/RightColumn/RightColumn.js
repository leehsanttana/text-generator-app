import React from 'react';
import ResultStyleColumn from './ResultStyleColumn/';
import ResultCodeColumn from './ResultCodeColumn/';

const RightColumn = () => {
  return (
    <section>
      <ResultStyleColumn />
      <ResultCodeColumn />
    </section>
  );
};

export default RightColumn;
