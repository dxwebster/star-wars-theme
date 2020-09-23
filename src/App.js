import React, { useEffect, useState } from 'react';
import './styles/App.css';


import api from './services/api';

function App() {

  // Consumindo API Utilizando o Axios
  const [repository, setRepository] = useState('');

  useEffect(() => {

    async function getContent() {
      try {
        const response = await api.get(`repos/facebook/react`);
        const responseData = response.data
        setRepository(responseData) 

        console.log(response.data.owner)

      } catch (error) {
        console.error(error)
      }
    }
    getContent();
  }, [])


  // Consumindo API Utilizando o Fetch
  const [movieData, setMovieData] = useState('');

  useEffect(() => {
    newMovie();
  }, []) 


  async function newMovie(){
    try {
      const movieNumber = Math.floor(Math.random() * 6) + 1
      const url = `https://swapi.dev/api/films/${movieNumber}`

      const response = await fetch(url)
      const data = await response.json(); 

      setMovieData(data)

    } catch (error) {
      console.error(error)
      const message = document.querySelector('main')
      message.innerHTML = `<p class='error'>Desculpe, não foi possível carregar os dados.</p>`
    }
  }

    return (
      <div className="app">

        <main>
          <section>
            <h1> Listando informações de um Repositório do Github</h1>
            <p>Consumindo API do github utilizando o Axios</p>

            <li>Nome do Repositório: {repository.full_name}</li>
            <li>Descrição: {repository.description}</li>
            <li>Login: {repository.login}</li>
            <li>Open Issues: {repository.open_issues}</li>
            <li>Login: {repository.owner && repository.owner.login}</li>
          </section>

          
          <section>
            <h1> Lista de movies do Star Wars</h1>
            <p>Consumindo API do github utilizando o Fetch</p>

            <li>Nome do Filme: {movieData.title}</li>
            <li>Episódio: {movieData.episode_id}</li>
            <li>Diretor: {movieData.director}</li>
            <li>Data de Lançamento: {movieData.release_date}</li>
          </section>

          <button type="submit" onClick={newMovie}> Pesquisar </button>

        </main>

      </div>
    );

}

export default App;
