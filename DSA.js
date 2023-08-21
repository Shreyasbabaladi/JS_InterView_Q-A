const arr = [2, 3, 5, 3, 2, 4, 6, 5];

const showResult = (fn, ...args) => {
    let result = fn(...args);
    console.log(result)
}


// Q1 
const firstUniqueNumber = (arr) => {
    const mapFeq = {};

    for (let num of arr) {
        mapFeq[num] = mapFeq[num] ? mapFeq[num] + 1 : 1;
    }

    for (let num of arr) {
        if (mapFeq[num] === 1) {
            return num
        }
    }
    return null;

}


//Q2 Find the maximum and minimum element in an array
const findMaxMinNumber = (arr) => {

    let max = -Infinity;
    let min = Infinity;
    arr.forEach(element => {
        max = Math.max(element, max);
        min = Math.min(element, min);
    });
    return [max, min];
}

//Q3 Find the "Kth" max and min element of an array

showResult(findMaxMinNumber, arr);

//Q4 Given an array which consists of only 0, 1 and 2. Sort the array without using any sorting algo
const sortArr = (arr) => {
    let tempArr = [[], [], []];

    arr.forEach((val) => {
        tempArr[val].push(val)
    })

    return tempArr.flat();
}


//Q5 Move all the negative elements to one side of the array 

const moveNegativeElements = (arr) => {
    const tempArr = [[], []];
    arr.forEach((val) => {
        val > 0 ? tempArr[1].push(val) : tempArr[0].push(val)
    })
    tempArr[0].sort((a, b) => a - b);
    tempArr[1].sort();
    return tempArr.flat();
}

console.log('stack [1]');
setTimeout( () => console.log ("macro [2]"), 0)
setTimeout ( () => console.log ("macro [3]"), 0)
const p = Promise. resolve ();
for(let i = 0; i < 3; i++) {
    p. then( () => {
        setTimeout ( () => {
        console.log ('macro [4]')
        setTimeout ( () => console.log ("macro [5]"), 0);
        p. then ( () => console.log ('micro [6]'));
        }, 0);
        console.log("micro [7]");
        });
}

console.log("stack [8]");