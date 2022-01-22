import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 1px 7px 4px rgba(0,0,0,0.29);
  width: 20rem;
  height: 20rem;

  h1 {
    font-size: 1.5rem;
  }
`;

export const ClockContainer = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 4rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 2rem;

  button {
    padding: 10px 20px;
    color: #fff;
    transition: filter 0.2s;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 8px;
    outline: none;
    border: none;
  }

  button:hover:enabled {
    filter: brightness(0.8);
  }

  .start {
    background-color: var(--green);
  }

  .reset {
    background-color: var(--red);
  }

  .disabled {
    background-color: var(--dark-gray);
  }
`;