const readline = require('readline');

// интерфейс ввода
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculating (lines_arr) {
    let n, k;
    [ n, k ] = lines_arr[0].split(' ').map(Number);
    arr = lines_arr[1].split(' ').map(Number);
    

    return lines_arr;
}

// ожидаемое количество строк | массив строк | текущее количество строк
let numLines = 2;
let lines = [];
let currentLine = 0;

// поток ввода
rl.on('line', line => {
  lines.push(line.trim());
  currentLine++;

  if (currentLine === numLines) {
    console.log(calculating(lines));


    rl.close();
  }
});