function waveSort(arr){
    let sort = (a, b) =>{
        return (a-b);
    }
    arr.sort(sort);

    for(let i=0; i<arr.length-1; i=i+2){
        let tmp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = tmp;
    }
    console.log(arr);
}


let arr = [2,19,23,29,30,822]
waveSort(arr);