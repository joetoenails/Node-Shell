const pwd = require("./pwd")
const ls = require("./ls")
const cat = require("./cat")

process.stdout.write('prompt > ')

process.stdin.on('data', (data)=>{

    let input = data.toString().trim()
    input = input.split(" ")
    const cmd = input[0]
    const arg = input[1]

    if (cmd==="pwd"){
        pwd.pwd()
    }
    else if (cmd==="ls"){
        ls()
    }
    else if (cmd==="cat"){
        cat(arg)
    }

})
