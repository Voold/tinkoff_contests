const readline = require('readline');

// интерфейс ввода
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculating (lines_arr) {
    let n, string, poly;
    n = +lines_arr[0]
    string = lines_arr[1].split('');
    
    poly = charMap (string)

    return poly;
}

function charMap (string) {
    let charMap = new Map();
    

    for (let char of string){
        if (charMap.has(char)){
            charMap.set(char, charMap.get(char) + 1);
            // if (charMap.get(char) > max_l && charMap.get(char)%2 != 0){
            //     max_l = charMap.get(char);
            //     giga_char = char;
            // }
        } else {
            charMap.set(char, 1);

        }
    }

    start = '';
    mid = '';

    max_l = 0;
    giga_char = ''
    for (let char of Array.from(charMap.keys()).sort()){
        if (charMap.get(char) > max_l && charMap.get(char)%2 != 0){
            max_l = charMap.get(char);
            giga_char = char;
        }
    }

    for (let char of Array.from(charMap.keys()).sort()){
        if (charMap.get(char)%2 == 0) {
            for (let i = 0; i < (charMap.get(char)/2); i++) {
                start += char;
            }
        } else if ( char != giga_char && charMap.get(char) - 1 >= 2 ) {
            for (let i = 0; i < ((charMap.get(char)-1)/2); i++) {
                start += char;
            }
        } else if ( char == giga_char) {
            for (let i = 0; i < Math.floor(charMap.get(char)/2); i++) {
                start += char;
            }
        }


        // if (charMap.get(char)%2 != 0 && charMap.get(char) == max_l && mid == '') {
            
        //     for (let i = 0; i < Math.floor(charMap.get(char)/2); i++) {
        //         start += char;
        //     }

        //     for (let i = 0; i < charMap.get(char) - 2*Math.floor(charMap.get(char)/2); i++) {
        //         mid += char;
        //     }
        // }
    }

    for (let i = 0; i < charMap.get(giga_char) - 2*Math.floor(charMap.get(giga_char)/2); i++) {
        mid += giga_char;
    }


    return start + mid + start.split('').reverse().join('');
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