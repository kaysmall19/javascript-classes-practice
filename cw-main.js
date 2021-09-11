// Problem 1:
// Create a class Product that represents a product sold online. A product has a price, quantity and name.
//The class should have a method that prints a product's information in the following format: Banana, price 1.1, amount 13.
//Create two instances of the class and call the method created to print the product's details.
// class Product
// {
//     constructor(name, price, quantity)
//     {
//         this.name = name;
//         this.price = price;
//         this.quantity = quantity;
//     };
//     printAllProducts()
//     {
//         alert(`Name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}.`)
//     };
// }

// let product1 = new Product("Steak", "price 10","amount 2");
// let product2 = new Product("pasta","price 2.5", "amount 1");
// product1.printAllProducts();
// product2.printAllProducts();


// Problem 2:
// Define a class called Pet with three properties, type, breed and age.
//Create a method called formatProperties that prints all object properties using string templating. 
//Create a method called changeAge that takes a number and updates the age property of an object. 
//Create a method called dogYears that checks if the pet type of the object is dog, if so return the age in dog years (age times 7), otherwise return the message "[PET TYPE] is not a dog!".
//Create an instance of the Pet Class called pet1. Print all property values of the object using the class method. 
//Create another instance of the Pet Class with diffrent property values called pet2. Print all property values of the object using the class method. Change the age grade of pet1. 
//Print the age of pet1 in dog years using the class method. Print the age of pet2 in dog years using the class method
// class Pet
// {
//     constructor(type, breed, age)
//     {
//         this.type = type;
//         this.breed = breed;
//         this.age = age;
//     };
//     formatProperties()
//     {
//         alert(`Type: ${this.type}, Breed: ${this.breed}, Age: ${this.age}.`)
//     };
//     changeAge(number)
//     {
//         this.age = parseFloat(this.age);
//         this.age = number;
//         console.log(`${this.type} is now ${this.age} yeaars old!!`);
//     };
//     dogYears()
//     {
//         if(this.type === "dog")
//         {
//             this.age = parseFloat(this.age);
//             return console.log(`${this.type} is ${this.age * 7} in dog years`);
//         }
//         else
//         {
//             console.log(`${this.type} is not a dog`)
//         }
//     }
// }

// let pet1 = new Pet("dog","Chow Chow","4");
// pet1.formatProperties();
// pet1.changeAge(8);
// pet1.dogYears();

// let pet2 = new Pet("dog","Pit Bull", "1");
// pet2.formatProperties();
// pet2.changeAge(5);
// pet2.dogYears();


// Problem 3: Inheritance
// Create a Person Class with the properties Name (first, last), Age, Interests, Bio ('NAME is AGE years old. They like INTERESTS')
// Create a class called Student that extends Person and adds the property Cohort to student.
// Create a class called Teacher that extends Person and adds the properties subject, and students (students should be an array of Student objects) 
//Create a method called addStudent that takes an instance of Student and adds a student object to the students array.
// Create a method called listAllStudents that prints every student name and student cohort associated with a teacher.
// Create an instance of the Teacher class called teacher1 with an empty student array. 
//Create another instance of this class called teacher2 with an empty student array. Add two students to teacher1 using the class method. 
//Add two students to teacher2 using the class method. List all students associated with teacher1 using the class method. 
//List all studnets associated with teacher2 using the class method.