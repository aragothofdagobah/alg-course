const readline = require('readline');

process.stdin.setEncoding('utf8');

function strsToInts(strs) {
  return strs.map((str) => {
    const int = parseInt(str, 10);

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
  const items = input.slice();
  const params = items.shift();
  const capacity = params.pop();

  console.log(capacity, items);
});
