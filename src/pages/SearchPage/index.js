import React, { useEffect, useState } from 'react';

import { Container, Content, Card } from './styles';

import Header from '../../components/Header';
import Loading from '../../components/Loading';
import Background from '../../components/Background';
import Poster from '../../components/Poster';

import { ThemeProvider } from 'styled-components';

import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';

import GlobalStyle from '../../styles/global';

function App() {
  const [theme, setTheme] = useState(light);

  const [loading, setLoading] = useState(true);
  const [movieData, setMovieData] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [movieNumber, setmovieNumber] = useState('');

  useEffect(() => {
    newMovie();
  }, []);

  const newMovie = async () => {
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
  };

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        {/* <Background /> */}
        <Header toggleTheme={toggleTheme} newMovie={newMovie} />
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
    </ThemeProvider>
  );
}

export default App;
