const meal = {
  breakfast: 'bread',
  lunch: 'rice',
  dinner: 'noodle soup',
};

//console.log(meal);

const meal2 = { ...meal, snack: 'sweet soup' };

//console.log(meal2);

const meal3 = { ...meal, lunch: 'sticky rice' };

//console.log(meal3);

const set = [1, 2, 3];

const set2 = [...set, 3];
console.log(set2);
