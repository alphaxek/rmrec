#!/usr/bin/env node

spawn = require('child_process').spawn;
const fs = require('fs');

const out = fs.openSync('./rmrec-out.log', 'a');
const err = fs.openSync('./rmrec-err.log', 'a');
const [,, ...args] = process.argv;

(async function main() {
    //Log progress
    console.log(`Started ${args}`);
    
    try {
         // Rename the directory
         const folder = args[0]+'-'+randomStr()+'[RMREC-DELETING]'
         fs.rename(args[0], folder, () => {
            console.log("Folder renamed & will be deleted in background!\n");
        });
        //Remove directory
        spawn('node', ['./node_modules/rmrec/index.js',folder], {
            stdio: [ 'ignore', out, err ],
            detached: true
        }).unref();
    } catch (err) {
        //Log error
        console.error("Delete command could not be executed : ", err);
        return
    }
})();

function randomStr() {
    const arr = '12345abcde';
    var ans = '';
    for (var i = 6; i > 0; i--) {
        ans += 
          arr[Math.floor(Math.random() * arr.length)];
    }
    return ans;
}