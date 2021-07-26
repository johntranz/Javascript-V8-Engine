export {};

// FUNCTION

const add = (a: number, b: number, c: number | string = 10): any => {
  console.log(a + b);
  console.log(c);
};
add(1, 2);
