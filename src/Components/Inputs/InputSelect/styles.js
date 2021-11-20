import styled from 'styled-components';

export const InputSelect = styled.div`
  margin-bottom: 3em;

  span {
    display: flex;
    justify-content: space-between;
    color: var(--white);
    padding: 1em 0.5em;
    border: 1px solid var(--light-blue);
    cursor: pointer;
    font-size: 1.125em;

    &:hover,
    &:focus {
      background: var(--alter-blue);
    }
  }

  .options {
    display: block;
    max-width: 100%;
    height: auto;
    animation: showOptions 1s forwards;
  }

  @keyframes showOptions {
    from {
      min-height: 0%;
      opacity: 0;
    }
    to {
      min-height: 100%;
      opacity: 1;
    }
  }

  .option {
    color: var(--white);
    padding: 1em 0.5em;
    background: var(--black);
    border-bottom: 1px solid var(--alter-blue);
    cursor: pointer;
    transition: 0.5s ease;

    &:hover {
      filter: brightness(130%);
    }

    &:last-child {
      border-bottom: none;
    }
  }
`;
