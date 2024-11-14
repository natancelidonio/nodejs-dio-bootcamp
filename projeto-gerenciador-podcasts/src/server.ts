import * as http from "http";

import {getFilterEpisodes, getListEpisodes} from "./controllers/podcasts-controller";

const server = http.createServer( 
    async (req: http.IncomingMessage, res: http.ServerResponse) => {
        
        //querystring
        const [baseUrl, querystring] = req.url?.split("?") ?? ["", ""];
        //listar todos podcasts
        if(req.method === "GET" && baseUrl === "/api/list") {
            await getListEpisodes(req, res);
        };
        //filtrar podcasts
        if(req.method === "GET" && baseUrl === "/api/episode") {
            await getFilterEpisodes(req, res);
        };
    }
);

const port = process.env.PORT;

server.listen(port, ()=>{
    console.log(`Servidor iniciado na porta ${port}`);
});