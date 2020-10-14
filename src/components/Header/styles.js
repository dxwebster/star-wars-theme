import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background: ${(props) => props.theme.colors.primary};

  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;

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
  background: #30c2ff;
  border-radius: 50px;
  padding: 10px 30px;
  cursor: pointer;
  font-size: 20px;
  outline: none;
  transition: 300ms;

  &:hover {
    background: ${shade(0.2, '#30c2ff')};
  }
`;
