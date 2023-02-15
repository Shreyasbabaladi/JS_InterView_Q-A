// Q1 
//? polyfill for map()
Array.prototype.myMap = function(callback){
    let temp = [];
    for (let index = 0; index < this.length; index++) {
        temp.push(callback(this[index],index,this));   
    }

    return temp;
}


//////////////////////////////////////////////////////////////// 
//? polyfill for filter()

Array.prototype.myFilter = function (callback) {
    let temp = [];
    for (let index = 0; index < this.length; index++) {
        callback(this[i],index,this) && temp,push(this[index])
    }
    return temp;
}
////////////////////////////////////////////////////////////
//? polyfill for reduce()

Array.prototype.myReduce = function name(callback,initializer) {
    var accumulator = initializer;
    for (let i = 0; i< this.length; i++) {
        accumulator = accumulator ? callback(accumulator, this[i], i , this ) : this[i]
    }
    return accumulator;
}

