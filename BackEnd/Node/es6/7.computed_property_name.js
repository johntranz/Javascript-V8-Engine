const computedPropertyName = 'dinner';

const meal = {
  breakfast: 'sticky rice',
  lunch: 'rice',
  [computedPropertyName]: 'noodle soup',
};

console.log(meal);

const other_meal = {
  breakfast: 'sticky rice',
  lunch: 'rice',
  ['late ' + computedPropertyName]: 'porridge',
};

console.log(other_meal);
