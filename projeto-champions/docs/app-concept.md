## Projeto Champions


### Tecnologias
- Arquitetura N-Layers;
    - porta: 3333;
    - controllers: [
        players-controller,
        clubs-controller
        ];

    - services: [
        get api/players/{id},
        get api/players/list,
        post api/players,
        patch api/players/{id},
        delete api/players/{id},
        
        get api/clubs/list,
        ];

    - repositories: [
        getPlayerByID(),
        getListPlayers(),
        insertPlayer(),
        deletePlayerByID(),
        updatePlayerByID(),

        getListClubs(),
        ];

    - models: [
        Player-model,
        Club-model,
        ];

- TypeSript;

- Node.js;

- Express;