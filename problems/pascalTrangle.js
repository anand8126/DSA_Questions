// pascalTrangle.js

let pascalTrangle = (num) => {
  let trangle = [];

  for (let i = 0; i < num; i++) {
    let row = [];
    for (let j = 0; j <= i; j++) {
      if (i === j || j === 0) {
        row.push(1);
      } else {
        row.push(trangle[i - 1][j - 1] + trangle[i - 1][j]);
      }
    }

    trangle.push(row);
  }
  return trangle;
};

let numsRow = 6;
console.log(pascalTrangle(numsRow));
