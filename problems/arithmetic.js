// arithmetic.js

let isrithemice = (arr) => {
    
    let len = arr.length;
    arr.sort((a,b) => (a-b));
    let diff = arr[1]- arr[0];

    if(len < 2){
        return true;
    }


    for(let i=2; i< len; i++){
        if(arr[i]-arr[i-1] !== diff){
            return false;
        }
    }

    return true;
}

let arr = [9,5,7,13,11,1,15];
console.log(isrithemice(arr));