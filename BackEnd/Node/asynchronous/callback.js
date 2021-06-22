// 1. Problem

/* const askForPhoneNumber = () => {
  let phoneNumber;

  console.log('Ask for Jane"s phone number ');

  console.log('Waiting !');

  setTimeout(() => {
    phoneNumber = 123456789;
    console.log('Find correct phone number');
  }, 1000);

  return phoneNumber;
};

const phoneNumberFound = askForPhoneNumber();

console.log(phoneNumberFound);*/

// ==> Wrong solution

//** 2. Solution with Callback **//
/* const callback = (phoneNumber) => {
  console.log(phoneNumber);
};

const askForPhoneNumber = (callback) => {
  let phoneNumber;

  console.log('Ask for Jane"s phone number ');

  console.log('Waiting !');

  setTimeout(() => {
    phoneNumber = 123456789;
    console.log('Find correct phone number');
    callback(phoneNumber);
  }, 1000);

  return phoneNumber;
};

askForPhoneNumber(callback); */

//** 3. Multi callback **/

const askForPhoneNumber = (callback) => {
  let phoneNumber;

  console.log('Ask for Jane"s phone number ');

  console.log('Waiting !');

  setTimeout(() => {
    phoneNumber = 123456789;
    console.log('Find correct phone number');
    callback(phoneNumber, onThePhone);
  }, 1000);
};

const charge = (phonNumber, callback) => {
  console.log('charge battery');

  setTimeout(() => {
    console.log('Done');
    callback(phonNumber);
  }, 2000);
};
const onThePhone = (phoneNumber) => {
  console.log('talking:', phoneNumber);
};
askForPhoneNumber(charge);
