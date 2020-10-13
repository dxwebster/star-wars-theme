import React from 'react';

import { Container } from "./styles"

export default function Poster({movieNumber}) {

    return(
        <Container className="poster">
            <img src={require(`../../assets/${movieNumber}.jpg`)} alt="Star Wars" />
        </Container>
    )
}
