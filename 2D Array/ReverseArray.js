let ReverseArray = (arr) => {
  let start = 0;
  let end = arr.length-1;
  while (start <= end) {
    let tmp = arr[start];
    arr[start] = arr[end];
    arr[end] = tmp;
    start++, end--;
  }
};

let display = (arr) =>{
    for(let i=0; i<arr.length; i++){
        process.stdout.write(arr[i]+ ' ');
    }
    process.stdout.write('\n')
}
let arr = [10, 13, 29, 1, 4];
ReverseArray(arr);
display(arr);