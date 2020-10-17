import styled from 'styled-components';

export const Container = styled.div`
  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    position: relative;
  }

  .lds-circle {
    display: inline-block;
    transform: translateZ(1px);
  }

  .lds-circle > div {
    display: inline-block;
    width: 200px;
    height: 200px;
    margin: 8px;
    border-radius: 50%;

    animation: lds-circle 5s cubic-bezier(0, 0.2, 0.8, 1) infinite;

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
      background-position: 50% 50%;
    }
  }

  @keyframes lds-circle {
    0%,
    100% {
      animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
    }
    0% {
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(1800deg);
      animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
    }
    100% {
      transform: rotateY(3600deg);
    }
  }
`;
