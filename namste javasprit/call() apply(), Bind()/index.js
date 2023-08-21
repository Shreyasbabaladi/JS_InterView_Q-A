//call()
let userDetails = {
    name: 'Shreyas',
    age: 24,
    phoneNumber: 8904256591,
    getName: function(){
        console.log(this.name);
    }
}

false && userDetails.getName();
// --------------------------------------------------------------------------


//if we wanted to call setName to another refe to object
//let take other object 

let userDetails2 = {
    name: 'Sunil',
    age: 65,
    phoneNumber: 9591222879,
}

false && userDetails.getName.call(userDetails2);
// --------------------------------------------------------------------------

// borroving function
function getPhoneNumber (contry,contryCode) {
    console.log(contry+ "   "+contryCode + this.phoneNumber);
}

false && getPhoneNumber.call(userDetails,'India' ,'+91');

// --------------------------------------------------------------------------

//apply()

//same this can be the done thought the appl() also only it takes an array as sencand parameter
false && getPhoneNumber.apply(userDetails,['India' ,'+91']);

//bind()
// returns a new function, allowing you to pass in an array and any number of arguments
let phoneNumberFun = getPhoneNumber.bind(userDetails);
phoneNumberFun('India' ,'+91');