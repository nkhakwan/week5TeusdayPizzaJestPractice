import { PizzaOrders } from './../src/pizza.js';

describe('PizzaOrders', () => {

  test('should be forgotten and lets see what my first test is', () => {
    var pizzaOrder = new PizzaOrders();
    pizzaOrder.addOrder(3,4,4);
    expect(pizzaOrder.toppingOne[1]).toEqual(10);
  });
});

/*describe('Triangle', () => {

  test('should correctly create a triangle object with three lengths', () => {
    var triangle = new Triangle(2,4,5);
    expect(triangle.side1).toEqual(2);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).toEqual(5);
  });
});*/