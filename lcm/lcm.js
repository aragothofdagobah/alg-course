var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

function lcm(a,b) {

  return( a* (b/gcd(a,b)))
}

function gcd(a,b) {
  if(b == 0){
    return a;
  }
  return gcd(b,(a%b));
}




rl.on('line', (line) => {
  var a = parseInt(line.toString().split(' ')[0]);
  var b = parseInt(line.toString().split(' ')[1]);
  console.log(lcm(a,b));
  rl.close();
})
