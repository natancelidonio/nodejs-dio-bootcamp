### Gerenciador de Podcast

#### Descrição

O **Gerenciador de Podcast** é uma aplicação ao estilo Netflix, desenvolvida para centralizar episódios de podcasts em vídeo, organizados por categorias. Ideal para quem busca uma experiência fluida e prática para encontrar e assistir seus podcasts favoritos.

---

## Recursos

### Funcionalidades
- **Listar episódios por categoria**  
  Exiba episódios de podcasts agrupados em categorias como *saúde*, *fitness*, *mentalidade*, *humor* e mais.
  
- **Filtrar episódios pelo nome do podcast**  
  Permita ao usuário localizar rapidamente episódios ao buscar pelo nome do podcast.

---

## Como Funciona

### Feature: Listar episódios por categoria
- **Endpoint:**  
  **GET** `/api/podcasts`
  
- **Descrição:**  
  Retorna uma lista de episódios, incluindo detalhes como nome do podcast, título do episódio, imagem de capa, link para o vídeo, e as categorias associadas.

- **Exemplo de Resposta (JSON):**
    ```json
    [
      {
        "podcastName": "Flow",
        "episode": "CBUM - Flow #319",
        "videoId": "pQSuQmUfS30",
        "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
        "categories": ["saúde", "esporte", "bodybuilder"]
      },
      {
        "podcastName": "Flow",
        "episode": "RUBENS BARRICHELLO - Flow #339",
        "videoId": "4KDGTdiOV4I",
        "cover": "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=4KDGTdiOV4I",
        "categories": ["esporte", "corrida"]
      }
    ]
    ```

### Feature: Filtrar episódios pelo nome do podcast
- **Endpoint:**  
  **GET** `/api/podcasts?p=[PODCASTNAME]`
  
- **Descrição:**  
  Retorna os episódios filtrados por nome do podcast.

---

## Tecnologias Utilizadas

- **Linguagem:**  
  - TypeScript

- **Plataforma:**  
  - Node.js

- **Arquitetura:**  
  - Sem frameworks, utilizando APIs REST.

---

## Como Executar

1. **Clone o repositório:**
   
2. **Instale as dependências:**
   
3. **Inicie o servidor:**
   
4. **Acesse os endpoints:**  


---

## Futuras Melhorias

- Adicionar paginação aos endpoints.
- Implementar autenticação para personalizar recomendações.
- Criar uma interface gráfica para facilitar o uso do sistema.

**Contribuições são bem-vindas!**