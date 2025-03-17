// const readline = require('readline');

// // интерфейс ввода
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// function calculating (lines_arr) {
    
//     return lines_arr;
// }

// // ожидаемое количество строк | массив строк | текущее количество строк
// let numLines = 2;
// let lines = [];
// let currentLine = 0;

// // поток ввода
// rl.on('line', line => {
//   lines.push(line.trim());
//   currentLine++;

//   if (currentLine === numLines) {

//     console.log(calculating(lines));

//     rl.close();
//   }
// });


// function solve() {
//     const readline = require('readline').createInterface({
//       input: process.stdin,
//       output: process.stdout
//     });
  
//     let N, K, numbers;
//     let lineCount = 0;
  
//     readline.on('line', (line) => {
//       lineCount++;
  
//       if (lineCount === 1) {
//         [N, K] = line.split(' ').map(Number);
//       } else if (lineCount === 2) {
//         numbers = line.split(' ').map(Number);
//         processData(N, K, numbers);
//         readline.close();
//       }
//     });
//   }
  
//   function processData(N, K, numbers) {
//     const dq = []; // Массив для хранения индексов
//     let result = "";
//     let windowStart = 0; // Индекс начала текущего окна
  
//     for (let i = 0; i < N; ++i) {
//       // Удаляем элементы из начала deque, если они вне текущего окна
//       while (dq.length > 0 && dq[0] < i - K + 1) {
//         dq.shift();
//       }
  
//       // Удаляем элементы из конца deque, если они больше текущего элемента
//       const currentNumber = numbers[i]; // Сохраняем numbers[i]
//       while (dq.length > 0 && numbers[dq[dq.length - 1]] > currentNumber) {
//         dq.pop();
//       }
  
//       dq.push(i); // Добавляем текущий индекс в deque
  
//       // Выводим минимальный элемент в текущем окне
//       if (i >= K - 1) {
//         result += numbers[dq[0]] + " ";
//       }
//     }
  
//     console.log(result.trim()); // Выводим результат
//   }
  
//   solve();