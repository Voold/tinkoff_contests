let msg = "msg";

function fmsg(){
    
    console.log(msg);

    console.log(msg);

    console.log(msg);

    console.log(msg);

}

const readline = require('readline');

// интерфейс ввода
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ожидаемое количество строк | массив строк | текущее количество строк
let numLines = 1;
let lines = [];
let currentLine = 0;

// поток ввода
rl.on('line', line => {
  lines.push(line.trim());
  currentLine++;

  if (currentLine === numLines) {
    
    fmsg()

    rl.close();
  }
});