// input - [1, 2,3,4,5,6,7] k=3
// Explaination
// [7,1,2,3,4,5,6] => [6,7,1,2,3,4,5] => [5,6,7,1,2,3,4]

function RotateArray(arr, k) {
  let size = arr.length;
  if (size > k) {
    k = k % size;
    console.log(k);
  }
  const rotate = arr.splice(size - k, size);
  arr.unshift(...rotate);
  return arr;
}

// console.log(RotateArray([1,2,3,4,5,6,7,8],4));

function rotateArrayoptimize(arr, k) {
  let len = arr.length;

  if (len > k) {
    k = k % len;
  }
 // [1,2,3,4,5,6]
 console.log(arr);
  reverseArray(arr, 0, len - 1); // [6,5,4,3,2,1]
  console.log(arr);
  reverseArray(arr, 0, k - 1); // [4, 5, 6]
  console.log(arr);
  reverseArray(arr, k, len - 1); // [1, 2, 3s]
  console.log(arr);

  return arr;
}

function reverseArray(arr, start, end) {
  while (start < end) {
    let tmp = arr[start];
    arr[start++] = arr[end];
    arr[end--] = tmp;
  }
}

console.log(rotateArrayoptimize([1, 2, 3, 4, 5, 6], 3));
