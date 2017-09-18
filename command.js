var fs = require('fs');
var request = require('request');


let nodeShortcuts = {};
// pwd logic
nodeShortcuts.pwd = function () {
  console.log(process.cwd());
  process.stdout.write('\nprompt > ');
};

// Date logic
let d = new Date();
nodeShortcuts.date = function (){
  console.log(d.toString());
  process.stdout.write('\nprompt > ');
};

nodeShortcuts.ls = function () {

  fs.readdir('.', function(err, files) {
    if (err) throw 'error';
    files.forEach(function(file) {
        process.stdout.write(file.toString() + '\n');
    });
    process.stdout.write('\nprompt > ');
  });
};
// Echo
nodeShortcuts.echo = function(arg){
  console.log(arg);
  process.stdout.write('\nprompt > ');
};

// Cat
nodeShortcuts.cat = function(filename) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
    process.stdout.write('\nprompt > ');
  });
};

nodeShortcuts.head = function (filename) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) throw err;

    let contents = data.split('\n');
    for (let i = 0; i < 10; i++) {
      console.log(contents[i]);
    }
    process.stdout.write('\nprompt > ');
  });
};


nodeShortcuts.tail = function (filename) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) throw err;

    let contents = data.split('\n');
    for (let i = contents.length - 11; i < contents.length; i++) {
      console.log(contents[i]);
    }
    process.stdout.write('\nprompt > ');
  });
};

nodeShortcuts.sort = function (filename) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) throw err;

    let contents = data.split('\n');
    contents = contents.sort();
    for (let i = 0; i < contents.length; i++) {
      console.log(contents[i]);
    }
    process.stdout.write('\nprompt > ');
  });
};

nodeShortcuts.wc = function (filename) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) throw err;

    let contents = data.split('\n');
    console.log('Length of file: ' + contents.length);
    process.stdout.write('\nprompt > ');
  });
};

nodeShortcuts.uniq = function (filename) {
  let set = new Set();

  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) throw err;

    let contents = data.split('\n');
    for (let i = 0; i < contents.length; i++) {
      if (!set.has(contents[i])) {
        console.log(contents[i]);
        set.add(contents[i]);
      }
    }
    process.stdout.write('\nprompt > ');
  });
};


nodeShortcuts.curl = function (URL) {
  request(URL, function (err, response, body) {
    if (err) throw Error;
    process.stdout.write(body);
    process.stdout.write('\nprompt > ');
  });
};


module.exports = nodeShortcuts;
