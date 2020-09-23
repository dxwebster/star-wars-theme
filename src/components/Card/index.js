import React from 'react';

import { Container } from "./styles"
import Poster from '../Poster'

export default function Card( {movieData, newMovie, movieNumber}) {
    
    return(
        <Container>
            <div className="card">
                
                <Poster className="poster" movieNumber={movieNumber}/>
                
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




