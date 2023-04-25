const fizzbuzz = require("./fizzbuzz");

describe("fizzbuzz", () => {
  it("returns FizzBuzz when number is divisible by both 3 and 5", () => {
    expect(fizzbuzz(15)).toBe("FizzBuzz");
  });
});

describe ("fizzbuzz", () => {
    it("returns Buzz when number is divisible by 5", () => {
        expect(fizzbuzz(5)).toBe("Buzz");
    });
});

describe ("fizzbuzz", () => { 
    it("returns Fizz when number is divisible by 3", () => {
        expect(fizzbuzz(3)).toBe("Fizz");
    });
});

describe ("fizzbuzz", () => {
    it("returns number when number is not divisible by neither 3 or 5", () => {
        expect(fizzbuzz(11)).toBe(11);
    });
});

describe ("fizzbuzz", () => {
    it("expects fizzbuzz to return values as expected", () => {
        expect(fizzbuzz(13)).toBe(13);
        expect(fizzbuzz(30)).toBe("FizzBuzz");
        expect(fizzbuzz(60)).toBe("FizzBuzz");
        expect(fizzbuzz(25)).toBe("Buzz");
        expect(fizzbuzz(55)).toBe("Buzz");
        expect(fizzbuzz(9)).toBe("Fizz");
        expect(fizzbuzz(27)).toBe("Fizz");
    });
});