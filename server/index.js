const express = require("express")

const {getRandomWord} = require("./words")

const app = express()
const port = process.env.PORT || 3000

app.get("/", (req, res) =>{
    const wordCount = parseInt(req.query.wordCount)
    const word = getRandomWord(wordCount) 
    word ? res.send(word) : res.send({error: "invalid word count"})
})

app.listen(port, () => {
    console.log("Server is... up!")
})