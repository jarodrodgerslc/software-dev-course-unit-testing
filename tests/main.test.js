const {calculateDiscount, filterProducts, sortInventory} = require('../main.js');
const { beforeEach } = require('node:test');


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

describe("Filter products function", () => {

    test('Should return an empty array if callback is not a function.', () => {
        expect(filterProducts(sampleArray, "string")).toEqual([]);
    });

    test('Should return an empty array if array is not an array', () => {
        expect(filterProducts('string', () => {})).toEqual([]);
    });

});

describe("sortInventory function", () => {
  const sampleInventory = [
    { name: "Apple", quantity: 10, price: 2 },
    { name: "Banana", quantity: 5, price: 1 },
    { name: "Cherry", quantity: 20, price: 3 },
  ];

  test("should sort inventory by quantity in ascending order", () => {
    const sorted = sortInventory(sampleInventory, "quantity");
    expect(sorted).toEqual([
      { name: "Banana", quantity: 5, price: 1 },
      { name: "Apple", quantity: 10, price: 2 },
      { name: "Cherry", quantity: 20, price: 3 },
    ]);
  });

  test("should return empty array if inventory is not an array or key is not a string", () => {
    expect(sortInventory("not-an-array", "quantity")).toEqual([]);
    expect(sortInventory(sampleInventory, 123)).toEqual([]);
  });

  test("should return the array if key doesnt exist", () => {
    const sorted = sortInventory(sampleInventory, "nonexistentKey");
    expect(Array.isArray(sorted)).toBe(true);
    expect(sorted.length).toBe(sampleInventory.length);
  });
});