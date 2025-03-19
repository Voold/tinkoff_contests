
function main() {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    // CC - CowsCount
    let N, CC, numbers;
    let lineCount = 0;
  
    readline.on('line', (line) => {
      lineCount++;
  
      if (lineCount === 1) {
        [N, CC] = line.split(' ').map(Number);
      } else if (lineCount === 2) {
        numbers = line.split(' ').map(Number);
        cowsAndStables( CC, numbers);
        readline.close();
      }
    });
  }
  
  function cowsAndStables( CC, numbers) {
    let left = 0; // min dist
    let right = numbers.at(-1) - numbers[0]; // max dist
    let res;
    
    for(;left<=right;){
        let mid = Math.floor((left + right) / 2);
        if(canPlaceCows(CC, numbers, mid)){
            res = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }  

    console.log(res);
  }

  //O(n log(n)) получается будет ли оно вообще работать, лол
  //Умрет по ТЛ, n log(n) только до 10^5
  function canPlaceCows(CC, numbers, middle){
    let count = 1;
    let lastStable = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] - lastStable >= middle){
            count++;
            lastStable = numbers[i];
            if (count >= CC) {
                return true;
            }
        }
    }

    return false;
  }

  
main();