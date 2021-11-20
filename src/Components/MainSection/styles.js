import styled from 'styled-components';

export const MainSection = styled.section`
  background: var(--background);
  padding: 1em 5em;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 5em auto;
  gap: 40px;

  h1 {
    grid-column: 1 / 3;
    font-size: 2em;
    font-weight: bold;
    margin: 1em 0;
    text-align: center;
  }
`;
