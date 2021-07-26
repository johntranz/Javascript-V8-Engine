// INTERFACE

interface Person {
  name: string;
  age: number;
  speak(lang: string): boolean;
  spend(amount: number): number;
}

const huy: Person = {
  name: 'huy',
  age: 23,
  speak(lang: string): boolean {
    return true;
  },
  spend(amt: number): number {
    return amt;
  },
};

console.log(huy);

const helloPerson = (onePerson: Person) =>
  console.log(`Hello ${onePerson.name}`);

helloPerson(huy);
