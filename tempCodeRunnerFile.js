let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let arr1 = arr;
// arr1.splice(0, 4);

let arr2 = structuredClone(arr);
arr2.splice(0, 4);

console.log(arr, arr2);
