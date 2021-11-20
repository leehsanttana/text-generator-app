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
    fontWeight,
    setFontWeight,
    letterSpacing,
    setLetterSpacing,
    lineHeight,
    setLineHeight,
  } = useContext(UserContext);

  const optionsTextAlign = ['left', 'center', 'right'];
  const optionsFontWeight = ['lighter', 'normal', 'bold'];

  const [activeTextAlign, setActiveTextAlign] = useState(false);
  const [activeFontWeight, setActiveFontWeight] = useState(false);
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
        active={activeTextAlign}
        setActive={setActiveTextAlign}
        value={textAlign}
        setValue={setTextAlign}
        options={optionsTextAlign}
      />
      <InputSelect
        label="font-weight:"
        active={activeFontWeight}
        setActive={setActiveFontWeight}
        value={fontWeight}
        setValue={setFontWeight}
        options={optionsFontWeight}
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
