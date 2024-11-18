import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositories/podcasts-repository"

export const serviceFilterEpisodes = async (podcastName: string | undefined) => {
    const querystring = podcastName?.split("?p=")[1] || "";

    const data = await repositoryPodcast(querystring)
    return data;
}