var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

function change(n) {
  var c = 0;
  while(n > 0){
    //console.log(n);
    if(n >= 10){
      //console.log('dime');
      c = c + 1;
      n = n - 10;
    }
    else if (n >= 5) {
      //console.log('nickel');
      c = c + 1;
      n = n - 5;
    }
    else {
      //console.log('penny');
      c = c + 1;
      n = n - 1;
    }
  }

  return c;
}

rl.on('line',(n)=> {
  console.log(change(n));
  rl.close();
})
