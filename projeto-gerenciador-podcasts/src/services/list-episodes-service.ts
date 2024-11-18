import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { statusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {
    //define o contrato
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    }

    //busca os dados efetivamente
    const data = await repositoryPodcast();
    
    //verifica o tipo de resposta
    if(data.length !== 0 ) { 
        responseFormat.statusCode = statusCode.OK;
    } else {
        responseFormat.statusCode = statusCode.NoContent;
    }
     
    responseFormat.body = data;

    return responseFormat;
}