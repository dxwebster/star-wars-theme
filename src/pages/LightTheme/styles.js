import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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
            width:70%;
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
    
            li{
                list-style: none;
                padding: 5px 0
            }
        
            button{
                width: 200px;
                margin-top: 50px;
                cursor: pointer;
                border: 1px solid #fff;
                background: #000;
                padding: 20px;
                color: #fff;
                text-transform: uppercase;
                transition: 0.3s;
    
            &:hover{
                border: 1px solid #f7b80a;
                color: #f7b80a;
                background: #252525
            }

        }

        
    }
`;
