import styled from 'styled-components';

export const InputRange = styled.div`
  margin-bottom: 3em;

  input[type='range'] {
    height: 16px;
    -webkit-appearance: none;
    margin: 10px 0;
    width: 100%;
    background: transparent;
  }
  input[type='range']:focus {
    outline: none;
  }
  input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    box-shadow: 0px 0px 2px rgba(72, 149, 239, 0.5);
    background: var(--light-blue);
    border-radius: 6px;
    transition: 0.3s ease;
  }
  input[type='range']::-webkit-slider-thumb {
    box-shadow: 0px 0px 2px #3a0ca3;
    background: #3a0ca3;
    height: 14px;
    width: 14px;
    border-radius: 2px;
    background: var(--mid-purple);
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -5px;
  }
  input[type='range']:focus::-webkit-slider-runnable-track {
    background: var(--alter-blue);
    box-shadow: 0px 0px 0 transparent;
  }
`;
