const readline = require('readline');

//Задача A. Минимум на стеке

// интерфейс ввода
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function stack (operation, num, arr) {
    
    switch (operation) {
        case (1):
            li = arr.length - 1;
            if (arr.length === 0) {
                arr.push(num);
                break;
            }
            arr.push( Math.min(num, arr[li]) );
            break;
        case (2):
            arr.pop();
            break;
        case (3):
            ans.push(arr[arr.length - 1] + '\n');
            break;
    }

}

// ожидаемое количество строк | массив строк | текущее количество строк
let n = 1;
let lines = [];
let ans = [];
let currentLine = 0;
let op, num, li;


//поток ввода
rl.on('line', line => {

    if (!currentLine == 0){
        [op, num] = [...line.split(' ')];
        stack(+op, +num, lines)
    } else {
        n = + line.trim() + 1;
    }
    
    currentLine++;

    if (currentLine === n) {
        process.stdout.write(ans.join(''));
        rl.close();
    }
});

