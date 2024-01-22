let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function searchElement(arr, searchElment) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] === searchElment) {
        return true;
      }
    }
  }
  return false;
}

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[0].length; j++) {
    process.stdout.write(`${arr[i][j].toString()}  `);
  }
  process.stdout.write("\n");
}

if (searchElement(arr, 17)) {
  console.log("Element is present ");
} else {
  console.log("Element is not found!");
}
