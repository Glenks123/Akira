import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  top: 0;
  right: 0;
  left: 0;
  margin: 0;
  padding: 10px 30px;
  box-shadow: 0px 2px 8px 2px rgba(0,0,0,0.31);

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 50px;
    width: 50px;
  }

  a {
    background-color: #000;
    color: #fff;
    font-size: 1rem;
    padding: 10px 20px;
    border-radius: 10px;
    text-decoration: none;
    box-shadow: 0px 1px 7px 3px rgba(0,0,0,0.29);
    transition: 0.2s;
  }

  a:hover {
    filter: brightness(1.1);
    box-shadow: 0px 1px 7px 4px rgba(0,0,0,0.29);
  }
`;