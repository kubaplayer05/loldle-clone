import {configDotenv} from "dotenv";
import getChampionsLink from "../scrapper/utils/getChampionsLink.js";
import getChampionData from "./utils/getChampionData.js";
import {MongoClient} from "mongodb";

configDotenv()

const dbUrl = process.env.DB_URL
const client = new MongoClient(dbUrl)

async function main() {

    try {

        await client.connect()

        const database = await client.db("lol")
        const collection = await database.collection("champions")

        await collection.deleteMany({})

        const championsLink = await getChampionsLink()

        for (const link of championsLink) {
            const champion = await getChampionData(link)
            await collection.insertOne(champion)
        }

    } finally {
        await client.close()
        console.log("Successfully operation")
    }
}

main().catch(err => {
    console.error(err)
})