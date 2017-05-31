var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt('')


 function knapsack(capacity, supplies) {
      supplies = supplies.sort(comp);
      var i = 0;
      var t = 0;
      while (capacity > 0) {
        if(supplies[i].weight <= capacity){
           t += supplies[i].value;
           capacity = capacity - supplies[i].weight;
           i++;
        }
        else{
          t += capacity/supplies[i].weight * supplies[i].value;
          capacity = 0;
        }
      }
    return t.toFixed(4);
 }

function comp(a,b) {
  var wvA = a.value / a.weight;
  var wvB = b.value / b.weight;

  return wvB - wvA;
}

rl.prompt();
var count = 0
var arr = [];
var num = 0;
var cap = 0;
rl.on('line',(line) =>{
  if(count == 0){
    num = parseInt(line.split(' ')[0]);
    cap = parseInt(line.split(' ')[1]);
    count++;
    //rl.prompt();
  }
  else if (count < num) {
    var Obj = new Object();
    Obj.value = parseInt(line.split(' ')[0]);
    Obj.weight = parseInt(line.split(' ')[1])
    arr.push(Obj);
    count++;
  }
  else {
    var Obj = new Object();
    Obj.value = parseInt(line.split(' ')[0]);
    Obj.weight = parseInt(line.split(' ')[1])
    arr.push(Obj);
    rl.close()
  }
})

rl.on('close', () => {
  console.log(knapsack(cap, arr));
})
