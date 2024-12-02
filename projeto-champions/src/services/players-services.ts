import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
import * as PlayerRepository from "../repositories/players-repository";
import * as httpResponse from "../utils/http-helper";

export const getPlayerService = async () => {
    const data = await PlayerRepository.findAllPlayers();
    let response = null;
    if (data) {
        response = await httpResponse.ok(data);
    } else {
        response = await httpResponse.noContent();
    };
    return response;
};

export const getPlayerByIDService = async (id: number) => {
    //pedir ao repositório de dados
    const data = await PlayerRepository.findPlayerByID(id);
    let response = null;
    if (data) {
        response = await httpResponse.ok(data);
    } else {
        response = await httpResponse.noContent();
    }

    return response;
};

export const createPlayerService = async (player: PlayerModel) => {
    let response = null;
    //verificar se está vazio
    if (Object.keys(player).length !== 0) {
        await PlayerRepository.insertPlayer(player);
        response = await httpResponse.created();
    } else {
        response = await httpResponse.badRequest();
    }

    return response;
};

export const deletePlayerService = async (id: number) => {
    let response = null;
    await PlayerRepository.deleteOnePlayer(id);
    response = await httpResponse.ok({message: "Player deleted"});
    return response;
};

export const updatePlayerService = async (id: number, statistics: StatisticsModel) => {
    const data = await PlayerRepository.findAndModifyPlayer(id, statistics);
    let response = null;
    if (Object.keys(data).length === 0) {
        response = await httpResponse.badRequest()
    } else {
        response = await httpResponse.ok(data)
    };
    return response;
};