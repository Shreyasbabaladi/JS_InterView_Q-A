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


//* Getter, Setter and Static methods  
0  && (function (){
    class Square {
        constructor(_width){
            this.width = _width;
            this.height = _width; 
        }
    
        get area () {
            return this.width * this.height;
        }

        set area (area) {
            this.width = Math.abs(area);
        }
        // get and set method behaves like a property

        static isEqual(a,b){
            return a.width * a.height == a.width * b.height ;
        }
    }
    
    const square1 = new Square(23);
    const square2 = new Square(23);

    square1.area = 25 // setter fucntion is called 
    
    console.log(square1.area); // getter fuunction is called 

    console.log(Square.isEqual(square1, square2)); // static method is called 

})()


//* Inheretance
0 && (()=> {
    class Person {
        constructor(_name, _age){
            this.name = _name;
            this.age = _age;
        }

        personDetailes(){
            console.log(`Name: ${this.name}, Last: ${this.age}`)
        } 
    }

    class Programmer extends Person{
        constructor(_name, _age, _yearExp){
            super(_name, _age)
            this.yearExp = _yearsExp;
        }

        totalExp() {
            console.log(`Total:- ${this.yearExp}`);
        }
    }

    const shreyas = new Programmer('Shreyas', 24, 2.5);
    
    console.log(shreyas)


})()

//* Polymoriphism 
0 && (()=> {

    class Animal {
        constructor(_name){
            this.name = _name;
        }

        makeSound(){
            console.log('The Amimal make a sound');
        }

    }

    class Dog extends Animal{
        constructor(_name){
            super(_name)
        }

        makeSound(){
            super.makeSound(); // can call the perent method also use super keyword 
            console.log(`${this.name} make sound woof! woof!`); // Polymoriphism
        }
    } 

    const tom = new Animal('Tom');
    const toto = new Dog('Toto');
    
    tom.makeSound();
    toto.makeSound(); 

})()

