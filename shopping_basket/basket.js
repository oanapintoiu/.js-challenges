class ShoppingBasket {
  constructor() {
    this.candies = [];
    this.discount = 0;
  }

  addItem(candy) {
    this.candies.push(candy);
    return candy; // this is needed to return the candy object in the tests
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.candies.forEach((candy) => {
      totalPrice += candy.getPrice();
    });

    return totalPrice - (totalPrice * this.discount); //to return discout 5 - (5 * 0.2) = 5 - 1 = 4

    // return this.candies.reduce(
    //     (acc, candy) => acc + candy.getPrice(), 0);
  }

  applyDiscount(discount) {
    this.discount = discount;
  }
}

module.exports = ShoppingBasket;
