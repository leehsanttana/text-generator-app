import React from 'react';
import * as C from './styles';

const InputRange = ({ label, style, id, name, value, setValue, ...props }) => {
  return (
    <C.InputRange>
      <label htmlFor={id}>
        {label} <code>{style}</code>
      </label>
      <input
        type="range"
        id={id}
        name={name}
        value={value}
        onChange={({ target }) => {
          setValue(target.value);
        }}
        {...props}
      />
    </C.InputRange>
  );
};

export default InputRange;
