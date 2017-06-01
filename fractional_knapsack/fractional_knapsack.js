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
      //console.log(supplies);
      while (capacity > 0) {
        if(i == supplies.length){
          return t;
        }
        if(supplies[i][1] <= capacity){
           t += supplies[i][0];
           capacity = capacity - supplies[i][1];
           i++;
        }
        else{
          t += capacity/supplies[i][1] * supplies[i][0];
          capacity = 0;
        }
      }
    return t.toFixed(4);
 }

function comp(a,b) {
  vwA = a[0] / a[1];
  vwB = b[0] / b[1];
  if(vwA == vwB){
    return 0;
  }
  else {
    return (vwA < vwB) ? 1 : -1;
  }
}

function strsToInts(strs) {
  return strs.map((str) => {
    const int = parseFloat(str, 10);

    if (isNaN(int)) {
      throw new Error('stdin contains data that is not a number');
    }

    return int;
  });
}


function parseMultiLines(numLines, cb) {
  let linesNum = numLines;
  const rl = readline.createInterface({
    input: process.stdin,
    terminal: false,
  });

  const lines = [];
  rl.on('line', (line) => {
    if (line !== '\n') {
      const strs = line.toString().split(' ');
      const input = strsToInts(strs);

      if (linesNum === null && lines.length === 0) {
        linesNum = input[0] + 1;
      }

      lines.push(input);
    }

    if (lines.length === linesNum) {
      cb(lines);
      process.exit();
    }
  });
}

parseMultiLines(null, (input) => {
  var items = input.slice();
  const params = items.shift();
  const capacity = params.pop();
  console.log(knapsack(capacity, items));
});
