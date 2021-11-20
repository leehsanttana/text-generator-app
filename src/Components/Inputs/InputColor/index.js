import React from 'react';

import * as C from './styles';

const InputRange = ({ label, style, id, name, value, setValue }) => {
  return (
    <C.InputColor>
      <label htmlFor={id}>
        {label} <code>{style}</code>
      </label>
      <input
        type="color"
        id={id}
        name={name}
        value={value}
        onChange={({ target }) => {
          setValue(target.value);
        }}
      />
    </C.InputColor>
  );
};

export default InputRange;
