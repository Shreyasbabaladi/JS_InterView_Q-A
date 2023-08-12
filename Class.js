0 && (()=>{

    class Person {
        constructor(){
            console.log('The construtor is call');
        }
    }
    
    0 && console.log(Person()); 
    // When call class constuctor without new keyword 
    // TypeError: Class constructor Person cannot be invoked without 'new' ERR wil be thrown 
    // This is because class constructors are designed to be called with new to ensure proper allocation of memory and initialization of the instance.
    // So, the main reason for this restriction is to maintain clarity, consistency, and proper object instantiation in the language.
    
    
})()


// getter and setter 

(function (){
    class Square {
        constructor(){
            this.width = 12;
            this.height = 23; 
        }
    
        get area () {
            return this.width * this.height;
        }
    }
    
    const square1 = new Square();
    
    console.log(square1);
    // get keyoword is use to getter methods 
})()

