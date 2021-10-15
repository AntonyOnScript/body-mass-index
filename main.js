const readLine = require('readline')

const line = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

line.question("Tell me your Height: ", function(height) {
    line.question("Now tell me your weight: ", function(weight) {
        line.question(`Your Body Mass Index is ${Number(weight) / (Number(height) * Number(height))}`, function() {
            line.close()
        })
    })
})