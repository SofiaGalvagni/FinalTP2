import { Router } from "express";
import TemperatureController from "../controllers/temperatureController.js";

const temperatureRouter = Router();
const temperatureController = new TemperatureController();

temperatureRouter.get("/", temperatureController.getAllTemperatures);
temperatureRouter.get("/:id", temperatureController.getTemperatureById);
temperatureRouter.post("/", temperatureController.createTemperature);

export default temperatureRouter;
