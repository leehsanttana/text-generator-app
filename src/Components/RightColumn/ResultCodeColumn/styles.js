import styled from 'styled-components';

export const ResultCodeColumn = styled.section`
  grid-column: 2 / 3;
  display: flex;
  flex-direction: column;
  background: var(--black);
  border: 2px solid var(--light-blue);
  border-radius: 4px;
  padding: 1em;
  margin-top: 30px;

  button {
    padding: 1em;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    outline: none;
    background: var(--alter-blue);
    color: var(--white);
    transition: 0.5s ease;

    &:hover,
    &:focus {
      filter: brightness(80%);
      transform: scaleX(0.985);
      box-shadow: 0 0 3px 3px var(--light-blue);
    }
  }

  div {
    margin-bottom: 2em;
  }

  .open-close-style {
    display: block;
    font-family: monospace;
    color: var(--pink);
    margin-bottom: 0.8em;
  }

  .line-style {
    display: block;
    font-family: monospace;
    margin-bottom: 0.5em;
    text-indent: 1em;
    color: var(--light-blue);

    .atributte-style {
      color: var(--alter-purple);
    }
  }
`;
