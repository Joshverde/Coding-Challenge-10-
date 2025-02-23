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
  