import { React, useContext, useState, useRef } from 'react';
import { UserContext } from '../../../UserContext';
import * as C from './styles';

const ResultCodeColumn = () => {
  const {
    fontSize,
    letterSpacing,
    lineHeight,
    color,
    background,
    textAlign,
    fontWeight,
  } = useContext(UserContext);
  const code = useRef();
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  function copyStyles() {
    copyTextToClipboard(code.current.innerText)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <C.ResultCodeColumn>
      <div ref={code}>
        <pre>
          <span className="open-close-style">.text-style {'{'}</span>
          <span className="line-style">
            <span className="atributte-style">font-size:</span> {fontSize}em;
          </span>
          <span className="line-style">
            <span className="atributte-style">color:</span> {color};
          </span>
          <span className="line-style">
            <span className="atributte-style">background:</span> {background};
          </span>
          <span className="line-style">
            <span className="atributte-style">text-align:</span> {textAlign};
          </span>
          <span className="line-style">
            <span className="atributte-style">font-weight:</span> {fontWeight};
          </span>
          <span className="line-style">
            <span className="atributte-style">line-height:</span> {lineHeight};
          </span>
          <span className="line-style">
            <span className="atributte-style">letter-spacing:</span>{' '}
            {letterSpacing}em;
          </span>
          <span className="open-close-style">{'}'}</span>
        </pre>
      </div>
      <button onClick={copyStyles}>{isCopied ? 'Copiado!' : 'Copiar'}</button>
    </C.ResultCodeColumn>
  );
};

export default ResultCodeColumn;
