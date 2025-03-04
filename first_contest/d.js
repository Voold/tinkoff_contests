let x;

function calculate(left_pos, right_pos, num) {
  for(;;){

        
    if ((right_pos - left_pos) < 0.00000000001){
        break;
    }
    
    pointer = left_pos + (right_pos-left_pos)/2;
    x = pointer**2 + Math.sqrt(pointer+1);
    
    //console.log(`x: ${x} pointer: ${pointer} - l_p: ${left_pos} | r_p: ${right_pos}`);
    
    // console.log(pointer +" "+ arr[pointer] +" | "+ element + ` l_pos:${left_pos} r_pos:${right_pos}`);
    
    if ( num < x){
        right_pos-= (right_pos - left_pos)/2;
    } 
    if ( num > x){
        left_pos += (right_pos - left_pos)/2;
    } 
    if ( Math.abs(num - x) < 0.000000001) {
        // console.log(element + ' YES ' + arr[pointer] +" | "+ element);
        return pointer;
    }
}

// console.log(element + ' NO ' );
return pointer;   
}

function show(object) {
     console.log(object);
}

// function calculating (el) {
    
//   if (el === "<"){
//     right_pos = right_pos - Math.floor((right_pos-left_pos)/2);
//   } 
//   if (el === ">=") {
//     left_pos = left_pos + Math.ceil((right_pos-left_pos)/2);
//   }

//   if (right_pos-left_pos === 1 || right_pos-left_pos === 0 ){

//     if (right_pos != max_num){
//       is_over = true; 
//       return `! ${left_pos}`;
//     }
    
//     if (right_pos-left_pos === 0){
//       is_over = true; 
//       return `! ${right_pos}`;
//     }
//   }

//   return Math.ceil(left_pos  + (right_pos-left_pos)/2);
// }


let left_pos, right_pos, cur_num;
cur_num = 0;
left_pos = 0; 
right_pos = 10**10;

process.stdin.addListener("data", function (data) {
    cur_num = data.toString();

     show(calculate(left_pos, right_pos, cur_num));

    process.stdin.pause();
});
