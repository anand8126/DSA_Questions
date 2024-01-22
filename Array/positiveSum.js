// positiveSum.js

function positiveSum(arr){
    let len = arr.length;
    let sum =0;
    let tmp = [];
    for(let i=0; i<len; i++){
        sum = sum + arr[i];
        tmp.push(sum);
    }
    return tmp;
}

let nums = [1, -2, 3, 4, -6];
console.log(positiveSum(nums));