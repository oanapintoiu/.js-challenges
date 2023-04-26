const ShoppingBasket = require('./basket')
const Candy = require('./candy') 

test('class ShoppingBasket should return 0 for total price', () => {
    const basket = new ShoppingBasket();
    expect(basket.getTotalPrice()).toEqual(0)
});

test('class ShoppingBasket should add an item', () => {
    const basket = new ShoppingBasket();
    const candy = new Candy('Mars');
    basket.addItem(candy);
    expect(basket.addItem(candy).getName()).toEqual('Mars')
});

test('class ShoppingBasket should return price for one added item', () => {
    const basket = new ShoppingBasket();
    const candy = new Candy('Mars', 4.99);
    basket.addItem(candy);
    expect(basket.getTotalPrice(4.99)).toEqual(4.99)
});

test('class ShoppingBasket should return the total price of 2 added items', () => {
    const basket = new ShoppingBasket();
    const candy = new Candy('Mars', 4.99);
    basket.addItem(candy);
    basket.addItem(candy);
    expect(basket.getTotalPrice()).toEqual(9.98)
});

test('class ShoppingBasket should return the total price of 2 different added items', () => {
    const basket = new ShoppingBasket();
    const candy = new Candy('Mars', 4.99);
    const candy2 = new Candy('Snickers', 3.99);
    basket.addItem(candy);
    basket.addItem(candy2);
    expect(basket.getTotalPrice()).toEqual(8.98)
});