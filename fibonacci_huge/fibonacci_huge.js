var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});


function fibonacci(n,m) {
  var a = 1;
  var b = 1;

  for(var x = 3; x <= n; x++){
    var c = a+b;
    a = b;
    b = c;
  }
  return b % (m * 10);
}

rl.on('line',(line)=> {
  var a = parseInt(line.toString().split(' ')[0]);
  var b = parseInt(line.toString().split(' ')[1]);
  console.log(fibonacci(a,b));
  rl.close();
})
