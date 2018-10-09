// Create a constructor
function Calculator() {
    
}


// Create a prototype
Calculator.prototype = {
    addNumbers: function(num1, num2) {
        return num1 + num2
    },

    subtractNumbers: function(num1, num2){
        return num1 - num2
    },

    multiplyNumbers: function(num1, num2){
        return num1 * num2
    },

    divideNumbers: function(num1, num2){
        return num1 / num2
    },

    powerOfNumbers: function(num1, num2){
        return num1 ** num2
    },

    squareRootOfNumber: function(num1) {
        return num1 ** 0.5
    }

}