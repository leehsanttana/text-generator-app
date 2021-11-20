import { React, useContext, useState } from 'react';
import { UserContext } from '../../UserContext';
import InputColor from '../Inputs/InputColor';
import InputRange from '../Inputs/InputRange';
import InputSelect from '../Inputs/InputSelect';
import * as C from './styles';

const SelectStyleColumn = () => {
  const {
    fontSize,
    setFontSize,
    color,
    setColor,
    background,
    setBackground,
    textAlign,
    setTextAlign,
    letterSpacing,
    setLetterSpacing,
    lineHeight,
    setLineHeight,
  } = useContext(UserContext);

  const [active, setActive] = useState(false);
  return (
    <C.SelectStyleColumn>
      <InputRange
        label="font-size:"
        style={fontSize + 'em'}
        id="font-size"
        name="font-size"
        value={fontSize}
        setValue={setFontSize}
        min="0"
        max="3"
        step="0.1"
      />
      <InputColor
        label="color:"
        style={color}
        id="color"
        name="color"
        value={color}
        setValue={setColor}
      />
      <InputColor
        label="background:"
        style={background}
        id="background"
        name="background"
        value={background}
        setValue={setBackground}
      />
      <InputSelect
        label="text-align:"
        active={active}
        setActive={setActive}
        value={textAlign}
        setValue={setTextAlign}
      />
      <InputRange
        label="line-height:"
        style={lineHeight}
        id="line-height"
        name="line-height"
        value={lineHeight}
        setValue={setLineHeight}
        min="1"
        max="3"
        step="0.1"
      />
      <InputRange
        label="letter-spacing:"
        style={letterSpacing + 'em'}
        id="letter-spacing"
        name="letter-spacing"
        value={letterSpacing}
        setValue={setLetterSpacing}
        min="0"
        max="3"
        step="0.1"
      />
    </C.SelectStyleColumn>
  );
};

export default SelectStyleColumn;
