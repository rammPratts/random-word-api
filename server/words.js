const words = [{
    word: "hello",
    wordCount: 1
},{
    word: "salchipapa",
    wordCount: 1
},{
    word: "rio negro",
    wordCount: 2
}, {
    word: "ostia tio",
    wordCount: 2
}, {
    word: "de meno el fri",
    wordCount: 4
},{
    word: "el agus se la come",
    wordCount: 5
}]

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

console.log(getRandomWord())
module.exports = words