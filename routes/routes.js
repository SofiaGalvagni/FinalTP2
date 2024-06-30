import { Router } from "express";

const routes = Router();

routes.post("/")
routes.get("/")
routes.delete("/")
routes.get("/all")
routes.get("/:parametro")

export default routes;