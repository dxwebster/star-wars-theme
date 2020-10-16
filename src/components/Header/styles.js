import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;

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

export const SearchButton = styled.button`
  color: white;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 50px;
  padding: 10px 30px;
  cursor: pointer;
  font-size: 20px;
  outline: none;
  transition: 300ms;
`;
