import React, { useEffect, useState } from 'react';

import { Container, Header, SearchButton, Content, Card } from './styles';

import logoImg from '../../assets/logo.png';
import Loading from '../../components/Loading';
import SwitchButton from '../../components/SwitchButton';
import Background from '../../components/Background';
import Poster from '../../components/Poster';

function App() {
  const [loading, setLoading] = useState(true);
  const [movieData, setMovieData] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [movieNumber, setmovieNumber] = useState('');

  useEffect(() => {
    newMovie();
  }, []);

  async function newMovie() {
    try {
      setLoading(true);

      const movieNumber = Math.floor(Math.random() * 5) + 1;
      const url = `https://swapi.dev/api/people/${movieNumber}`;
      setmovieNumber(movieNumber);

      const response = await fetch(url);
      const data = await response.json();

      setMovieData(data);

      setLoading(false);
    } catch (error) {
      console.error(error);
      setErrorMessage('Não foi possivel obter os filmes. Volte mais tarde');
    }
  }

  return (
    <>
      <Container>
        <Background />
        <Header>
          <SwitchButton>Change Theme</SwitchButton>
          <div>
            <SearchButton onClick={newMovie}>Buscar</SearchButton>
            <img src={logoImg} alt="Star Wars" />
          </div>
        </Header>

        <Content>
          {loading ? (
            <Loading />
          ) : (
            <Card>
              <div className="card">
                <Poster className="poster" movieNumber={movieNumber} />

                <section className="description">
                  <h1>{movieData.name}</h1>
                  <li>Episódio: {movieData.episode_id}</li>
                  <li>Diretor: {movieData.director}</li>
                  <li>Data de Lançamento: {movieData.release_date}</li>
                </section>
              </div>
            </Card>
          )}
          {errorMessage && <p className="error">{errorMessage}</p>}
        </Content>
      </Container>
    </>
  );
}

export default App;
