import { Invoice, Payment } from './classImplements';
import { hasPrint } from './interfaceForClass';

const documentOne: hasPrint = new Invoice('huy', 'dev', 20000);
const documentTwo: hasPrint = new Payment('VietNam Airliners', 'fly', 10000);
console.log(documentOne.print());
console.log(documentTwo.print());

const allDocuments: hasPrint[] = [];
allDocuments.push(documentOne);
allDocuments.push(documentTwo);

console.log(allDocuments);
