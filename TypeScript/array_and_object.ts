export {};
// ARRAY AND OBJECTS

let names = ['mai', 'hong', 'huy'];
names.push('son');
// fail -> names.push(1);

let mixed = [1, 'huy', false, { a: 123, b: 123 }];
mixed.push(5);
mixed.push('tran');
mixed[3] = true;
mixed.push({ a: 1, b: 2 });

let person = {
  name: 'huy',
  age: 23,
  isStudent: false,
  gender: 'male',
};

// fail -> person.name = 30;
person.name = 'huy tran';

// fail -> person.age = '23'
person.age = 20;

// fail -> person.car = 'Mercedes'
