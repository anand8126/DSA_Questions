// largestSum.js

let largestSum = (arr) => {
  let len = arr.length;

  if (!len) {
    return 0;
  }

  
  let maxi  = arr[0];
  let currSum=arr[0];

  for (let i = 1; i < len; i++) {
    currSum = Math.max(currSum + arr[i], arr[i]);
    maxi = Math.max(currSum, maxi);
  }

  return maxi;
};

let arr = [4, -6, 2, 5];
console.log(largestSum(arr));
