// let unsort = [8, 4, 1, 3, 2, 5];

// unsort.sort((a, b) => a - b);
// console.log(unsort);

function SecondLargest(arr) {
  const uniqueArr = Array.from(new Set(arr)); // O(n)
  uniqueArr.sort((a, b) => b - a); // O(nlogn)

  if (uniqueArr.length >= 2) {
    return uniqueArr[1];
  } else {
    return -1;
  }
}

function SecondLargestOptimize(arr) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondlargest = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        secondlargest = largest;
       largest = arr[i];
    } else if (arr[i] > secondlargest && arr[i] != largest) {
      secondlargest = arr[i];
    }
  }
  return secondlargest;
}

let arr = [12, 35, 1, 10, 34, 1];
console.log(SecondLargestOptimize(arr));
// console.log(SecondLargest(arr));
