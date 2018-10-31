const fs = require("fs")

const getWords = () => {
    const data = fs.readFileSync("./server/words-data.json")
    return JSON.parse(data)
}

const words = getWords()

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

const getRandomWord = (wordCount) => {
    const filter = []

    if(wordCount){
        words.forEach((word) => {
            if(word.wordCount === wordCount){
                filter.push(word)
            }
        })

        return filter[getRandomInt(0, filter.length)]
    }else{
        return words[getRandomInt(0, words.length)]  
    }

}

module.exports = {getRandomWord}