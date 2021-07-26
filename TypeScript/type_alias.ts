// TYPE ALIAS
type StringOrNumber = string | number;
type Student = {
  id: StringOrNumber;
  name: string;
  //age: number;
  //isGood: boolean;
};

const studentDetails = (id: StringOrNumber, studentName: string) => {
  console.log(`Student ${studentName} has id: ${id}`);
};

studentDetails(123, 'huy');
studentDetails('456', 'tran');

const greet = (user: Student) =>
  console.log(`${user.name} with id: ${user.id} say hello`);

greet({ name: 'huy', id: 123 });
