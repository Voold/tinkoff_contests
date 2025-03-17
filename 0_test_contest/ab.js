let x;

function calculate(arr) {
     return +arr[0] + +arr[1];     
}

function show(object) {
     console.log(object);
}

process.stdin.addListener("data", function (data) {
    x = data.toString().split(' ');

     show(calculate(x));

    process.stdin.pause();
});
