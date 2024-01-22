function cumlativeSum(arr) {
  let len = arr.length;
  let tmp = [];
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum = sum + arr[i];
    tmp.push(sum);
  }
  return tmp;
}

let nums = [1, 2, 3, 4, 5];
console.log(cumlativeSum(nums));
