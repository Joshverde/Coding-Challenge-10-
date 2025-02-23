//Task 1
class Product {
    //creates a class
    constructor(name, id, price, stock) {
      // creates a constructor with properties
      this.name = name; // assigns name
      this.price = price; // assigns price
      this.id = id; // assigns id
      this.stock = stock; //assigns stock
    }
    getDetails() {
      // creates a method
      return `Product: ${this.name}, ID: ${this.id}, Price: ${this.price}, Stock: ${this.stock}`; // returns a formatted  product details
    }
    updateStock(quantity) {
      // creates a method
      this.stock -= quantity; // subtracts quantity from stock amount
      return this.stock; //returns updated stock
    }
  }
  //task 1  Test cases
  console.log("Task 1"); // for console readability
  const prod1 = new Product("Laptop", 101, 1200, 10); // creates a new product
  console.log(prod1.getDetails()); // calls and logs method
  prod1.updateStock(3); // calls method
  console.log(prod1.getDetails()); // calls and logs method
  
  //Task 2
  class Order {
    //creates the class
    constructor(orderId, product, quantity) {
      // creates a constructor with specified properties
      this.orderId = orderId; // assigns orderId
      this.quantity = quantity; //assigns quantity
      this.product = product; // awssigns product
    }
    getOrderDetails() {
      this.product.stock -= this.quantity; // updates product stock
      return `Order ID: ${this.orderId}, product: ${this.product.name // instance of??
        }, Quantity: ${this.quantity}, Total Price: $${this.product.price * this.quantity
        }`; // returns formatted order details
      //returns formatted product detials
    }
  }
  //task 2  Test cases
  console.log("Task 2"); // for readability
  const order1 = new Order(501, prod1, 2); //creates a new order
  console.log(order1.getOrderDetails()); // calls and logs method
  console.log(prod1.getDetails()); // calls and logs method
  
  // Task 3
  class Inventory {
    //creates a class
    constructor() {
      // creates a constructor
      this.products = []; //creates an empty list
      this.orders = []; //creates an empty list
    }
    addProduct(product) {
      // creates method
      this.products.push(product); // adds product to products list
    }
    listProducts() {
      // creates method
      this.products.forEach((product) => {
        // uses foreach to console log each prodcut in products details
        console.log(product.getDetails()); // logd product.getDetails to console
      });
    }
    placeOrder(orderId, product, quantity) {
      // creates a method
      if (quantity <= product.stock) {
        // if quantity is less than or equal to product stock
        const order = new Order(orderId, product, quantity); // creates a new order
        this.orders.push(order); // adds new order to orders
      }
      else{
        return 'Insufficent stock!'
      }
    }
    listOrders() {
      this.orders.forEach((order) => {
        // uses forEach to call each order in the orders list and log their getOrderDetails to the conso
        console.log(order.getOrderDetails());
      });
    }
    restockProduct(productId, quantity) {
      const product = this.products.find((pr) => pr.id === productId); // research this
      product.stock += quantity;
      return product.stock;
    }
  }
  // Task 3 Test casess
  console.log("task 3"); // for ease of readability
  const inventory = new Inventory(); //creates a new inventory
  inventory.addProduct(prod1); // calls method
  inventory.listProducts(); // calls method
  
  // Task 4 test cases
  console.log("task 4"); // for ease of readability
  inventory.placeOrder(601, prod1, 2);
  inventory.listOrders(); // calls method
  console.log(prod1.getDetails()); // calls and logs method
  
  // Task 5 test cases
  console.log("Task 5"); // for ease of readability
  inventory.restockProduct(101, 5); // calls method
  console.log(prod1.getDetails()); // calls and logs method
  