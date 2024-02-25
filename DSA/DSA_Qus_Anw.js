//! Questions 3: Find the Factorial of a Number
0 &&
  (() => {
    function factorical(n) {
      return [...new Array(n + 1)].reduce(
        (acc, _, index) => acc * (index ? index : 1),
        1
      );
    }

    function factorical2(n) {
      if (n == 0) {
        return 1;
      }
      return n * factorical2(n - 1);
    }

    console.log(factorical2(4));
  })();

//! Questions 4: Find the Prime Number
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

//! Questions 4: Find the Power of Two
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

//! Find second Largest number
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

//! Rotate the array k
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

//! Remove duplicates in place
0 &&
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

    //Without using methods
    function removeDuplicatesWithoutMethods(arr) {
      if (!arr.length) return 0;
      let i = 0;

      for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
          i++;
          arr[i] = arr[j];
        }
      }

      return i + 1;
    }

    console.log(removeDuplicatesWithoutMethods([0, 0, 0, 1, 1, 1, 2, 2, 3, 3]));
  })();
//////////////////////////////////////////////////////////////////////////////////////////////
//! Ques 4 - Given an integer array nums, find the subarray with the largest sum,
// and return its sum.

// Input: [-2,1,-3,4,-1,2,1,-5,4]     ----->>>>>    Output: 6,   [4,-1,2,1]
// Input: [5,4,-1,7,8]                ----->>>>>    Output: 23,  [5,4,-1,7,8]
0 &&
  (() => {
    // Brute Force Approach
    function maxSubArrayBruteForce(nums) {
      let maxSum = nums[0];
      let startIdx = 0;
      let endIdx = 0;

      for (let i = 0; i < nums.length; i++) {
        let currentSum = 0;
        for (let j = i; j < nums.length; j++) {
          currentSum = currentSum + nums[j];
          if (currentSum > maxSum) {
            maxSum = currentSum;
            startIdx = i;
            endIdx = j;
          }
        }
      }

      return {
        sum: maxSum,
        subArray: nums.slice(startIdx, endIdx + 1),
      };
    }

    // Time Complexity - O(n^2)
    // Space Complexity - O(1)

    // console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

    // Kadane's Algorithm

    // [-2,1,-3,4,-1,2,1,-5,4]
    function maxSubArray(nums) {
      let sum = 0;
      let max = nums[0];

      for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum > max) {
          max = sum;
        }
        if (sum < 0) {
          sum = 0;
        }
      }

      return max;
    }

    // Time Complexity - O(n)
    // Space Complexity - O(1)

    console.log(maxSubArray([5, 4, -1, 7, 8]));
  })();
/////////////////////////////////////////////////////////////////////////////////

//? Recursion
//! Ques 2 : Create an array with range of numbers
// Input:  start=1, end=5  ----->>>>>  Output:
0 &&
  (() => {
    function rangeOfNumber(start, end) {
      if (end < start) {
        return [];
      }
      const arr = rangeOfNumber(start, end - 1);
      arr.push(end);

      return arr;
    }

    console.log(rangeOfNumber(0, 4));
  })();
//////////////////////////////////////////////////////////////////////////////////////////////

//! Ques 4 - Fibonacci Number
// Fibonacci Series -> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1

// Input: n = 3  ----->>>>>  Output: 2
0 &&
  (() => {
    var fib = function (n) {
      let arr = [0, 1];
      for (let i = 2; i <= n; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
      }
      return arr[n];
    };

    // Recursion
    const fibo = (n) => (n <= 1 ? n : fibo(n - 1) + fibo(n - 2));

    console.log(fibo(3));
  })();
//////////////////////////////////////////////////////////////////////////////////////////////

//! Ques 5 - Reverse a String
// Input: "hello"  ----->>>>>  Output: "olleh"
(() => {
  function reverseString(str = "") {
    if (str == "") {
      return "";
    }
    return reverseString(str.substr(1)) + str.charAt(0);
  }

  console.log(reverseString("hello"));
})();

//////////////////////////////////////////////////////////////////////////////////////////////

//! Ques 6 - Subsets ( Backtracking Algorithm using Recursion )
// Given an integer array nums of unique elements, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.

// Input: [1,2,3]  ----->>>>>  Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Input: [0]      ----->>>>>  Output: [[],[0]]
0 &&
  (() => {
    function subset(num) {
      let temp = [];
      let result = [];
      function reverse(num, i) {
        if (i == num.length) return result.push([...temp]);

        temp.push(num[i]);
        reverse(num, i + 1);
        temp.pop();
        reverse(num, i + 1);
      }
      reverse(num, 0);

      return result;
    }

    console.log(subset([1, 2, 3]));
  })();
//////////////////////////////////////////////////////////////////////////////////////////////
