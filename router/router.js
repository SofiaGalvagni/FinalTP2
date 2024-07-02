import { Router } from "express";
import temperatureRouter from "./temperatureRouter.js";

const router = Router();
router.use("/temperatura", temperatureRouter);

export default router;
