// Q1 
 //* Scope
 //? Scope is the regin where a particular variable can be assessed 

 var a = 2;
 {
    let b = 3;
    const c = 4;
 }

 console.log(a);//2
 console.log(b);//refers err
 console.log(c);//refers err

// // /////////////////////////////////////////////////////////////////////// 

//? Declaration
var d = 3;
var d = 4;
// it is oppseble

// but 

let c =3;
let c = 4;
//! ERR SyntaxERROR a has already been declared
const f = 4;
const f = 5;
//! ERR SystaxERROR Missing initializer in const declaration


// // /////////////////////////////////////////////////////////////////////// 

//? Declaration without initialisation

const a;//! ERR SystaxERROR Missing initializer in const declaration 

// // /////////////////////////////////////////////////////////////////////// 

function () { //! "SyntaxError: Function statements require a function name
   
}
// // /////////////////////////////////////////////////////////////////////// 

// ? Re-Initialisation
const h =5;
h = 8; //! TypeERROR: Assignement to constant variable

// // /////////////////////////////////////////////////////////////////////// 

var getName = function name () {
   console.log('Shreyas')
 }
 getName();
 name(); //! "TypeError: name is not a function

// * Hoisting 
// ? hoisting prosess where variable are move to top the code this is called hoisting.
// ? var is hoisted in golble scope , const and let variable are hoisted in Temporal Dead Zone 

//  * Temporal Dead zone 
//  ? Temporal Dead zone is the time between variable is declaration and initialistion 

