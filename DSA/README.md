<div style="display:none">
Refer:- https://www.youtube.com/watch?v=5mEwh4MfwB4&t=571s
github link:- https://github.com/FrontendFreaks/DSA-in-JavaScript/blob/main/Basics/README.md

need to checkout
https://www.youtube.com/watch?v=qJGR9lLcRc0&t=28s

What is time complexity?
=> It is amount time taken by the algorithm to run, as the function of input size.

What is Space complexity?
=> It is amount memory take by the algorithm to run, as the function of input size.

Asympotic notations use to represent the time and space complexity.

1. Big-O Notation (worst case complexity)
2. Omega Notation (Best case complexity)
3. Theta Notation (Average case complexity)

O(n) => Constant
O(n) => linear
O(n^2) => Quadratic
O(n^3) => Cubic

Arrays

shift() = remove
unshift() = add

Templete

| No | [What is React?](#what-is-react) |

1.  ### What is React?

    React(aka React.js or ReactJS) is an **open-source front-end JavaScript library** that is used for building composable user interfaces, especially for single-page applications. It is used for handling view layer for web and mobile apps based on components in a declarative approach.

```javascript
// Your JavaScript code goes here
function myFunction() {
  console.log("Hello, World!");
}
```

    **[⬆ Back to Top](#table-of-contents)**

</div>

### Table of Contents

| No. | Questions                                                        |
| --- | ---------------------------------------------------------------- |
| 1   | [Sum of all the natural number?](#Sum-of-all-the-natural-number) |
| 2   | [Sum digits of an number?](#Sum-digits-of-an-number)             |
| 3   | [Palindrom for a number?](#Palindrom-for-a-number)               |
| 4   | [Fibonacii for a number?](#Fibonacii-for-a-number)               |
| 5   | [Find the missing number?](#Find-the-missing-number)             |

1.  ### Sum of all the natural number?

```javascript
function sumNaturalNum(num) {
  return (num * (num + 1)) / 2; // Math Formula num * (num + 1) / 2
}

console.log(sumNaturalNum(3));
```

**[⬆ Back to Top](#table-of-contents)**

2.  ### Sum digits of an number?

```javascript
function sunDigitNum(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log(sunDigitNum(123));
```

**[⬆ Back to Top](#table-of-contents)**

3.  ### Palindrom for a number?

```javascript
function isPalindrom(num) {
  if (num < 10) return true;
  num = Math.abs(num);
  let copyNum = num;
  let reverseNumber = 0;

  while (copyNum > 0) {
    let lastDigit = copyNum % 10;
    reverseNumber = reverseNumber * 10 + lastDigit;
    num = Math.floor(copyNum / 10);
  }

  return num === reverseNumber;
}

console.log(isPalindrom(123));
```

**[⬆ Back to Top](#table-of-contents)**

4.  ### Fibonacii for a number?

```javascript
function Fibonacii(num) {
  let perv = 0,
    curr = 1,
    next;

  for (let i = 2; i <= num; i++) {
    next = curr + perv;
    perv = curr;
    curr = next;
  }

  return next;
}

console.log(Fibonacii(10));
```

**[⬆ Back to Top](#table-of-contents)**

5.  ### Find the missing number?

```javascript
function findMissingNum(numArr) {
  return (
    (numArr.length * (numArr.length + 1)) / 2 -
    numArr.reduce((acc, cuu) => acc + cuu, 0)
  );
}

console.log(findMissingNum([3, 0, 1]));
```

**[⬆ Back to Top](#table-of-contents)**
