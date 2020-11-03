require("dotenv").config()
const path = require("path")
const express = require("express")
const cors = require("cors")

const app = express()
const dirPath = path.join(__dirname, "/");

app.use(cors())
app.use(express.static(dirPath));



app.get("/", (req, res) => {
    res.sendFile("./index.html")
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})