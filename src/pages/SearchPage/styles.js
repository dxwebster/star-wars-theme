import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  color: #fff;

  .card {
    width: 100%;
    display: flex;
    justify-content: center;

    .description {
      width: 70%;
      padding: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h1 {
        color: white;
        font-size: 30px;
        font-weight: 700;
        padding-bottom: 20px;
        text-transform: uppercase;
      }

      li {
        list-style: none;
        padding: 5px 0;
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
  }
`;
