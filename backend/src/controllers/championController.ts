import {Request, Response} from "express";
import {MongoClient} from "mongodb"
import {configDotenv} from "dotenv";
import getRandomNumber from "../utils/getRandomNumber";

configDotenv()

const dbUrl = process.env.DB_URL || ""
const client = new MongoClient(dbUrl)

export const getAllChampions = async (req: Request, res: Response) => {

    try {
        await client.connect()

        const database = client.db("lol")
        const collection = database.collection("champions")

        const cursor = collection.find()
        const champions = []

        for await (const champion of cursor) {
            champions.push(champion)
        }

        await client.close()

        return res.status(200).json(champions)
    } catch (err) {
        console.error(err)
        return res.status(400).json({
            "error": err,
            "msg": "could not query champions"
        })
    }
}

export const getRandomChampion = async (req: Request, res: Response) => {

    try {
        await client.connect()

        const database = client.db("lol")
        const collection = database.collection("champions")

        const cursor = collection.find()
        const champions = []

        for await (const champion of cursor) {
            champions.push(champion)
        }

        await client.close()

        const randomIndex = getRandomNumber(champions.length)

        return res.status(200).json(champions[randomIndex])
    } catch (err) {
        console.error(err)
        return res.status(400).json({
            "error": err,
            "msg": "could not query champion"
        })
    }
}