import styled from 'styled-components';

export const Container = styled.div`
  z-index: -9999;

  .stars,
  .twinkling {
    display: block;
    min-height: 100vh;
    position: fixed;
    width: 100vw;
  }

  .stars {
    background: #000 url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top center;
    z-index: 0;
  }

  @keyframes move-twink-back {
    from {
      background-position: 0 0;
    }
    to {
      background-position: -10000px 5000px;
    }
  }

  .twinkling {
    background: transparent url(http://www.script-tutorials.com/demos/360/images/twinkling.png) repeat top center;
    z-index: 1;

    animation: move-twink-back 200s linear infinite;
  }
`;
