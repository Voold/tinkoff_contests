const readline = require('readline');

// интерфейс ввода
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculating (lines_arr) {
    let n, k, sorted_arr, arr;
    [ n, k ] = lines_arr[0].split(' ').map(Number);
    arr = lines_arr[1].split(' ').map(Number);
    if (k === n) {
      return 10**9;
    }
    sorted_arr = arr.sort((a,b) => a-b);

    if (k === 0) {
      if (sorted_arr[0] === 0 || sorted_arr[0] === 1) {
        return -1;
      } else {
        return 1;
      }
  }

    return sorted_arr[k-1] != sorted_arr[k] ? sorted_arr[k-1] : -1;
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