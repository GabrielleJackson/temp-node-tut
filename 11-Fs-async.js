const {readFile, writeFile} = require('fs');
console.log('start')
readFile('./content/first.txt', 'utf8', (err,result)=>{
    if(err) {
        console.log(err)
        return
    }
    const first = result;

    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if(err) {
            console.log(err)
            return
    }
    const second = result
    writeFile('./content/result-async.txt',
    `Here is the result : ${first}, ${second}`,
    (err, result) => {
        if(err){
            console.log(err)
            return
        }
        console.log('done with this task')
    })
})
})
console.log('starting next task')

//js will start a task offload and then start another task right away. callbacks makes the code messy. will show promises later
