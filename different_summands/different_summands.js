const readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function dif_sum(n) {
    var array = [];
    if(n == 1 || n == 2){
      console.log(1);
      console.log(n);
    }
    else {
      array.push(1);
      n--;
      while(n > 0){
        let x = array[array.length - 1] + 1;
        let y = n - x;
        if (y > x) {
          array.push(x);
          n = n - x;
        }
        else {
          array.push(n);
          n = 0;
        }
      }
      var string = "";
      array.forEach((num) => {
        string = string + num + " ";
      })
      console.log(array.length);
      console.log(string);
      return 0;
    }
}


rl.on('line', (num) =>{
  dif_sum(num);
  rl.close();
})
