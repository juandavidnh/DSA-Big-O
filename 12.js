const sheepCounter = function(sheep) {
    for(i = sheep; i >= 0; i--){
        if(i > 0){
            console.log(i+': Another sheep jumps over the fence')
        } else {
            console.log("All sheep jumped over the fence")
        }
    } 
}


const factorial = function(n){
    if(n === 0 || n === 1){
        return 1
    }
    
    let product = n
    
    for(let i = n; i > 1; i--){
        product = product*(i-1)
    }

    return product
}

const fibonacci = function(n){
    let result = []

    if (n === 1) {
        return 0;
    }
    else if (n === 2) {
        return 1;
    }

    for(let i = 1; i <= n; i++){
        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        } 
    }
}

const nthTriangular = function(n){
    if(n < 1){
        return "n must be equal or greater than 1"
    }

    let total = 0

    for(let i = 1; i <= n; i++){
        total = total + i
    }
    
    return total
}

const powerCalculator = function(base, exponent) {
    if(exponent < 0){
        return "exponent should be >= 0"
    }

    let total = 1

    for(let i = 1; i <= exponent; i++){
        total = total*base
    }

    return total
}

const reverseString = function(string) {
    let stringArray = string.split('')

    let newStringArray = []

    for(let i = stringArray.length; i >= 0; i--) {
        newStringArray.push(stringArray[i - 1])
    }

    return newStringArray.join('')
}

const stringSplitter = function(string, separator) {

    return string.split(separator)   
}

const sumOf = function(list) {
    if(!list || list.length <= 0) {
        return "list must have at least one element"
    }

    let total = 0

    for(let i=0; i < list.length; i++){
        total = total + list[i]
    }

    return total
}

console.log(stringSplitter("2020/10/23", "/"))
