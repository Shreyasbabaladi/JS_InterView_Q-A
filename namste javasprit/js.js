//Debouncing in javascript 
let counter = 0;
const getData = ()=> {
    console.log("Fetching Data..",counter++);
}

const debouncing = (fn, d) => {
    let timer;
    return function () {
        let context = this,
        args = arguments;
        clearTimeout(timer);
         timer = setTimeout(() => {
            getData.apply(context,arguments)
        }, d);
    }
}

const betterFunction = debouncing(getData, 700);