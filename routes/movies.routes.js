import express from "express"
import { movieIndex, movieCreate, movieUpdate, movieDelete } from "../controller/movie.controller.js";

const router = express.Router();

router.get("/movie", movieIndex);

router.post("/movie", movieCreate);

router.put("/movie/:id", movieUpdate);

router.delete("/movie/:id", movieDelete);

export default router;