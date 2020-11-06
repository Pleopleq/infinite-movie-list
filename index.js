require("dotenv").config()
const path = require("path")
const fs = require("fs")
const express = require("express")
const fetch = require('node-fetch');
const cors = require("cors");
const { json } = require("express");

const app = express()
const dirPath = path.join(__dirname, "/");

app.use(cors())
app.use(express.static(dirPath));

app.get("/", (req, res) => {
    res.sendFile("./index.html")
})

app.get("/movies/:id", (req, res) => {
    const API_KEY = process.env.API_KEY
    const page = req.params.id
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=batman&page=${page}&include_adult=false`)
    .then(res => res.json())
    .then(json => res.send(json))
})
 

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})