'use strict';

const arr = [3,2,1,5,4,9];

const findPythag = (arr) => {
    for(let i =0; i< arr.length; i++) {
        for(let j = i +1; j< arr.length; j++) {
            for(let k = j +1; k< arr.length; k++) {
                let a = arr[i] * arr[i];
                let b = arr[j] * arr[j];
                let c = arr[k] * arr[k];
                if(a + b === c || b + c === a || c + a === b) {
                    return true;
                }
            }
        }
    }
    return false;
};

console.log(findPythag(arr));


