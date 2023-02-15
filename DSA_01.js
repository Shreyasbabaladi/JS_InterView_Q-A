//Checking sum zero — Problem 1
//[-5,-4,-3,-2,0,2,4,6,8]  —> input

function getSumPairZero(array){ // O(n^2)
    for (const num of array) {
        for (let j = 1; j < array.length; j++) {
            if(num + array[j] === 0) return [num,array[j]]
        }
    }
}

function getSumPairZero2(array) {
    for (const num of array) {
        if(array.indexOf(-num) !==-1) return [num, -num];
    }
}

console.log( getSumPairZero2([-5,-4,-3,-2,0,2,4,6,8]));