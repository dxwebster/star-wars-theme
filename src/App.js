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
        setRepository(response.data) // pego as informações utilizando o data e coloca no respository

        console.log(response.data)

      } catch (error) {
        console.error(error)
      }
    }
    getContent();
  }, [])


  // Consumindo API Utilizando o Fetch
  const [planetData, setPlanetData] = useState('');

  useEffect(() => {

    async function getContent() {
      try {
        const planetNumber = Math.floor(Math.random() * 61) + 1
        const url = `https://swapi.dev/api/planets/${planetNumber}`

        const response = await fetch(url)
        const data = await response.json(); // precisa transformar as informações em Json e coloca no planetData

        setPlanetData(data)

      } catch (error) {
        console.error(error)
        const message = document.querySelector('main')
        message.innerHTML = `<p class='error'>Desculpe, não foi possível carregar os dados.</p>`
      }
    }

    getContent();
  }, []) 

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
            <li>Size: {repository.owner.login}</li>
          </section>

          
          <section>
            <h1> Lista de Planetas do Star Wars</h1>
            <p>Consumindo API do github utilizando o Fetch</p>

            <li>Nome do Planeta: {planetData.name}</li>
            <li>População: {planetData.population}</li>
            <li>Clima: {planetData.climate}</li>
            <li>Terreno: {planetData.terrain}</li>
          </section>

        </main>

      </div>
    );

}

export default App;
