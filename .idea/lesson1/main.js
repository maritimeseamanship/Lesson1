/* Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
Вивести кожну змінну за допомогою: console.log */
let a = 'hello';
let b = 'owu';
let c = 'com';
let d = 'ua';
console.log(a, b, c, d);

let numberOne = 1;
let numberTwo = 10;
let numberThree = -999;
let numberFour = 123;
let numberFive = 3.14;
let numberSix = 2.7;
let numberSeven = 16;
console.log(numberOne, numberTwo, numberThree, numberFour, numberFive, numberSix, numberSeven);

let x = true;
let y = false;
console.log(x, y);

/* Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person
(Не об'єкт, просто за допомоги конкатенації) */
let firstName = 'Kateryna';
let middleName = 'Angel';
let lastName = 'Taier-Ulianova';
let person = firstName + ' ' + middleName + ' ' + lastName;
console.log(person);

/* or using the method concat(): string1.concat(string2, string3,....)*/

let person2 = firstName.concat(' ', middleName, ' ', lastName);
console.log(person2);

/* or using`$`*/

let person3 = `My name is ${firstName}, nickname: ${middleName}, last name: ${lastName}`;
console.log(person3);

/* За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
  let a = 100; let b = '100'; let c = true; */
let a1 = 100;
let b1 = '100';
let c1 = true;
console.log(typeof a1, typeof b1, typeof c1);

/* За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль*/
const myFirstName = prompt('Enter your name', 'Kateryna');
const myLastName = prompt('Enter your second name', 'Taier-Ulianova');
const age = +prompt('Enter your age', 38);
console.log(`${myFirstName} ${myLastName} ${age}`);
