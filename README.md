# SpaceX API Challenge

Neste repositório, você encontrará o frontend da minha solução para o desafio Fullstack SpaceX API. Ele inclui uma aplicação web que utiliza a API da SpaceX para exibir informações sobre os lançamentos de foguetes de forma atraente. Instruções estão disponíveis em [README](_general/instructions/README.md).

Para ver a apresentação do projeto em vídeo [clicke aqui](https://www.loom.com/share/385b4079440143ca9a36aa097beaa685?sid=a76a8918-7bd9-43b9-b752-765628fbc8a6).

## Front-end

### Tecnologias Utilizadas

- Next.js com React: O Next.js é uma poderosa extensão do React, usado para desenvolver interfaces de usuário interativas e reativas, incorporando facilidade de roteamento e renderização do lado do servidor (SSR).

- Tailwind CSS: O Tailwind CSS simplifica o desenvolvimento web com classes pré-definidas para estilização eficiente e personalizável.

- React Chartjs 2: Essa biblioteca é integrada para criar gráficos interativos e visualizações de dados com facilidade.

- Axios: O Axios é utilizado para efetuar chamadas HTTP a servidores e APIs externas, facilitando a busca e envio de dados, como informações de lançamentos da SpaceX.

- TypeScript: O TypeScript é a linguagem de programação usada no frontend, adicionando tipagem estática ao JavaScript para aprimorar a segurança e a manutenção do código.


### Como executar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/Renato1478/coodesh-spacex-frontend
```

2. Navegue para o diretório do projeto:

```bash
cd pasta/de/destino/do/projeto
```

3. Inicie os containers

```bash
docker-compose up
```

4. Ao finalizar o processo de inicialização do container, a aplicação estará disponível em http://localhost:3000.

### Aplicação

A página Home é o coração da aplicação, onde os gráficos e informações são mostrados aos usuários. A pasta components tem os principais arquivos.tsx que renderizam a interface, @core, os estilos foram feitos todos no próprio componente utilizando Tailwindcss, context trata das variáveis globais da aplicação e services trata de serviços externos, incluindo a consulta à API desenvolvida no projeto disponível em [backend](https://github.com/Renato1478/coodesh-spacex-backend)

A aplicação busca dados de estatísticas na API para preencher os gráficos e faz uma consulta separada para obter a lista paginada de lançamentos.

This is a challenge by Coodesh
