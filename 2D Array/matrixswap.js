// matrixswap.js

const rotateMatrix = (arr) => {
    console.log("Original Matrix:");
    console.log(arr);

    let m = arr.length;
    let n = arr[0].length;

    // Transpose the matrix
    for (let i = 0; i < m; i++) {
        for (let j = i + 1; j < n; j++) {
            // Swap arr[i][j] with arr[j][i]
            let tmp = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = tmp;
        }
    }

    // Reverse each row to get the final result
    for (let i = 0; i < m; i++) {
        arr[i].reverse();
    }

    console.log("Rotated Matrix:");
    console.log(arr);
};

let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

rotateMatrix(arr);
