

/**
 * this
 *  In non–strict mode 
 * 
 */

// Case strict mode 
const obj = {
    fn() {
        console.log(this)
    }
}
// this will refer to obj object


//The value of this always changes based on how a function is called, even when the function was defined on an object at creation:

const obj2 = {
    __proto__: obj,
    name: 'shreyas'
};


