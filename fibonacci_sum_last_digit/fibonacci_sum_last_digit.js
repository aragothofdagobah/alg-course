var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});


function fibonacci(n) {
  n = parseInt(n)
  var list = new Array(n)
  list[0] = 0;
  list[1] = 1;
  var sum = 0;
  for(var x = 2; x <= n; x++){
    list[x] = (list[x-1] + list[x-2]);
    sum += list[x];
  }
  return sum;
}

rl.on('line',(num)=> {
  console.log(fibonacci(num));
  rl.close();
})
