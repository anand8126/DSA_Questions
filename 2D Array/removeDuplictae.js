// let arr = [1, 2, 3, 3, 4, 5, 6, 7, 7, 10,8];
// let arr2 = new Set(arr);
// console.log(arr2);SS

// const removeDuplicateArray = (arr) => {
//   let uniqueArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (uniqueArray.indexOf(arr[i]) === -1) {
//       uniqueArray.push(arr[i]);
//     }
//   }
//   return uniqueArray;
// }




// let arr = [1, 2, 3, 3, 4, 5, 6, 7, 7];
// console.log(removeDuplicateArray(arr));


function removeDuplicateArray(arr){
    return Array.from(new Set(arr));
}
let arr = [1, 2, 3, 3, 4, 5, 6, 7, 7];
console.log(removeDuplicateArray(arr));
// output is [1, 2, 3, 4, 5, 6, 7] 
