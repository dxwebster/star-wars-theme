import styled from 'styled-components';

export const Container = styled.div`
  color: #fff;
  gap: 10px;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

  main {
    width: 100%;
    max-width: 1500px;

    height: 100%;
    max-height: 680px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: block;
      position: relative;

      &::after {
        content: '';
        background: url(${(props) => props.theme.backgroundImage}) no-repeat;
        opacity: 0.5;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -1;

        background-size: 70%;
        background-position: 20% 20%;
      }

      img {
        width: 100%;
      }
    }

    span {
      margin-left: -150px;
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
        line-height: 1.75em;
      }
    }
  }

  button {
    color: white;
    background: ${(props) => props.theme.colors.primary};
    border-radius: 50px;
    padding: 10px 30px;
    cursor: pointer;
    font-size: 20px;
    outline: none;

    &#anterior {
      opacity: 0.5;
      cursor: default;
    }
  }
`;
