// Problem Solving and Frontend Basics
// LRU(Least Recently Used) Cache

class LRU {
    constructor (max = 5){
        this.max = max;
        this.cache = new Map();
    }

    get(key){
        let iteam = this.cache.get(key);

        if(iteam) {
            this.cache.delete(key)
            this.cache.set(key,iteam);
        }

    }

    set(key,value){
        if(this.cache.has(key)) this.cache.delete(key);
        else if(this.cache.size === this.max) this.cache.delete(this.first()); 

        this.cache.set(key,value);
    }

    first(){
        return this.cache.keys().next().value;
    }
    

}

const LruCache = new LRU(3);

LruCache.set('name','shreyas');
LruCache.set('age','24');
LruCache.set('profession','SDE');
LruCache.set('father','sunil');
console.log(LruCache.cache);