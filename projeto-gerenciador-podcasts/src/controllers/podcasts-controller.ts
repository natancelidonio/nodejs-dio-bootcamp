import {IncomingMessage, ServerResponse} from "http";
import {serviceListEpisodes} from "../services/list-episodes-service";
import {serviceFilterEpisodes} from "../services/filter-episodes-service";
import { statusCode } from "../utils/status-code";
import { contentType } from "../utils/contentType";

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content = await serviceListEpisodes();    
    res.writeHead(statusCode.OK, {'content-type': contentType.JSON});
    res.end(JSON.stringify(content));
};

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content = await serviceFilterEpisodes(req.url);
    res.writeHead(statusCode.OK, {'content-type': contentType.JSON});
    res.end(JSON.stringify(content));
}