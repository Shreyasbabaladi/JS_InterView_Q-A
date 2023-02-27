//? Synchronous vs Asynchronous Code

//* Async code
0 && console.log("Start");

setTimeout(() => {
  0 && console.log("Something code");
});

0 && console.log("finish");
// output
// start
// finish
// something code
///////////////////////////////////////////////

//* CallBacks
0 && console.log("Start");

function importantAction(username, CallBacks) {
  setTimeout(() => {
    CallBacks(username);
  }, 1000);
}
function linkAction(username, CallBacks) {
  setTimeout(() => {
    CallBacks(username);
  }, 500);
}

importantAction("Shreyas Babaladi", function (username) {
  0 && console.log(`Subscribe to ${username}`);
  linkAction("Shreyas Babaladi", function (params) {
    0 && console.log(`link by ${username}`);
  });
  // this will be go on forms pyramid know as callback hell
});

0 && console.log("ended");
//////////////////////////////////////////////////////
//* Promises

0 && console.log("Start");

const sub = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve("Done Dana Done....");
    } else {
      reject(new Error(" gila gila gill gilla..... "));
    }
  }, 1000);
});

sub
  .then((messeage) => 0 && console.log(messeage))
  .catch((err) => {
    0 && console.log(err);
  });

///////////////////////////////////////////////////////////
// we can also create response

// Promise.resolve("It is resolve");
// Promise.reject("It is resolve");
//
//////////////////////////////////////////////////////////
//? creating promises
function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe to ${username}`);
    }, 5000);
  });
}

function likeAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`link by ${username}`);
    }, 2000);
  });
}

//? calling
0 &&
  importantAction("Shreyas")
    .then((res) => {
      console.log(res);
      return likeAction("Shreyas");
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
////////////////////////////////////////////////

//? Promises combinater
Promise.all([importantAction("Shreyas"), likeAction("Shreyas")]).then((res) => {
  console.log(res);
});

Promise.race([importantAction("Shreyas"), likeAction("Shreyas")]).then(
  (res) => {
    console.log(res);
  }
); //returns a single Promise. This returned promise settles with the eventual state of the first promise that settles.

Promise.allSettled([importantAction("Shreyas"), likeAction("Shreyas")]).then(
  (res) => {
    console.log(res);
  }
);

Promise.any([importantAction("Shreyas"), likeAction("Shreyas")]).then((res) => {
  console.log(res);
});
////////////////////////////////////////////////////////

// async and await
async function result(params) {
  try {
    const messeage1 = await importantAction("Shreyas");
    const messeage2 = await likeAction("Shreyas");
    console.log({ messeage1, messeage2 });
  } catch (error) {
    console.log(messeage1);
  }
}
result();

/*
 * JS will all aways exceute Synchronous code 1st and then it will move to Asynchronous Code.
 * To avoid callblack hell we can use promises.
 * Promise.all() return the array of response if all of promises are resolved
 * Promise.race() return first response among all the promises
 *
 */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Q1
// What's the output?

console.log("start");
const pro = new Promise((res, rej) => {
  console.log(1);
  res(2);
});

pro.then((res) => {
  console.log(res);
});

console.log("ends");

// output

// start
// 1
// extends
// 2
///////////////////////////////////////////////////////////////////////////
console.log("start");
const pro4 = new Promise((res, rej) => {
  console.log(1);
  res(2);
  console.log(3);
});

pro4.then((res) => {
  console.log(res);
});

console.log("ends");
// output
// start
// 1
// 3
// extends
// 2
///////////////////////////////////////////////////////////////////////////
console.log("start");
const pro5 = new Promise((res, rej) => {
  console.log(1);
  console.log(3);
});

pro5.then((res) => {
  console.log(res);
});

console.log("ends");
// output
// start
// 1
// 3
// extends
///////////////////////////////////////////////////////////////////////////
