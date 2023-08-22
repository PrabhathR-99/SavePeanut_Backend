import { Router } from "express";
import { getPets, createPet } from "./../../controllers/pet";

const petRouter = Router();

petRouter.get("/", getPets).post("/", createPet);
petRouter.post("/", createPet);

export default petRouter;
