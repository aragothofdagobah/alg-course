var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

function gcd(a,b) {
  if(b == 0){
    return a;
  }
  return gcd(b,(a%b));
}

rl.on('line',(nums) =>{
  var a = parseInt(nums.toString().split(' ')[0], 10);
  var b = parseInt(nums.toString().split(' ')[1], 10);
  console.log(gcd(a,b));
  rl.close();
})
