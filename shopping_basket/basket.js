class ShoppingBasket {
    constructor() {
        this.candies = [];
    }

    addItem(candy) {
        this.candies.push(candy);
        return candy; // this is needed to return the candy object in the tests
    };

    getTotalPrice() {
        return this.candies.reduce(
            (acc, candy) => acc + candy.getPrice(), 0);
    };
};

module.exports = ShoppingBasket;