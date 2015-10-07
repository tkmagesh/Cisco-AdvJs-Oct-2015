/*
write a function that checks if the given number is a prime number or not.

isPrime(100) // => runs the algorithm
isPrime(101) // => runs the algorithm
isPrime(102) // => runs the algorithm
isPrime(103) // => runs the algorithm
isPrime(104) // => runs the algorithm


isPrime(100) // => returns the result from cache
isPrime(101) // => returns the result from cache
isPrime(102) // => returns the result from cache
isPrime(103) // => returns the result from cache
isPrime(104) // => returns the result from cache

isPrime(105) // => runs the algorithm

*/

function getPrimeFinder(){
    var cache = {};

    function checkPrime(n){
        console.log("processing - ", n);
        if (n <= 3) return true;
        for(var i=2; i <= (n/2); i++)
            if (n % i === 0) return false;
        return true;
    }
    return function (n){
        if (typeof cache[n] === 'undefined')
            cache[n] = checkPrime(n);
        return cache[n];
    }
}

function getAdder(){
    var cache = {};

    function add(x,y){
        console.log("processing - ", x , " and ", y);
        return x + y;
    }
    return function (x,y){
        var key = x + ' - ' + y;
        if (typeof cache[key] === 'undefined')
            cache[key] = add(x,y)
        return cache[key];
    }
}

function memoize(fn){
    var cache = {};

    return function (){
        var key = JSON.stringify(arguments);
        if (typeof cache[key] === 'undefined')
            cache[key] = fn.apply(this,arguments)
        return cache[key];
    }
}























