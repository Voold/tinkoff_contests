let x;

function calculate(left_pos, right_pos, arr) {
  for(;;){

        
    if ((right_pos - left_pos) < 0.000001){
        break;
    }
    
    pointer = left_pos + (right_pos-left_pos)/2;
    x = arr[0]*pointer**3 + arr[1]*pointer**2 + arr[2]*pointer + arr[3];
    
    //console.log(`x: ${x} pointer: ${pointer} - l_p: ${left_pos} | r_p: ${right_pos}`);
    
    // console.log(pointer +" "+ arr[pointer] +" | "+ element + ` l_pos:${left_pos} r_pos:${right_pos}`);
    
    if ( 0 < x && arr[0]> 0 ){
        right_pos-= (right_pos - left_pos)/2;
    } if ( 0 < x && arr[0] < 0 ){
        left_pos += (right_pos - left_pos)/2;
    }
    if ( 0 > x && arr[0]> 0){
        left_pos += (right_pos - left_pos)/2;
    } if ( 0 > x && arr[0] < 0 ){
        right_pos-= (right_pos - left_pos)/2;
    }
    if ( Math.abs(0 - x) < 0.0000000000000000001) {
    //if ( Math.abs(0 - x) < 0.0000001) {
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

let left_pos, right_pos;
left_pos = -(10**10); 
right_pos = 10**10;

process.stdin.addListener("data", function (data) {
    arr = data.toString().split(' ').map(Number);

     show(calculate(left_pos, right_pos, arr));

    process.stdin.pause();
});
