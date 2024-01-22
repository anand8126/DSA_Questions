// identicalTwins.js

function identicalTwins(nums) {
  let len = nums.length;
  let cnt =0;
  nums.sort((a, b) => a - b);
  for(let i=0; i< len; i++){
    for(let j=i+1; j<len; j++){
        if(nums[i] === nums[j]){
            cnt++;
        }
    }
  }
  return cnt;
}

let arr = [1,2,2,3,2,1];
console.log(identicalTwins([1, 1, 1, 1]));