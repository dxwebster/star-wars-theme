import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
  z-index: 999;

  div {
    display: flex;
    align-items: center;
    gap: 30px;

    img {
      width: 150px;
      margin-right: 30px;
    }
  }
`;
