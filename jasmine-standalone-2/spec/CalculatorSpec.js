describe('Calculator', function(){
    let calc;

    beforeEach(function() {
        calc = new Calculator();
    })

        it ("can create a calculator", function(){
            expect(calc).not.toBeFalsy();
        }),

        it ("can add 2 numbers together", function(){
            expect(calc.addNumbers(2, 3)).toBe(5);
        }),

        it ("can subtract a number from another number", function(){
            expect(calc.subtractNumbers(1, 9)).toBe(-8);
        }),

        it ("can multiply a number by another number", function(){
            expect(calc.multiplyNumbers(4, 5)).toBe(20);
        }),

        it ("can divide a number by another number", function(){
            expect(calc.divideNumbers(80, 20)).toBe(4);
        })

        it ("can work out the value of a number to the power of another number", function(){
            expect(calc.powerOfNumbers(3, 2)).toBe(9);
        })

        it ("can work out the square root of a number", function(){
            expect(calc.squareRootOfNumber(25)).toBe(5);
        })
})