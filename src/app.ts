import express from "express"
import { routes } from "./routers/user.routers"

const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(3333)