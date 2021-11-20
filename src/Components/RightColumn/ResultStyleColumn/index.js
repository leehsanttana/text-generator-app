import { React, useContext } from 'react';
import { UserContext } from '../../../UserContext';
import * as C from './styles';

const ResultStyleColumn = () => {
  const {
    fontSize,
    letterSpacing,
    lineHeight,
    color,
    background,
    textAlign,
    fontWeight,
  } = useContext(UserContext);
  return (
    <C.ResultStyleColumn style={{ background: background }}>
      <p
        style={{
          fontSize: fontSize + 'em',
          letterSpacing: letterSpacing + 'em',
          lineHeight: lineHeight,
          color: color,
          textAlign: textAlign,
          fontWeight: fontWeight,
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
        molestiae adipisci. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Veritatis, molestiae adipisci.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Veritatis, molestiae adipisci.
      </p>
    </C.ResultStyleColumn>
  );
};

export default ResultStyleColumn;
