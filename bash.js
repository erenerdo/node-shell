let command = require('./command.js');
var done = function (cmd, output){
  if (command[cmd]) {
      command[cmd](output);
  } else {
    console.log('Command not found');
  }
};

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(),
  args = null,
  checkIfArgs = cmd.split(' '); // remove the newline
  if (checkIfArgs.length > 1){
    cmd = checkIfArgs[0];
    args = checkIfArgs.slice(1).join(' ');
  }
  // console.log(cmd);
  done(cmd, args);
});

