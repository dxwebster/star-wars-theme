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

  section {
    width: 1500px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  main {
    width: 100%;
    max-width: 1500px;

    height: 100%;
    min-height: 680px;

    display: flex;
    align-items: center;

    .card-image {
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

    .card-data {
      margin-left: -150px;
      flex: 1;
      padding: 50px;

      h1 {
        color: white;
        font-size: 40px;
        font-weight: 700;
        padding-bottom: 20px;
        text-transform: uppercase;
        position: relative;
        margin-bottom: 30px;

        &::after {
          content: '';
          background: ${(props) => props.theme.colors.primary};
          width: 50px;
          height: 5px;
          position: absolute;
          bottom: 0;
          left: 0;
        }
      }

      p {
        font-size: 18px;
        line-height: 1.75em;
        margin: 30px 0;
      }

      ul {
        display: flex;
        gap: 30px;

        li {
          padding: 5px 0;
          display: flex;
          flex-direction: column;
          font-weight: 500;

          color: ${(props) => props.theme.colors.primary};

          img {
            width: 30%;
            margin-bottom: 10px;
          }

          span {
            color: white;
            font-weight: 200;
          }
        }
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
