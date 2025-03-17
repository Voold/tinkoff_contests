//Задача C. Постфиксная запись

let x, a, b;
let stack = [];

function calculate(arr) {
    for (let item of arr){
        if (item === ' ' || item === ''){
            continue;
        }
        if (isFinite(+item)){
             stack.push(BigInt(+item));
        } else {
            [a, b] = [...stack.splice(-2)];
            // b = stack.pop();
            // a = stack.pop();
            switch (item) {
                case '+':
                    stack.push(a + b);
                    break;
                case '-':
                    stack.push(a - b);
                    break;
                case '*':   
                    stack.push(a * b);
                    break;
            }
        }
    }
    return stack[0].toString();   
}

process.stdin.addListener("data", function (data) {
    x = data.toString().trim().replace('\r','').split(' ');

    // for (let item of '\f\n\r\t\v\u00A0\u2028\u2029'.split('')){
    //     x = x.replace(item, ' ');
    // }
    
    // x = x.replace(/[ \f\n\r\t\v\u00A0\u2028\u2029]/g, ' ');
      
    // console.log(calculate(x.trim().split(' ')));
    
    console.log(calculate(x));

    process.stdin.pause();
});
