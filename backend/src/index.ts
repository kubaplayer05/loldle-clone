import express from "express"
import dotenv from "dotenv";
import cors from "cors"
import championRouter from "./routes/championRoute";

dotenv.configDotenv()

const app = express()
const port = process.env.PORT || 8000

app.use(cors())
app.use(express.json())

app.use("/api/champion", championRouter)

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});