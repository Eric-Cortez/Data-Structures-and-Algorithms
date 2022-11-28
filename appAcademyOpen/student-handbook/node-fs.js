//The Ins and Outs of File I/O in Node 

// File operations are reading and writing from are hard drive 

// read, write, and manipulate files on local files using the fs module 

// the fs module allows you to interact with our computer's File System. 
// No additional install is needed as it ships with Node 

// EXAMPLE

// 1) import the module 
// note fs did not work with ES6 syntax 
const { Console } = require('console');
const fs = require('fs');
// docs https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback



// 2) Create a new file 

// arguments (filename, test to be writen, encoding of characters utf8 is the most common, is a callback that will be invoked when the write operation is complete)

// fs.writeFile("foo.txt", "Hello World!", "utf8", err => {
//     if(err){
//         console.log(err);
//     }
//     console.log("write is complete.")
// })



// 3) Read existing files 

// fs.readFile("poetry.txt", "utf8", (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log("THE CONTENTS ARE:");
//     console.log(data);
// })

// You can now do whatever you want with the data such as split on to new lines and print
// fs.readFile("poetry.txt", "utf8", (err,data)=> {
//     if (err) {
//         console.log(err);
//     }
//     let lines = data.split("\n")
//     console.log("THE CONSTANTS ARE:");
//     console.log(lines);
//     console.log("The third line is " + lines[2]);
// })



// exercise 
// Our goal is to design a program to replace occurrences of the phrase 'do not' with the word 'should'. 

// fs.readFile("poetry.txt", "utf8", (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     const newData = data.replaceAll("do not", "should")

//     fs.writeFile("poetry.txt", newData, "utf8", err => {
//         if (err) {
//             console.log(err)
//         }
//         console.log("wrote to file successfully")
//     })
// })

//Refactor - As a bonus, we might also refactor this code to use named functions for better readability and generality:

// fs.writeFile(file, data, options/encoding (utf8), callback)

function replaceContents(file, oldStr, newStr) {

    fs.readFile(file, "utf8", (err, data)=> {
        if (err) {
            console.log("error: ", err)
        }
        const newData = data.replaceAll(oldStr, newStr)
        writeData(file, newData)
    })
}

function writeData(file, data) {

    fs.writeFile(file, data, err => {
        if (err){
            console.log("error: ", err)
        }
        console.log("done!")
    })
}


replaceContents("poetry.txt", "do not", "should")
// function successful !!

// WHAT I LEARNED: 
// I explored the fs module in particular: 
// - I learned about file I/O aka input/output via readFile and writeFile
// - I utilized callback chaining to edit files based on its existing content 