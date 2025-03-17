const readline = require('readline');

// интерфейс ввода
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Отгадай число

function calculating (el) {
    
    if (el === "<"){
      right_pos = right_pos - Math.floor((right_pos-left_pos)/2);
    } 
    if (el === ">=") {
      left_pos = left_pos + Math.ceil((right_pos-left_pos)/2);
    }

    if (right_pos-left_pos === 1 || right_pos-left_pos === 0 ){

      if (right_pos != max_num){
        is_over = true; 
        return `! ${left_pos}`;
      }
      
      if (right_pos-left_pos === 0){
        is_over = true; 
        return `! ${right_pos}`;
      }
    }

    return Math.ceil(left_pos  + (right_pos-left_pos)/2);
}

let is_over = false;

let left_pos, right_pos, max_num;
max_num = 0;
left_pos = 1; 
right_pos = 0;


//Долбоебизм блять, нахуй ненужная хуйня
function flushStdout(text) {
  process.stdout.write(text + '\n');
  return new Promise(resolve => setTimeout(resolve, 0));
}

// поток ввода
rl.on('line', line => {
  //console.clear();
  
  if (max_num === 0){
    right_pos = +line;
    max_num =+line;
  }

  
  flushStdout(calculating (line));
  //console.log(`l_p: ${left_pos} r_p: ${right_pos}`)
  //console.log(calculating(line));

  if (is_over) {
    rl.close();
  }
});