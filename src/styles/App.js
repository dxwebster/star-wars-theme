import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: 100vh;
    background: #000;

    img{
      width:200px;
      margin-bottom: 50px;
    }
  
    .card {
      display: flex;
      flex-direction: column;
      justify-content: center;
  
      padding: 50px;
      border: 1px solid #fff;
      color: #fff;
  
      h1 {
        align-items: center;
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



`


  


