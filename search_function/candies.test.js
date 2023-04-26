const searchCandies = require("./candies")

describe ('searchCandies', () => {
    
    it('searches for candies', () => {
    expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers'])
    expect(searchCandies('Ma', 2)).toEqual(['Mars'])
    });

    it('searches for candies', () => {
  expect(searchCandies('S', 10)).toEqual(['Skitties', 'Skittles', 'Starburst'])
    expect(searchCandies('S', 4)).toEqual(['Skitties', 'Skittles'])
    });


    it('searches for candies', () => {
    expect(searchCandies('P', 7)).toEqual(['Polkagris', 'Pastila'])
    expect(searchCandies('P', 5)).toEqual(['Pastila'])
    expect(searchCandies('P', 2)).toEqual([])
    });


    it('searches for candies staring with S', () => {
    expect(searchCandies('S', 10)).toEqual(['Skitties', 'Skittles', 'Starburst'])
    expect(searchCandies('S', 4)).toEqual(['Skitties', 'Skittles'])
    });

});