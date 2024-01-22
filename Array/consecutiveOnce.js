// consecutiveOnce.js

const consecutiveOnce = (arr) => {
    let maxi =Number.MIN_VALUE;
    let cnt=0;

    for(let i=0; i<arr.length; i++){
        if(arr[i] === 1){
            cnt++;
            maxi=Math.max(maxi, cnt);
        }
        else {
            cnt=0;
        }
    }
    return maxi;
}


let arr = [1, 1 ,3, 2, 3, 1, 1, 1];
console.log(consecutiveOnce(arr));
