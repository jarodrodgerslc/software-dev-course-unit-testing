const {calculateDiscount, filterProducts, sortInventory} = require('../main.js');
const { beforeEach } = require('node:test');
const sampleArray= [];

describe("Calculate discount function", () =>{
    test("Should return null if arguments are not a number.", () =>{
        expect(calculateDiscount('a','b')).toEqual(null); 
    }) 

    test("Should return null if discount rate is not between 0 and 1", ()=>{
        expect(calculateDiscount(10, 2)).toEqual(null);
    })

    test("Should return a valid number when using valid numbers.", () =>{
        expect(calculateDiscount(100, .10)).toEqual(90);
    })

    test("Should return null if they enter an emtpy space.", () => {
        expect(calculateDiscount("", .5)).toEqual(null);
    })
    
})

describe("Filter products function",
    () =>{
beforeEach(() =>{
    sampleArray = ['Pepsi','Coke','Sprite','Dr. Pepper','Mr. Pibb'];
})
    test('Should return an empty array if callback is not a function.', () =>{
        expect(filterProducts(sampleArray, "string")).toEqual([]);
    })  
}
)