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
class Person 
{
    constructor(name, age, interests,)
    {
        this.name = name;
        this.age = age;
        this. interests = interests;
    };
    bio()
    {
        console.log(`${this.name} is ${this.age}, and likes ${this.interests}`)
    };
// print()
// {
//     console.log(`${this.bio}`);
// };
};
// person1.bio();
// person2.bio();
// person2.print();

class Student extends Person
{

    constructor(name, age, interests, cohort)
    {
        super(name, age, interests);
        this.cohort = cohort;
    };
    studentBio()
    {
        console.log(`${this.name} is ${this.age}, likes ${this.interests}, and is in cohort ${this.cohort}`);
    };
};
// student1.bio();
// student1.studentBio();
// student2.studentBio();
// student3.studentBio();
// student4.studentBio();

 class Teacher extends Person
 {
     constructor(name, age, interests, subject, bio)
     {
         super(name, age, interests, bio);
         this.subject = subject;
         this.studentsArr = [];

     }; 

        addStudent(studentname)
        {
            this.studentsArr;
            let string = JSON.stringify(studentname);
             return this.studentsArr.push(string);

        }; 


        print()
        {
            console.log(`${this.name} is ${this.age}, likes ${this.interests}, teaches ${this.subject} and has ${this.studentsArr.length} students`);
        };


      studentPrint(student, teacher)
      {
        console.log(`${student.name} is ${student.age}, likes ${student.interests}, is in cohort ${student.cohort} and is a student of ${teacher.name}`);
      };
        // teacherBio()
        // {
        //     this.addStudent()
        //     console.log(studentsArr + " students");
        //     // console.log(`${this.name} is ${this.age}, likes ${this.interests}, teaches ${this.subject} and has ${this.studentsArr} students!`);
        // };

 };
 let teacher1 = new Teacher("Dominique Dallas", "28", "Traveling", "Spanish");
 let teacher2 = new Teacher("Savannah Estes", "26", "Reading", "English");

exercise3 = () =>
{
let person1 = new Person ("Lisa Malone", "16", "Reading & Art");
let person2 = new Person("Tiara Jones", "17", "Dancing & Collections");

let student1 = new Student("Lisa Malone", "16", "Reading & Art", "2024");
let student2 = new Student("Tiara Jones", "17", "Dancing & Collections", "2024");
let student3 = new Student("William Lyons", "21", "Dancing" , "2023");
let student4 = new Student("Anthony Kelly", "22", "Football" , "2023");


 teacher1.addStudent(student1);
 teacher1.addStudent(student2);
 teacher1.print();
 teacher1.studentPrint(student1, teacher1);
 teacher1.studentPrint(student2, teacher1);


 teacher2.addStudent(student3);
 teacher2.addStudent(student4);
 teacher2.print();
 teacher2.studentPrint(student3, teacher2);
 teacher2.studentPrint(student4, teacher2);

};
exercise3();