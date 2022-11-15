#!/usr/bin/env node

const os = require("os");
const { exec } = require('node:child_process');
const [,, ...args] = process.argv;

const osVersion = os.version();

console.log(args);
  
if (osVersion.includes("Windows")){
    exec(`rd /s /q "${args[0]}"`, (err, res) => {
        //Callback function will be called after command execution
        if (err) {
            //Log error
            console.error("delete command could not be executed : ", err)
            return
        }
        //Log response
        console.log("Deleted \n", res)
    })
}else{
    exec(`rm -rf "${args[0]}"`, (err, res) => {
        //Callback function will be called after command execution
        if (err) {
            //Log error
            console.error("delete command could not be executed : ", err)
            return
        }
        //Log response
        console.log("Deleted \n", res)
    })
}