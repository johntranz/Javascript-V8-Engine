const array = [6, 8, 10, 5, 3, 9, 7, 2, 4, 1];

const bubble_sort = (array) => {
  let count = 0;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1])
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      count++;
    }
    console.log(`[${count}] ${array}`);
  }
  return array;
};

const result = bubble_sort(array);
console.log();
console.log(`[result] ${result}`);
