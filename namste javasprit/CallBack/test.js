// Write a function to flatten nested arrays and nested objects to a single level
// [1, 2, [3, 4, [5, 6]]] should become [1, 2, 3, 4, 5, 6]
// {a: [1, 2, [3, 4]]} should become {a: [1, 2, 3, 4]}

// if we manuvaly change the length of the Array n > array.lenght then elements will be deleted.
// if increse array length then empy space with will be added.
// this empt space not equle to undefind
// in some case it will be repaced with undefind link
// foreach will Skip it but it add undefind

// let charte = "()[]{}"

// var isValid = function(s) {
//     let dir = {
//         '(': ')',
//         '{': "}",
//         '[': ']'
//     }
//     console.log(s.indexOf( dir[s.charAt(1)]));
//     let i = 0;
//     while( i < s.length){
//       let j = s.indexOf( dir[s.charAt(i)]);
//         if (j < i)  return false;
//         else s = s.replace(s.charAt(j), '')
//         i++;
//     }
//         return true;
// };

// create a promise

// function createOrderId (cart) {

//     const pr = new Promise ( function (resolve, reject) {
//         if(!false){
//             const err = new Error(" Cart is not valid");
//             reject(err);
//         }

//         const orderid = 12345;
//         if(orderid){
//             resolve(orderid);
//         }
//     });

//     return pr
// }

// const id = createOrderId('Shreyas');
// console.log(id);

async function showAvatar() {
  const github = await fetch(`https://api.github.com/users/Shreyasbabaladi`);
  const avatarInfo = await github.json();

  if (avatarInfo) {
    const avatarImg = document.createElement("img");
    avatarImg.src = avatarInfo.avatar_url;

    let body = document.querySelector("body");
    body.appendChild(avatarImg);
  }
}

//  What if promise resolve takes some time to ValidityState then how will it performed ?

const showAvatarByPromies = () => {
  fetch("https://api.github.com/users/Shreyasbabaladi")
    .then((res) => res.json())
    .then((avatarInfo) => {
      const avatarImg = document.createElement("img");
      avatarImg.src = avatarInfo.avatar_url;

      document.body.append(avatarImg);
    });
    
};

// showAvatarByPromies();






  async function f() {
    let response = await fetch('http://no-such-url');
  }
  
  // f() becomes a rejected promise
//   f().catch(alert); 

//   https://api.github.com/users


async function getUsers () {

    const response = await fetch('https://api.github.com/users');

    const user = await response.json();

    return user;
}


// getUsers().then((user) =>{
//     let list = user.map((e) => {
//         let H1 = document.createElement('h3');
//         console.log(e);
//         H1.innerHTML=e.login;
//         document.body.appendChild(H1);
//         return H1
//         })
//     // document.body.append(list);
// });
let count = 0 ;
let timerID = setTimeout(function tick(){
  alert('hey'); count ++ ;
  console.log(count);
  timerID  = setInterval(tick,2000);
  if(count > 3) clearInterval(timerID);
},3000);