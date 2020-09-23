import React, {useState} from 'react';

import { Container } from "./styles"

import Post1 from '../../assets/01.jpg';
import Post2 from '../../assets/02.jpg';
import Post3 from '../../assets/03.png';
import Post4 from '../../assets/04.jpg';
import Post5 from '../../assets/05.jpg';
import Post6 from '../../assets/06.jpg';

export default function Poster({movieNumber}) {

    const [moviePoster, setMoviePoster] = useState('');

    

    return(
        <Container className="poster">
            <img src={moviePoster} alt="Star Wars" />
        </Container>
    )
}





// 1--m4
// 2--m5
// 3--m6


// 4--m1
// 5--m2
// 6--m3
