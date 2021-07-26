export {};

// GENERICS

type myArray = Array<string>;
type numArray = Array<number>;

const last = (arr: numArray) => arr[arr.length - 1];
console.log(last([1, 2, 3]));

const lastT = <T>(arr: Array<T>) => arr[arr.length - 1];
const l2 = lastT([1, 'a', 3]);
const l3 = lastT<string>(['a', 'b']);

const makeArrXY = <X, Y>(x: X, y: Y) => [x, y];
const m1 = makeArrXY('a', 3);

const makeTuple = <X, Y>(x: X, y: Y): [X, Y] => [x, y];
const m2 = makeTuple('a', 1);
const m3 = makeTuple<string | null, number>(null, 3);

const makeTupleWithDefault = <X, Y = number>(x: X, y: Y): [X, Y] => [x, y];
const m4 = makeTupleWithDefault<string>('a', 1);

// GENERICS EXTEND

const makeFullNameConstraintWithGenerics = <
  T extends { firstName: string; lastName: string }
>(
  obj: T
) => ({ ...obj, fullName: `${obj.firstName} ${obj.lastName}` });

const n1 = makeFullNameConstraintWithGenerics({
  firstName: 'huy',
  lastName: 'tran',
  age: 23,
});
console.log(n1);

// GENERICS in INTERFACE

interface Resource<T> {
  uid: number;
  name: string;
  data: T;
}
