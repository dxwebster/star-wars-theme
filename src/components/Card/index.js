import React, { useEffect, useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { Container } from './styles';
import Loading from '../../components/Loading';

import api from '../../services/api';

export default function Card() {
  const [loading, setLoading] = useState(true);

  const [characterData, setCharacterData] = useState('');
  const [characterId, setCharacterId] = useState(1);

  const [errorMessage, setErrorMessage] = useState('');

  const { title } = useContext(ThemeContext);

  useEffect(() => {
    loadCharacter();
  }, [characterId, title]);

  const nextbutton = document.getElementById('proximo');
  const prevbutton = document.getElementById('anterior');

  function handleIncrementId() {
    prevbutton.style.opacity = '1';
    prevbutton.style.cursor = 'pointer';

    if (characterId === 3) {
      nextbutton.style.opacity = '0.5';
      nextbutton.style.cursor = 'default';
    }

    if (characterId > 3) return;
    setCharacterId(characterId + 1);
  }

  function handleDecrementId() {
    nextbutton.style.opacity = '1';
    nextbutton.style.cursor = 'pointer';

    if (characterId === 2) {
      prevbutton.style.opacity = '0.5';
      prevbutton.style.cursor = 'default';
    }

    if (characterId < 2) return;
    setCharacterId(characterId - 1);
  }

  const loadCharacter = async () => {
    try {
      setLoading(true);

      const response = await api.get(`/${title}/${characterId}`);
      setCharacterData(response.data);

      setLoading(false);
    } catch (error) {
      console.error(error);
      setErrorMessage('Não foi possivel obter os personagens.');
    }
  };

  return (
    <Container>
      <button onClick={handleDecrementId} id="anterior">
        Anterior
      </button>
      <main>
        {loading ? (
          <Loading />
        ) : (
          <>
            <div>
              <img src={characterData.image} alt={characterData.name} />
            </div>

            <span>
              <h1>{characterData.name}</h1>
              <li>{characterData.description}</li>
            </span>
          </>
        )}

        {errorMessage && <p className="error">{errorMessage}</p>}
      </main>

      <button onClick={handleIncrementId} id="proximo">
        Próximo
      </button>
    </Container>
  );
}
