import React from 'react';

import { Container } from "./styles"

function Card( {movieData, newMovie}) {
    console.log(movieData)
    
    return(
        <Container>
            <div className="card">
                <section>
                    <h1>{movieData.title}</h1>
                    <li>Episódio: {movieData.episode_id}</li>
                    <li>Diretor: {movieData.director}</li>
                    <li>Data de Lançamento: {movieData.release_date}</li>
                </section>

                <button type="submit" onClick={newMovie}> Pesquisar </button>
            </div>
        </Container>
    )
      
}

export default Card;