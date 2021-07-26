// CLASS

export class Employee {
  // public name: string;
  // private age: number;
  // readonly male: boolean;

  // constructor(name: string, age: number, male: boolean) {
  //   this.name = name;
  //   this.age = age;
  //   this.male = male;
  // }

  constructor(
    public name: string,
    private age: number,
    readonly male: boolean
  ) {}

  print() {
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.male}`;
  }
}

const huy = new Employee('huy', 23, true);
const bob = new Employee('bob', 25, false);

let employees: Employee[] = [];
employees.push(huy);
employees.push(bob);

employees.forEach((employee) => console.log(employee.print()));
