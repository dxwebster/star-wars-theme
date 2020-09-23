import React from 'react'

import { Container } from "./styles"

const Loading = () => (
    <Container>
        <div className='loading'>
            <div className="lds-circle"><div></div></div>
        </div>
    </Container>
)

export default Loading