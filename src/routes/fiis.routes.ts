import { application, Router } from "express";
import Fiis from "../models/Fiis";
import CreateFiisService from "../services/Fiis/CreateFiisService";

const fiisRouter = Router();


fiisRouter.post('/', async (request, response) => {
    const Fii:Fiis = request.body;

    const createFii = new CreateFiisService();

    const fii = await createFii.execute(Fii);

    return response.json(fii);
});