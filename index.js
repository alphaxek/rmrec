#!/usr/bin/env node

const fsPromises = require('fs').promises;
const [,, ...args] = process.argv;

//Log progress
console.log(`Deleting ${args}`);
  
(async function main() {
    try {
        fsPromises.rm(args[0], { recursive: true, force: true });
    } catch (err) {
        //Log error
        console.error("Delete command could not be executed : ", err);
        return
    }
})();