import React, { useEffect, useState } from 'react';

import { Container, SearchButton } from './styles';
import Loading from '../../components/Loading';

import Background from '../../components/Background';

import api from '../../services/api';

export default function Card() {
  const [loading, setLoading] = useState(true);

  const [characterData, setCharacterData] = useState('');
  const [characterId, setCharacterId] = useState(1);

  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    loadCharacter();
    console.log(characterId);
  }, [characterId]);

  function handleIncrementId() {
    if (characterId > 3) return;
    setCharacterId(characterId + 1);
  }

  function handleDecrementId() {
    if (characterId < 2) return;
    setCharacterId(characterId - 1);
  }

  const loadCharacter = async () => {
    try {
      setLoading(true);

      const response = await api.get(`/lightCharacter/${characterId}`);
      setCharacterData(response.data);

      setLoading(false);
    } catch (error) {
      console.error(error);
      setErrorMessage('Não foi possivel obter os personagens. Volte mais tarde');
    }
  };

  return (
    <Container>
      <SearchButton onClick={handleDecrementId}>Anterior</SearchButton>
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

      <SearchButton onClick={handleIncrementId}>Próximo</SearchButton>
    </Container>
  );
}
