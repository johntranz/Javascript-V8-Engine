// Async Await
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
  }, 0);
};

const AskForPhoneNumber = () => {
  console.log('Ask my friend');
  console.log('Detect');

  const modalFind = new Promise((resolve, reject) => {
    let find;

    setTimeout(() => {
      find = true;

      if (find) {
        let phoneNumber = 123456789;
        console.log(`This is the  phone number: ${phoneNumber}`);
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

const Action = async () => {
  try {
    //const phoneNumber = await AskForPhoneNumber();
    const phoneNumber = await askForPhoneNumber(charge);
    //await Charge();
    console.log(phoneNumber);
  } catch (error) {
    console.log('Error: ', error);
  }
};

Action();
