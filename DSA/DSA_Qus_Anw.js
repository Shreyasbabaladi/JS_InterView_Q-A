// Questions 3: Find the Factorial of a Number
0 &&
  (() => {
    function factorical(n) {
      return [...new Array(n + 1)].reduce(
        (acc, _, index) => acc * (index ? index : 1),
        1
      );
    }

    console.log(factorical(4));
  })();

// Questions 4: Find the Prime Number
0 &&
  (() => {
    function isPrime(n) {
      if (n < 2) return false;
      for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i === 0) return false;
      }
      return true;
    }

    console.log(isPrime(5));
  })();

// Questions 4: Find the Power of Two
0 &&
  (() => {
    function isPowerOfTwo(n) {
      if (n < 1) {
        return false;
      }

      while (n < 1) {
        if (n % 2 !== 0) {
          return false;
        }
        n = n / 2;
      }
      return true;
    }

    console.log(isPowerOfTwo(5)); // Big-O:- O(log(n))

    function isPowerOfTwoBitWise(n) {
      if (n < 1) return false;
      return (n & (n - 1)) === 0;
    }
    console.log(isPowerOfTwoBitWise(4));
  })();

// map () polyfill
Array.prototype.myMap = function (fn) {
  if (!Array.isArray(this)) {
    throw new TypeError("this is not a array");
  }

  if (typeof fn !== "function") {
    throw new TypeError("fn is not function");
  }

  const temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(fn(this[i], i, this));
  }
  return temp;
};

// filter() polyfill
Array.prototype.myFilter = function (fn) {
  if (!Array.isArray(this)) throw new TypeError("this is not Array");
  if (typeof fn !== "function") throw new TypeError("fn is not function");

  const temp = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      temp.push(this[i]);
    }
  }

  return temp;
};

// reduce() polyfill
Array.prototype.myRuduce = function (fn, inti) {
  if (!Array.isArray(this)) throw new TypeError("this is not array");
  if (typeof fn !== "function")
    throw new TypeError("callback function not a funtion");

  let acc;
  let startIndex = 0;
  if (inti !== undefined) {
    acc = inti;
  } else {
    if (this.length) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    acc = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    acc = fn(acc, this[i], i, this);
  }
  return acc;
};

// Find second Largest number
0 &&
  (() => {
    function secondLargest(num) {
      let largest = Number.NEGATIVE_INFINITY;
      let secondLargest = Number.NEGATIVE_INFINITY;

      for (let i = 0; i < num.length; i++) {
        if (num[i] > largest) {
          secondLargest = largest;
          largest = num[i];
        } else if (num[i] !== largest && num[i] > secondLargest) {
          secondLargest = num[i];
        }
      }
      return secondLargest;
    }
    console.log(secondLargest([1, 2, 3, 3, 5, 67, 8, 4, 3]));
  })();

// Rotate the array k
0 &&
  (() => {
    //Way 1
    function rotateArray(arr = [], k) {
      // BIG - 0 :- 2O(n)
      let size = arr.length;
      if (k > size) k = k % size;

      let elementsToRotate = arr.splice(size - k, size);
      arr.unshift(elementsToRotate);
    }

    // Way 2
    function rotateArrayOpt(arr = [], k) {
      if (k > arr.length) k = k % size;

      reverse(arr, 0, arr.length - 1);
      reverse(arr, 0, k - 1);
      reverse(arr, k, arr.lenght - 1);
    }

    const reverse = (arr, left, right) => {
      while (left > right) {
        let temp = arr[left];
        arr[left++] = arr[right];
        arr[right--] = temp;
      }
    };

    console.log(rotateArrayOpt([1, 2, 3, 4, 5], 3));
  })();

// remove duplicates in place
(() => {
  // Big-O:- O(n)
  function removeDuplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 1]) {
        arr.splice(i + 1, 1);
        i--;
      }
    }

    return arr.length;
  }

  console.log(removeDuplicates([0, 0, 0, 1, 1, 1, 2, 2, 3, 3]));
})();
