let arr = [12, 34, 1, 3, 10, 34, 1]; //[1, 3, 4, 11, 10, 4];
let n = arr.length;

const second_largest = (arr, arr_size) => {
  let i, first, second;

  if (arr_size < 2) {
    console.log('Invalid Input');
    return;
  }

  // let int_arr = new Int32Array(arr);
  // int_arr.sort();
  // console.log(int_arr);
  // arr = Array.from(int_arr);

  arr.sort((a, b) => a - b);

  for (i = arr_size - 2; i >= 0; i--) {
    if (arr[i] != arr[arr_size - 1]) {
      console.log('The second largest element is:' + arr[i]);
      return;
    }
  }

  console.log('There is no second largest element');
};

console.time('find');
second_largest(arr, n);
console.timeEnd('find');
