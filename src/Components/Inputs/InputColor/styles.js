import styled from 'styled-components';

export const InputColor = styled.div`
  margin-bottom: 3em;

  input[type='color'] {
    width: 100%;
    height: 60px;
    -webkit-appearance: none;
    background: transparent;
    transition: 0.3s ease;
  }
  input[type='color']:focus {
    outline: none;
    box-shadow: 0 0 2px 1px var(--light-blue);
  }
`;
