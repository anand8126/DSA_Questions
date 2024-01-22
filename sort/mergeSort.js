function Merge(arr, start, end) {
  let mid = Math.floor((end + start) / 2);

  let len1 = mid - start + 1;
  let len2 = end - mid;

  let arr1 = new Array(len1);
  let arr2 = new Array(len2);

  let k = start;
  for (let i = 0; i < len1; i++) {
    arr1[i] = arr[k++];
  }
  k = mid + 1;
  for (let i = 0; i < len2; i++) {
    arr2[i] = arr[k++];
  }
  let i = 0, j = 0;
  k = start;

  while (i < len1 && j < len2) {
    if (arr1[i] < arr2[j]) {
      arr[k++] = arr1[i++];
    } else {
      arr[k++] = arr2[j++];
    }
  }
  while (i < len1) {
    arr[k++] = arr1[i++];
  }
  while (j < len2) {
    arr[k++] = arr2[j++];
  }
}

function MeregSort(arr, start, end) {
  if (start >= end) {
    return;
  }

  let mid = Math.floor((end + start) / 2);

  MeregSort(arr, start, mid);
  MeregSort(arr, mid + 1, end);
  Merge(arr, start, end);
}

let display = (arr) => console.log(arr);

let arr = [10, 20, 50, 70, 30, 40];
MeregSort(arr, 0, arr.length-1);
display(arr);
// Time Complexity - O(nlogn)
// Space Complexity - O(n)