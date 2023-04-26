const Candy = require('./candy')

describe('class Candy should return the name and price of the candy', () => {
    it('searches for name of candy', () => {
        const candy = new Candy('Mars', 4.99) // creates a new instance of Candy taking on 2 paramenters
        expect(candy.getName('Mars')).toEqual('Mars') //call getName on the new instance candy
        expect(candy.getPrice(4.99)).toEqual(4.99) // call getPrice on the new instace candy
    });
});

//another way to write the test: 

// test('class Candy should return the name and price of the candy', () => {
//     const candy = new Candy('Mars', 4.99);
//     expect(candy.getName()).toEqual('Mars', 4.99);
//     expect(candy.getName('Mars')).toEqual('Mars')
// });