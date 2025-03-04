const readline = require('readline');

// интерфейс ввода
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Задача A. Двоичный поиск
// Реализуйте алгоритм бинарного поиска. Вам нужно ответить на несколько вопросов "Присутствует ли элемент x"в отсортированном массиве.

function binary_search (arr, element){
    let left_pos, right_pos, pointer;

    left_pos = 0;
    right_pos = arr.length-1;

    // console.log(arr);
    // console.log(element);
    
    for(;;){

        
        if (right_pos === left_pos){
            if (arr[right_pos] == element) {
                return "YES";
            }
            break;
        }
        
        pointer = Math.ceil((right_pos - left_pos)/2)
        
        // console.log(pointer +" "+ arr[pointer] +" | "+ element + ` l_pos:${left_pos} r_pos:${right_pos}`);
        
        if ( arr[left_pos+pointer] > element){
            right_pos-= pointer;
            if (arr[right_pos] === element){
                return "YES";
            }
        } if ( arr[left_pos+pointer] < element){
            left_pos += pointer;
            if (arr[left_pos] === element){
                return "YES";
            }
        } if ( arr[left_pos+pointer] === element) {
            // console.log(element + ' YES ' + arr[pointer] +" | "+ element);
            return "YES";
        }
    }

    // console.log(element + ' NO ' );
    return "NO";
    
} 

function calculating (lines_arr) {
    let n, k, sorted_arr, questions;
    [ n, k ] = lines_arr[0].split(' ').map(Number);
    sorted_arr = lines_arr[1].split(' ').map(Number);
    questions = lines_arr[2].split(' ').map(Number);

    if (k === 0) {
      return []
    }

    for (let i = 0; i < k; i++){

        if (
            questions[i] == sorted_arr[0] ||
            questions[i] == sorted_arr.at(-1)
        ){
            questions[i] = "YES";
            continue;
        }

        if (
            questions[i] < sorted_arr[0] ||
            questions[i] > sorted_arr.at(-1)
        ){
            questions[i] = "NO";
            continue;
        }

        questions[i] = binary_search(sorted_arr, questions[i]);

    }

    return questions;
}

// ожидаемое количество строк | массив строк | текущее количество строк
let numLines = 3;
let lines = [];
let currentLine = 0;

// поток ввода
rl.on('line', line => {
  lines.push(line.trim());
  currentLine++;

  if (currentLine === numLines) {
    for (let line of calculating(lines)){
        console.log(line);
    }

    rl.close();
  }
});