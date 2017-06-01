var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function dot(num, a, b) {
  while (a.length < num) {
    a.push(0);
  }
  while (b.length < num) {
    b.push(0);
  }
  a = a.sort();
  b = b.sort();
  var sum = 0;
  for(var x = 0; x < num; x++){
    sum += a[x] * b[x];
  }
  return sum;
}

var num = 0;
var arr;
var arr2;
rl.question('', (line) =>{
  num = parseInt(line);
  rl.question('', (line2) =>{
    arr = line2.split(' ');
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == '') {
        arr[i] = 0;
      }
      arr[i] = parseInt(arr[i]);
    }
    rl.question('', (line3) =>{
      arr2 = line3.split(' ');
      for (var i = 0; i < arr2.length; i++) {
        if (arr2[i] == ''){
          arr2[i] = 0;
        }
        arr2[i] = parseInt(arr2[i]);
      }
      console.log(dot(num, arr, arr2));
      rl.close();
    })
  })
})
