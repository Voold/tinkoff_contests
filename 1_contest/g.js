
function quickSort (a, left, right, n) {
  if (right <= left)
    return;
  let q,i,j;
  q = a[Math.floor((1+n)/2)];
  i = left;
  j = right;
  while ( i <= j) {
    while (a[i] < q)
      ++i;
    while (q < a[j])
      --j;
    if (i <= j) {
      [a[i],a[j]] = [a[j],a[i]];
      ++i;
      --j;
    }
  }
  quickSort(a, left, j, n);
  quickSort(a, i, right, n);
}

let x;

let array = [1, 2, 4, 8, 3]

function calculate(data) {
     return quickSort (array, 0, 5, data);     
}

function show(object) {
     console.log(object);
}

process.stdin.addListener("data", function (data) {
    x = data.toString();
    
    show(calculate(x));
    show(array);

    process.stdin.pause();
});
