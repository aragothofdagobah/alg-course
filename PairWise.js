var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.question('How many numbers?', (res) => {
  res = parseInt(res) - 1;
  rl.on('line', (line) => {
    if (line !== "\n") {
      var arr = line.split(' ').sort();
      arr = arr.sort(function(a,b){
        return parseInt(a) - parseInt(b);
      });
      //console.log(arr);
      console.log(arr[res]  * arr[res-1]);
      process.exit();
    }
  });
});
