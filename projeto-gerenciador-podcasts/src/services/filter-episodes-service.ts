import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { statusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<PodcastTransferModel> => {

    //define a interface de retorno
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    }
    
    // busca os dados
    const querystring = podcastName?.split("?p=")[1] || "";
    const data = await repositoryPodcast(querystring)

    //verifica se tem conteúdo
    if(data.length !== 0 ) { 
        responseFormat.statusCode = statusCode.OK;
    } else {
        responseFormat.statusCode = statusCode.NoContent;
    }
    responseFormat.body = data

    return responseFormat;
}