import express from "express"
import { movieIndex, movieCreate, movieUpdate, movieDelete, movieDetails } from "../controller/movie.controller.js";

const router = express.Router();

router.get("/", movieIndex);

router.get("/:id", movieDetails)

router.post("/", movieCreate);

router.put("/:id", movieUpdate);

router.delete("/:id", movieDelete);

export default router;