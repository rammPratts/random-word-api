const express = require("express")

const {getRandomWord} = require("./words")

const app = express()
const port = process.env.PORT || 3000

app.get("/", (req, res) =>{
    const wordCount = parseInt(req.query.wordCount)
    console.log(typeof wordCount, wordCount)
    res.send(getRandomWord(wordCount))
})

app.listen(port, () => {
    console.log("Server is... up!")
})