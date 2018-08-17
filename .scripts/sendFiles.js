const fs = require('fs')
const fetch = require('node-fetch')

let obj = {
    githubLink:'',
    response:{
        eslintMessage:'',
        eslintFail:'',
        unitTestMessage:'',
        unitTestFail:'',
    }
}

let fs1 = new Promise ((resolve) => {fs.readFile('./tmp/gitPath.txt', 'utf-8', function read(err, data) {
    if (err) {
        throw err;
    }
    resolve(data);
})});

let fs2 = new Promise ((resolve) => {fs.readFile('./tmp/eslintMessage.json', 'utf-8', function read(err, data) {
    if (err) {
        throw err;
    }
    resolve(data);
})});

let fs3 = new Promise ((resolve) => {fs.readFile('./tmp/eslintFail.txt', 'utf-8', function read(err, data) {
    if (err) {
        throw err;
    }
    resolve(data);
})});

let fs4 = new Promise ((resolve) => {fs.readFile('./tmp/unitTestMessage.json', 'utf-8', function read(err, data) {
    if (err) {
        throw err;
    }
    resolve(data);
})});

let fs5 = new Promise ((resolve) => {fs.readFile('./tmp/unitTestFail.txt', 'utf-8', function read(err, data) {
    if (err) {
        throw err;
    }
    resolve(data);
})});

const sendFilesToDB = (obj) => {
	console.log(obj)
    fetch ('https://laboratoria-la-dev-ivan.firebaseapp.com/submissions', {
        method: 'POST',
        body: JSON.stringify(obj),
    }).then((res) => {return res.json()}).then((res) => {console.log(res)}).catch((res) => {console.log('catc==>', res)});
}

Promise.all([fs1, fs2, fs3, fs4, fs5])
    .then(([githubLink, eslintMessage, eslintFail, unitTestMessage, unitTestFail ]) => {
        const data = {
            githubLink,
            response: {
                eslintFail,
                eslintMessage: JSON.parse(eslintMessage),
                unitTestFail,
                unitTestMessage: JSON.parse(unitTestMessage)
            }
        };
        sendFilesToDB(data);
    });
