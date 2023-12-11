import express from "express";
import {getAllChampions, getRandomChampion} from "../controllers/championController";

const router = express.Router()

router.get("/all", getAllChampions)
router.get("/random", getRandomChampion)

export default router