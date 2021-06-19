const meals = {
  breakfast: 'bread',
  lunch: 'rice',
  dinner: 'noodle soup',
};

const alphabet = ['a', 'b', 'c', 'd'];

// for (meal in meals) console.log(meal);
// for (word in alphabet) console.log(word);

for (meal in meals) console.log(meals[meal]);
for (word of alphabet) console.log(word);

const name = 'HuyTran';
for (let word of name) console.log(word.toUpperCase());
