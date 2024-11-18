import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { httpMethod } from "./utils/http-methods";

export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {
        //querystring
        const baseUrl = req.url?.split("?")[0]; 
        //listar todos podcasts
        if (req.method === httpMethod.GET && baseUrl === Routes.LIST) {
            await getListEpisodes(req, res);
        };
        //filtrar podcasts
        if (req.method === httpMethod.GET && baseUrl === Routes.EPISODE) {
            await getFilterEpisodes(req, res);
        };
    }