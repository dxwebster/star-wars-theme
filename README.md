<p align=center>

<h5 align=center>
<img src="readme/Capa.gif"><br>

🎨 Design por [Adriana Lima](https://github.com/dxwebster)

</h5>

</p>

---

## 🔖 Sobre

Essa é uma aplicação que traz o nome e descrição de alguns personagens do Star Wars para praticar alguns conceitos do ReactJS, como:

- Consumo de Fake API com Json Server
- Mudaça de Temas com Theme Provider do Styled Components

## 📥 Executar esse projeto no seu computador

- Clonar Repositório: `git clone https://github.com/dxwebster/Star-Wars-Info.git`
- Ir para a pasta: `cd Star-Wars-Info`
- Instalar dependências: `yarn`
- Rodar Aplicação: `yarn start`

## 🛠 Como criar esse projeto do zero

Para buscar as informações dos nossos personagens, vamos criar uma fake API. Ela é uma ótima alternativa para criar aplicações frontend sem depender de um backend externo para te trazer os dados.

Para criar uma fake API vamos criar um arquivo em json comm nome 'server.json' na raíz da nossa aplicação. Ele vai conter todas as informações que queremos que sejam rederizadas na nossa aplicação.

Neste caso, vamos separar em dois array de objetos, um para personagens "Light Side" e outro para personagens "Dark Side".

```json
{
  "light": [
    {
      "id": 1,
      "name": "Luke Skywalker",
      "description": "Luke Skywalker é o protagonista da trilogia original da série Star Wars. Um personagem essencial e importante na luta da Aliança Rebelde contra o Império Galáctico, é o irmão gêmeo da líder rebelde Princesa Leia Organa.",
      "image": "https://ik.imagekit.io/dxwebster/1_XmVhxmXqX.png"
    },
    {
      "id": 2,
      "name": "R2-D2",
      "description": "R2-D2 é um pequeno robô e um dos principais personagens da saga Star Wars. Ele é um droide astromecânico, responsável por manutenção e navegação de astronaves.",
      "image": "https://ik.imagekit.io/dxwebster/3_agXGAunj_.png"
    }
  ],

  "dark": [
    {
      "id": 1,
      "name": "Darth Vader",
      "description": "Anakin Skywalker foi seduzido pelo lado negro da Força, tornou-se Darth Vader e liderou a erradicação da Ordem Jedi pelo Império. Ele permaneceu a serviço do Imperador por décadas e tentando acabar com a Aliança Rebelde.",
      "image": "https://ik.imagekit.io/dxwebster/4_A9Vt8Sitk.png"
    },
    {
      "id": 2,
      "name": "Kylo Ren",
      "description": "Ben Solo, que mais tarde assumiu o nome de Kylo Ren, é filho da Princesa Leia com Han Solo e possui uma relação complicada com a protagonista Rey, a neta do Imperador, sendo ela sua principal rival, ao mesmo tempo em que eles progressivamente começam a se apaixonar um pelo outro.",
      "image": "https://ik.imagekit.io/dxwebster/7_GvhkVsNWK.png"
    }
  ]
}
```

Agora vamos instalar a lib que vai permitir ler esses dados. Basta executar `yarn add json-server` e depois rodar o comando `yarn json-server server.json -p 3333` para rodar nosso servidor.

Para depois controlar nossa chamada a API, vamos utilizar o axios. Vamos instalá-lo com o comando `yarn add axios` e depois criar uma pasta 'services' e dentro um arquivo 'api.js'. Nele vamos setar nosso servidor, neste caso o localhost.

```js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;
```

Agora em qualquer parte da aplicação que eu quiser consumir algum dado da api, basta importar a api deste arquivo e utilizar os métodos http (get, push, delete, etc). Vamos ver com mais detalhes mais pra frente.

## 📕 Licença

Todos os arquivos incluídos aqui, incluindo este _Readme_, estão sob Licença MIT.<br>
Criado com ❤ por [Adriana Lima](https://github.com/dxwebster)
