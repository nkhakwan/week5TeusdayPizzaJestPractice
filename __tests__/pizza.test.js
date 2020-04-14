import { PizzaOrders } from './../src/pizza.js';

/*describe('PizzaOrders', () => {

  test('should test orderPrice', () => {
    var pizzaOrder = new PizzaOrders();
    pizzaOrder.addOrder(3,4,4);
    expect(pizzaOrder.orderPrice[1]).toEqual(11);
  });
});

describe('PizzaOrders', () => {

  test('should be forgotten and lets see what my first test is', () => {
    var pizzaOrder = new PizzaOrders();
    pizzaOrder.addOrder(3,4,4);
    expect(pizzaOrder.toppingOne[1].toLowerCase()).toEqual("chicken");

  });
});*/

describe('PizzaOrders', () => {
  var pizzaOrder;

  beforeEach(() => {
    pizzaOrder = new PizzaOrders();
    pizzaOrder.addOrder(3,4,4);
  });

  test('should be forgotten and lets see what my first test is', () => {
    //var pizzaOrder = new PizzaOrders();
    //pizzaOrder.addOrder(3,4,4);
    expect(pizzaOrder.toppingOne[1].toLowerCase()).toEqual("Chicken");
  });
  test('should test orderPrice', () => {
    //var pizzaOrder = new PizzaOrders();
    //pizzaOrder.addOrder(3,4,4);
    expect(pizzaOrder.orderPrice[1]).toEqual(11);
  });
});

