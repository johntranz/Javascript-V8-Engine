"use strict";
// CLASS
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    // public name: string;
    // private age: number;
    // readonly male: boolean;
    // constructor(name: string, age: number, male: boolean) {
    //   this.name = name;
    //   this.age = age;
    //   this.male = male;
    // }
    function Employee(name, age, male) {
        this.name = name;
        this.age = age;
        this.male = male;
    }
    Employee.prototype.print = function () {
        return "Name: " + this.name + ", Age: " + this.age + ", Gender: " + this.male;
    };
    return Employee;
}());
exports.Employee = Employee;
var huy = new Employee('huy', 23, true);
var bob = new Employee('bob', 25, false);
var employees = [];
employees.push(huy);
employees.push(bob);
employees.forEach(function (employee) { return console.log(employee.print()); });
