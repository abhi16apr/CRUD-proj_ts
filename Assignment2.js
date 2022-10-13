// Assignment :- Create the array of customer which have two properties:-> id, name
// Note:- perform all respective operation mentioned below :-
// 1. createCustomer()
// 2. UpdateCustomer(id);
// 3. deleteCustomer(id);
// 4. listCustomer();
// Note :-- Write the Code in typescript with switch cases perform various operations
// Ref: mdn array
// declaring array in TS
//let myArray:string[]=["Vlad", "Abhi", "Glenn"];
// console.log(typeof(myArray));
// console.log(myArray);
// let myArray1:any[]=[1.2, "Amy", 1, "Delhi"];
// console.log(typeof(myArray1));
// console.log(myArray1);
// console.log(typeof(customer));
// console.log(customer);
// creating the constructor
class Customer {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
// creating the array 
let customers = [];
function createCustomer(id, name) {
    let customer = new Customer(name, id);
    customers.push(customer);
    console.log("Adding customer and ID ---> " + customer);
}
function updateCustomer(id, name) {
    console.log("Updating customer --> ", name);
    customers.find(x => x.id === id).name = name;
}
function deleteCustomer(id) {
    console.log("deleting the customer from database ");
    let indexd = customers.findIndex(x => x.id === id);
    customers.splice(indexd, 1);
}
function listCustomer() {
    for (let x of customers) {
        console.log(x);
    }
}
console.log(createCustomer(20, " Edward"));
console.log(createCustomer(25, "Kristina"));
//console.log(updateCustomer(25));
// console.log(deleteCustomer(22));
console.log(listCustomer());
console.log(updateCustomer(20, "Edward updated"));
console.log(listCustomer());
// deleteCustomer(25);
console.log(listCustomer());
let flag = 1;
switch (flag) {
    case 0:
        console.log(createCustomer(20, "Edward"));
        break;
    case 1:
        console.log(updateCustomer(25, "Kristina"));
        break;
    case 2:
        console.log(listCustomer());
        break;
    case 3:
        console.log(deleteCustomer(20));
        break;
}
//# sourceMappingURL=Assignment2.js.map