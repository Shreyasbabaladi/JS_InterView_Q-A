class Stack {
  constructor() {
    this.stack = [];
  }
  push(element) {
    return this.stack.push(element);
  }
  pop() {
    if (this.isEmpty()) {
      return "Stack is Empty";
    }
    return this.stack.pop();
  }
  size() {
    return this.stack.length;
  }
  peek() {
    return this.stack[this.size() - 1];
  }
  isEmpty() {
    return this.size === 0;
  }
}

//? Ques 1 : Given an input string s, reverse the order of the words

// Input: "the sky is blue"     ----->>>>>     Output: "blue is sky the"
// Input: "  hello world  "     ----->>>>>     Output: "world hello"
// Input: "a good   example"    ----->>>>>     Output: "example good a"

// "the sky is blue" => [the,sky,is,blue]
// [] => [the,sky,is,blue] => blue is sky the

0 &&
  (() => {
    const reverseWords = function (s) {
      const splitS = s.split(" ");
      const stack = [];

      for (let i of splitS) {
        stack.push(i);
      }

      let finalS = "";

      while (stack.length) {
        const current = stack.pop();

        if (current) {
          finalS += " " + current;
        }
      }

      return finalS.trim();
    };

    console.log(reverseWords("the sky is blue"));
    console.log(reverseWords("a good   example"));

    // Time Complexity = O(n)
    // Space Complexity = O(n)
  })();

/////////////////////////////////////////////////////////////////////////////////////////////

//? Ques 2 : Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
//          determine if the input string is valid.
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Input: "()"             ----->>>>>        Output: true
// Input: "([]{})"         ----->>>>>        Output: true
// Input: "(]"             ----->>>>>        Output: false

0 &&
  (() => {
    function vaildParenthese(str) {
      let stask = [];
      for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        if (char === "(" || char === "{" || char === "[") {
          stask.push(char);
        } else if (char === ")" || char === "}" || char === "]") {
          if (!stask.length) return false; // if stask is emtry

          let top = stask.pop();

          if (
            (char === ")" && top !== "(") ||
            (char === "}" && top !== "{") ||
            (char === "]" && top !== "[")
          ) {
            return false;
          }
        }
      }
      return stask.length === 0;
    }

    console.log(vaildParenthese("(){}[]"));
  })();
