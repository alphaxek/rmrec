#!/usr/bin/env node

const fsPromises = require('fs').promises;
const [,, ...args] = process.argv;
  
(async function main() {
    //Log progress
    console.log(`Deleting ${args}`);
    
    try {
        //Remove directory
        fsPromises.rm(args[0], { recursive: true, force: true });
    } catch (err) {
        //Log error
        console.error("Delete command could not be executed : ", err);
        return
    }
})();