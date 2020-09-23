import React from 'react';

import { Container } from "./styles"
import Banner from '../../assets/banner.jpg';

function Card( {movieData, newMovie}) {
    console.log(movieData)
    
    return(
        <Container>
            <div className="card">
                <img src={Banner} alt="Star Wars" className="banner"/>
                
                <section className="description"> 
                    <h1>{movieData.title}</h1>
                    <li>Episódio: {movieData.episode_id}</li>
                    <li>Diretor: {movieData.director}</li>
                    <li>Data de Lançamento: {movieData.release_date}</li>
                    <button type="submit" onClick={newMovie}> Pesquisar </button>
                </section>
            </div>
        </Container>
    )
      
}

export default Card;