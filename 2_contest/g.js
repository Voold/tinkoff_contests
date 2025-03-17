const readline = require('readline');

//Задача G. Гоблины и очереди

// интерфейс ввода
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function premium(num){
  if (firstHalfStack.length == secondHalfStack.length) {

    temp.push(...secondHalfStack);
    secondHalfStack = [];
    secondHalfStack.push(...firstHalfStack.reverse());
    secondHalfStack.push(num);
    secondHalfStack.push(...temp);
    firstHalfStack = [];
    temp = [];
    // secondHalfStack.reverse();
    
  } else if (firstHalfStack.length > secondHalfStack.length) {

    let totalLength = firstHalfStack.length + secondHalfStack.length;

    temp.push(...secondHalfStack);
    secondHalfStack = [];

    for(let item of firstHalfStack.reverse()){

      if (((totalLength)%2 == 0 
                  && secondHalfStack.length == totalLength/2) || 
          ((totalLength)%2 != 0 
                  && secondHalfStack.length ==  temp.length + firstHalfStack.length- 1 - secondHalfStack.length)) {
                    secondHalfStack.push(num);
      }

      secondHalfStack.push(item);

    }

    firstHalfStack = [];
    secondHalfStack.push(...temp);
    temp = [];


  } else {

    let totalLength = firstHalfStack.length + secondHalfStack.length;

    temp.push(...secondHalfStack);
    secondHalfStack = [];

    secondHalfStack.push(...firstHalfStack.reverse());
    firstHalfStack = [];

    for(let item of temp){

      if (((totalLength)%2 == 0 
                  && secondHalfStack.length == totalLength/2) || 
          ((totalLength)%2 != 0 
                  && (secondHalfStack.length ==  temp.length - secondHalfStack.length 
                    || secondHalfStack.length + 1 ==  temp.length - secondHalfStack.length ||
                        secondHalfStack.length - 1 ==  temp.length - secondHalfStack.length) ) ||
          temp.length == 1 && secondHalfStack.length == 0) {
                    secondHalfStack.push(num);
      }

      secondHalfStack.push(item);


    }
    

    temp = [];

  }
}

function calculating (op, num) {

  switch (op) {
    case '+':
      firstHalfStack.push(+num);
      break;
    case '*':
      premium(+num);
      break;
    case '-':
      if ( secondHalfStack.length === 0 ){
        secondHalfStack.push(...firstHalfStack.reverse());
        firstHalfStack = [];
      }
      ans.push(secondHalfStack.pop());
      break;
  }

    return;
}

// ожидаемое количество строк | массив строк | текущее количество строк
let numLines = 2;
let ans = [];

let firstHalfStack = []; 
let secondHalfStack = [];
let temp = [];

let currentLine = 0;

// поток ввода
rl.on('line', line => {
  if (currentLine != 0){
    calculating(...line.trim().split(' '));
  } else {
    numLines = +line.trim() + 1;
  }

  currentLine++;

  if (currentLine === numLines) {
    for (let item of ans){
      process.stdout.write(item + '\n');
    }
    rl.close();
  }
});