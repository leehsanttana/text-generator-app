import React from 'react';
import * as C from './styles';

const InputSelect = ({
  label,
  active,
  setActive,
  value,
  setValue,
  options,
}) => {
  return (
    <C.InputSelect>
      <label htmlFor="">{label}</label>
      <span onClick={() => setActive(!active)}>
        {value} <p>&#9660;</p>
      </span>
      <div className="options">
        {active === true
          ? options.map((option) => {
              return (
                <div
                  key={option}
                  className="option"
                  onClick={({ target }) => {
                    setValue(target.innerText);
                    setActive(!active);
                  }}
                >
                  {option}
                </div>
              );
            })
          : null}
      </div>
    </C.InputSelect>
  );
};

export default InputSelect;
