

const arr = [1,2,3,4,5,6,7,8,9,10];

function newArr( arr) {
    arr.map(element => {
        if(element % 2)
        return element;
    });
    console.log(arr);
}

function countElements(arr) {
    let counter = 0;
    arr.forEach(element => {
        counter++;
    });
    return counter;
}

newArr(arr);
countElements(arr);
