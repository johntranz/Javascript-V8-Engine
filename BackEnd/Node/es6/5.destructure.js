const meal = {
  breakfast: 'bread',
  lunch: 'rice',
  dinner: 'noodle soup',
};

const fruit = ['apple', 'oranges', 'litchi fruit'];

/* console.log(`Sáng nay ăn gì ${meal.breakfast} `);
console.log(`Trưa nay ăn gì ${meal.lunch}`);
console.log(`Tối nay ăn gì ${meal.dinner}`);

console.log(`Quả số  0 là quả: ${fruit[0]}`);
console.log(`Quả số  1 là quả: ${fruit[1]}`);
console.log(`Quả số  2 là quả: ${fruit[2]}`); */

const { breakfast, lunch, dinner } = meal;

console.log(`Sáng nay ăn gì ${breakfast} `);
console.log(`Trưa nay ăn gì ${lunch}`);
console.log(`Tối nay ăn gì ${dinner}`);

const [apple, oranges, litchi_fruit] = fruit;

console.log(`Quả số  0 là quả: ${apple}`);
console.log(`Quả số  1 là quả: ${oranges}`);
console.log(`Quả số  2 là quả: ${litchi_fruit}`);
