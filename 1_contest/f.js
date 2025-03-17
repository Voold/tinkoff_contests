const readline = require('readline');

// интерфейс ввода
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let counter = 0;

function merge(left, right){
  let i, j, arr;
  i = 0;
  j = 0;
  arr = []

  while (i < left.length || j < right.length){

    if (i == left.length) {
      arr.push(right[j]);
      j++;
      continue;
    }

    if (j == right.length) {
      arr.push(left[i]);
      // counter += left.length - i;
      // console.log(`counter: ${counter} - [${left[i]}] | ${arr}`);
      i++;
      continue;
    }

    // if (left[i] > right[j]){
    //   counter++;
    //   console.log(`counter: ${counter} - [${left[i]}] [${right[j]}]`);
    // }


    if (left[i] <= right[j]){
      arr.push(left[i]);
      i++;
    } else {
      counter += left.length - i;
      arr.push(right[j]);
      j++;
    }
    
  }

  return arr
}

function mergeSort(arr) {
  if (arr.length <= 1){
    return arr;
  }
  let half = Math.ceil((arr.length / 2));
  let left, right;
  left =  mergeSort (arr.slice(0,half))
  right = mergeSort (arr.slice(half))

  return merge(left, right);
}

function calculating (lines_arr) {
    let n;
    n = +lines_arr[0];
    arr = lines_arr[1].split(' ').map(Number);

    return mergeSort(arr);
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
    let ans = calculating(lines).join(" ");

    console.log(counter);
    console.log(ans);

    rl.close();
  }
});