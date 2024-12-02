import { Request, Response } from "express";
import * as service from "../services/players-services";
import { noContent } from "../utils/http-helper";

export const getPlayer = async (req: Request, res: Response) => {
    const httpResponse = await service.getPlayerService();
    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerByID = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await service.getPlayerByIDService(id);
    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postPlayer = async (req: Request, res: Response) => {
    const bodyValue = req.body;
    const httpResponse = await service.createPlayerService(bodyValue);
    if (httpResponse) {
        res.status(httpResponse.statusCode).json(httpResponse.body);
    } else {
        const response = await noContent();
        res.status(response.statusCode).json(response.body);
    };
};

export const deletePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await service.deletePlayerService(id);

    res.status(response.statusCode).json(response.body);
};
