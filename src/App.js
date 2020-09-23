import React, { useEffect, useState } from 'react';

import { Container } from "./styles/App"

import logoImg from './assets/logo.png';
import Loading from './components/Loading'
import Card from './components/Card'

function App() {

  const [loading, setLoading] = useState(true);
  const [movieData, setMovieData] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [movieNumber, setmovieNumber] = useState('');
    
  useEffect(() => {
      newMovie();
  }, []) 


  async function newMovie(){
      try {
        setLoading(true)
        
        const movieNumber = Math.floor(Math.random() * 6) + 1 
        const url = `https://swapi.dev/api/films/${movieNumber}`
        setmovieNumber(movieNumber)

        const response = await fetch(url)
        const data = await response.json(); 

        setMovieData(data)
        
        setLoading(false)

      } catch (error) {
        console.error(error)
        setErrorMessage('Não foi possivel obter os filmes. Volte mais tarde' );
      }
  }
  
    return (
      <Container>
        <div className="wrap">
          <img src={logoImg} alt="Star Wars" className="logo"/>
          
          {loading ? <Loading />  : <Card movieData={movieData} newMovie={newMovie} movieNumber={movieNumber}/>}

          {errorMessage && <p className="error">{errorMessage}</p>}
        </div>
      </Container>
  
    )}

export default App;
