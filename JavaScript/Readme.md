

# JavaScript Interview Question and Answer
`level 1`

<details>
<summary>Flatten the Array?</summary>

const arr = [[1, 2], [3, 4, 5], 6, [7, [8, 9], 0]] flat this array

```js
const arr = [[1, 2], [3, 4, 5], 6, [7, [8, 9], 0]];

const flatten = [].concat(...arr); // 1 level
const deapFlatten = arr.flat(2); // 2 level

//custom flat
function customFlat(arr, depth = 1) {
  let result = [];
  arr.forEach((ar) => {
    if (Array.isArray(ar) && depth > 0) {
      result.push(...customFlat(ar, depth - 1));
    } else result.push(ar);
  });
  return result;
}
```
</details>
<br/>

<details>
<summary>Guess the output? </summary>

const arr = [[1, 2], [3, 4, 5], 6, [7, [8, 9], 0]] flat this array


```js
function a() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, i * 1000);
  }
}
a();

// result
//3
//3
//3

```

</details>
<br> 
