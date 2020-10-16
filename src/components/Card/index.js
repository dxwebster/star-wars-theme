import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import Loading from '../../components/Loading';

import api from '../../services/api';

export default function Card() {
  const [loading, setLoading] = useState(true);

  const [characterData, setCharacterData] = useState('');
  const [characterId, setCharacterId] = useState(1);

  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    loadCharacter();
  }, []);

  function handleIncrementId() {
    if (characterId > 3) return;
    setCharacterId(characterId + 1);

    loadCharacter();

    console.log(characterId);
  }

  function handleDecrementId() {
    if (characterId < 1) return;
    setCharacterId(characterId - 1);

    loadCharacter();

    console.log(characterId);
  }

  const loadCharacter = async () => {
    try {
      setLoading(true);

      const response = await api.get(`/character/${characterId}`);
      setCharacterData(response.data);

      setLoading(false);
    } catch (error) {
      console.error(error);
      setErrorMessage('Não foi possivel obter os personagens. Volte mais tarde');
    }
  };

  return (
    <Container>
      <button onClick={handleDecrementId}>Anterior</button>
      {loading ? (
        <Loading />
      ) : (
        <>
          <img src={characterData.image} alt={characterData.name} />

          <div>
            <h1>{characterData.name}</h1>
            <li>Descrição: {characterData.description}</li>
            <li>Preço: {characterData.price}</li>
          </div>
        </>
      )}

      {errorMessage && <p className="error">{errorMessage}</p>}

      <button onClick={handleIncrementId}>Próximo</button>
    </Container>
  );
}
