let prjTitle = "Сортировщик конфеточек";
let request = "сорт";
let request1 = "оНф";
let request2 = "ВщИк";
let request3 = "КонФет";
let request4 = "сортировщик конфет";


function strHash (string) {

    let hash = 0;
    let k = 269; // hash base

    for (let i = 0; i < string.length; i++){
        hash += string[i].charCodeAt(0)*k**(i/k+3); // super giga hash alg
    }

    hash = Math.trunc(hash/(string.length**3 + 1)); // super giga hash alg

    return hash;
}

function BinSearch (left, right, arr) {

    let res = 0;

    let L = left;
    let R = right;
    
    for (;L < R;){

        let middle = Math.floor((R - L)/2);
        
        
        if (strHash(arr.slice(L,R-middle)) == strHash(arr.slice(res, res + (R-L-middle)))) {
            res += middle;
            L += middle ;
        }

        if (strHash(arr.slice(L,R-middle)) != strHash(arr.slice(res, res + (R-middle-L)))) {
            R -= middle ;
        }

        if (middle == 0){
            break;
        }

    }

    return res;

}

function KMPwithHBS (request, object){

    // Надо не забыть докинуть валидацию на названия проектов, или у нас все полетит
    let KMPstring  = request.toLowerCase().replaceAll(" ",'') + "$" + object.toLowerCase().replaceAll(" ",'');
    let right = KMPstring.length+1;

    for (let i = request.length+1; i < KMPstring.length; i++){

        let left;
        left = i;

        if (BinSearch(left, right, KMPstring) == request.length){
            return true;
        }
    }

    return false;

}

console.log(KMPwithHBS("abc","eabce"));
console.log(KMPwithHBS(request, prjTitle));
console.log(KMPwithHBS(request1, prjTitle));
console.log(KMPwithHBS(request2, prjTitle));
console.log(KMPwithHBS(request3, prjTitle));