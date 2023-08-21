
//* inheritance using function constructor 

0 && (() => {
    function person(name, age) {
        this.name = name;
        this.age = age;
        this.getDesc = () => {
            console.log(this.name, this.age);
        };
    }

    function employee(name, age, department) {
        // Call the 'person' constructor to initialize 'name' and 'age'
        person.call(this, name, age);

        this.department = department;
        this.getDetails = () => {
            this.getDesc(); // Call the 'getDesc' method from 'person'
            console.log("Department:", this.department);
        };
    }

    // Set up the inheritance
    employee.prototype = Object.create(person.prototype);
    employee.prototype.constructor = employee;

    // Create an instance of 'employee'
    const john = new employee("John Doe", 30, "HR");

    // Now you can use methods from both 'person' and 'employee'
    john.getDetails();
}
)()


    //* What will happend when the arraw is used as the creation

    (() => {
        // object creation using function constructor
        const Person = function (name, age) {
            this.name = name;
            this.age = age;
        }
        // object creation using arrar function
        const Person2 = (name, age) => {
            const myThis = {};
            myThis.name = name;
            myThis.age = age;
            return myThis;
        }

        const shreyas = new Person('Shreyas', 24);
        const amit = Person2('Amit', 24);

        // main diff using both listed below 
        /*
         * Some consequences of this difference are:
            *  ‘shreyas’ inherits from Person.prototype, while ‘amit’ inherits from Object.prototype.
            *  ‘shreyas’ has a constructor property that points to Person, while ‘amit’ has a constructor property that points to Object.
            *   shreyas’ can use methods defined on Person.prototype, while ‘amit’ cannot.
         */

        // The constructor fucntion of the shreuas also points to the called constructor

        const amit = new shreyas.constructor('amit', 31); // we can create new object with exteting object 

    })()