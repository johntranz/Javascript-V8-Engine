// 1.Ask For Phone Number
/* const AskForPhoneNumber = () => {
  console.log('Ask my friend');
  console.log('Detect');

  const modalFind = new Promise((resolve, reject) => {
    let find;

    setTimeout(() => {
      find = false;

      if (find) {
        let phoneNumber = 123456789;
        console.log('This is the  phone number: ');
        resolve(phoneNumber);
      } else {
        reject('Not found phone number');
      }
    }, 1000);
  });

  return modalFind;
}; 

AskForPhoneNumber()
  .then((phoneNumber) => console.log(phoneNumber))
  .catch((err) => console.log(`Error: ${err}`));*/

// 2. Multi Promise
const AskForPhoneNumber = () => {
  console.log('Ask my friend');
  console.log('Detect');

  const modalFind = new Promise((resolve, reject) => {
    let find;

    setTimeout(() => {
      find = true;

      if (find) {
        let phoneNumber = 123456789;
        console.log('This is the  phone number: ');
        resolve(phoneNumber);
      } else {
        reject('Not found phone number');
      }
    }, 1000);
  });

  return modalFind;
};

const Charge = () => {
  console.log('Waiting');
  let batteryFailure;

  const chargingAction = new Promise((resolve, reject) => {
    setTimeout(() => {
      batteryFailure = false;

      if (!batteryFailure) {
        console.log('Full Battery');
        resolve();
      } else {
        reject(' Battery Failure');
      }
    }, 1500);
  });

  return chargingAction;
};

const Calling = (phoneNumber) => console.log(`Calling ... ${phoneNumber}`);

AskForPhoneNumber()
  .then((phoneNumber) => {
    Charge(phoneNumber)
      .then(() => Calling(phoneNumber))
      .catch((err) => console.log(`Error: ${err}`));
  })
  .catch((err) => console.log(`Error: ${err}`));
