// evenDigit.js

function getDigit(i) {
  cnt = 0;
  if (i === 0) {
    return 1;
  }

  while (i > 0) {
    cnt++;
    i = Math.floor(i / 10);
  }
  return cnt;
}

function evenDigit(nums) {
  let tmp = [],
    len = nums.length;

  for (let i = 0; i < len; i++) {
    if (getDigit(nums[i]) % 2 === 0) {
      tmp.push(nums[i]);
    }
  }
  return tmp;
}

let nums = [9, 12, 34567, 383, 2221, 32, 6, 10];

console.log(evenDigit(nums));
