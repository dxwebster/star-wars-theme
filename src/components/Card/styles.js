import styled from 'styled-components';

export const Container = styled.div`
  color: #fff;
  width: 90%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  img {
    width: 50%;
  }

  div {
    flex: 1;
    padding: 50px;
    border: 2px solid ${(props) => props.theme.colors.primary};

    h1 {
      color: white;
      font-size: 40px;
      font-weight: 700;
      padding-bottom: 20px;
      text-transform: uppercase;
    }

    li {
      list-style: none;
      padding: 5px 0;
      font-size: 20px;
    }

    button {
      width: 200px;
      margin-top: 50px;
      cursor: pointer;
      border: 1px solid #fff;
      background: #000;
      padding: 20px;
      color: #fff;
      text-transform: uppercase;
      transition: 0.3s;

      &:hover {
        border: 1px solid #f7b80a;
        color: #f7b80a;
        background: #252525;
      }
    }
  }
`;
