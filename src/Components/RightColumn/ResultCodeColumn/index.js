import { React, useContext, useState, useRef } from 'react';
import { UserContext } from '../../../UserContext';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import * as C from './styles';

const ResultCodeColumn = ({ debug }) => {
  const { fontSize, letterSpacing, lineHeight, color, background, textAlign } =
    useContext(UserContext);

  const [button, setButton] = useState('Copiar');
  const [value, setValue] = useState('');
  const code = useRef();

  function copyStyles() {
    setValue(code.current.innerText);
    console.log(value);
    setButton('copiado!');
    setTimeout(() => {
      setButton('copiar');
    }, 1500);
  }

  return (
    <C.ResultCodeColumn>
      <div ref={code}>
        <span>{'.text-style {'} </span>
        <p>
          <span>font-size:</span> {fontSize}em;
        </p>
        <p>
          <span>letter-spacing:</span> {letterSpacing}em;
        </p>
        <p>
          <span>line-height:</span> {lineHeight};
        </p>
        <p>
          <span>color:</span> {color};
        </p>
        <p>
          <span>background:</span> {background};
        </p>
        <p>
          <span>text-align:</span> {textAlign};
        </p>
        <span>{'}'}</span>
      </div>
      <CopyToClipboard
        options={{ debug: debug, message: '' }}
        text={value}
        onCopy={copyStyles}
      >
        <button>{button}</button>
      </CopyToClipboard>
    </C.ResultCodeColumn>
  );
};

export default ResultCodeColumn;
