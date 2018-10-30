const express = require("express")

const words = require("./words")

const app = express()
const port = process.env.PORT || 3000

app.get("/", (req, res) =>{
    res.send(words)
})

app.listen(port, () => {
    console.log("Server is... up!")
})