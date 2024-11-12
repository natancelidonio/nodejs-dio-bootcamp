# Gerenciador de Podcast

### Descrição
Um app ao estilo Netflix, aonde possamos centralizar diferentes episódios separados por categorias

### Domínio
Podcasts feitos em vídeo

### Features/Funcionalidades
- Listar os episódios em sessões de categorias
    - [saúde, fitness, mentalidade, humor]
- Filtrar os episódios por nome de podcast

## Como

### Feature:
- Listar os episódios em sessões de categorias

### Como vou implementar:
GET: Retorna em uma api rest (json) o nome do podcast, nome do episódio, imagem de capa, link, categorias;

RESPONSE:

    ```js
    [
        {
        podcastName: "Flow",
        episode: "CBUM - Flow #319",
        videoId: "pQSuQmUfS30",
        cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
        categories: ["saúde", "esporte", "bodybuilder",],
        },
        {
        podcastName: "Flow",
        videoId: "4KDGTdiOV4I",
        episode: "RUBENS BARRICHELLO - Flow #339",
        cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
        categories: ["esporte", "corrida",],
        },
    ]
    ```

## Tecnologias
- TypeScript
- Node.js
- Sem Frameworks
