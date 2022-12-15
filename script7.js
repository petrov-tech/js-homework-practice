// Модуль 3 Занятие 6. Деструктуризация и rest/spread
// Example 1 - Деструктуризация
// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора независимых аргументов.

// function calcBMI({person}) {
//   const numericWeight = Number(weight.replace(',', '.'));
//   const numericHeight = Number(height.replace(',', '.'));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// // Было
// console.log(calcBMI('88,3', '1.75'));
// console.log(calcBMI('68,3', '1.65'));
// console.log(calcBMI('118,3', '1.95'));

// Ожидается
// console.log(
//   calcBMI({
//     weight: '88,3',
//     height: '1.75',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '68,3',
//     height: '1.65',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '118,3',
//     height: '1.95',
//   }),
// );




// Example 2 - Деструктуризация
// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора независимых аргументов.

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// // Было
// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );

// Ожидается
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });




// Example 3 - Глубокая деструктуризация
// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора независимых аргументов.

// function getBotReport({ companyName, bots: { repair, defence } }) {
//   return `${companyName} has ${repair + defence} bots in stock`;
// }

// // Было
// // console.log(getBotReport('Cyberdyne Systems', 150, 50));

// // Ожидается
// console.log(
//   getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 bots in stock"





// Example 4 - Деструктуризация
// Перепиши функцию так, чтобы она принимала объект параметров со свойствами companyName и stock и выводила репорт о количестве товаров на складе любой компании.



// function getBotReport({ companyName, stock}) {
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }


// // Решение
// function getStockReport({ companyName, stock }) {
//   let total = 0;
//   for (const value of Object.values(stock)) {
//     total += value;
//   }
//   return `${companyName} has ${total} items in stock`;
// }

// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: 'Belacci',
//     stock: {
//       shoes: 20,
//       skirts: 10,
//         hats: 5,
//       tshirt: 5,
//     },
//   }),
// ); // "Belacci has 35 item in stock"



// Example 5 - Операция spread
// Дополни функцию createContact(partialContact) так, чтобы она возвращала новый объект контакта с добавленными свойствами id и createdAt, а также list со значением "default" если в partialContact нет такого свойства.



// function getBotReport({ companyName, stock}) {
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }



// Решение
// function createContact(partialContact) {
//   return {
//     list: 'default',
//     ...partialContact,
//     id: generateId(),
//     createdAt: Date.now(),
//   };
// }

// console.log(
//   createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   }),
// );
// console.log(
//   createContact({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   }),
// );

// function generateId() {
//   return '_' + Math.random().toString(36).substr(2, 9);
// }








// Example 6 - Операция rest
// Напиши функцию transformUsername(user) так, чтобы она возвращала новый обьект со свойством fullName, вместо firstName и lastName.

// // Решение
// function transformUsername({ firstName, lastName, ...otherProps }) {
//   return {
//     fullName: `${firstName} ${lastName}`,
//     ...otherProps,
//   };
// }

// // function transFormUserName({ firstName, lastName, ...rest }) {
// //   return {
// //     ...rest,
// //     fullName: `${firstName} ${lastName}`,
// //   };
// // }


// console.log(
//   transformId({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
//   }),
// );

// console.log(
//   transformId({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
//   }),
// );


// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const res = arr.reduce(function (previous, current) {
//     console.log(previous, current)
//     return previous + current
// })
// console.log(res)


//==================================================


// function add(...args) {
//   console.log(args)
//   let total = 0
//     for (const arg of args) {
//         total += arg
//   }
//   console.log(total);
//   return total
//   // Change code above this line
// }


// // add(15, 27);
// add(50, 15, 27);
// add(10, 12, 4, 11, 48, 10, 8);
// add(15, 32, 6, 13, 19, 8);
// add(20, 74, 11, 62, 46, 12, 36);




//======================================================

// Change code below this line
// function findMatches(args, ...numbers) {
//   const matches = []; // Don't change this line

  
//  for (const number of numbers) {
//   //  console.log(number)
//    if (number in args)
//      console.log(matches.includes(number))
//  }
//   // Change code above this line
//   console.log(matches)
//   return matches;
// }


// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41);
// findMatches([63, 11, 8, 29], 4, 7, 16);



// Выносим варианты в массив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// // Проверяем наличие элемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }


// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   removePotion(potionName) {
//     // Change code below this line
//     console.log(potionName);
//     return this.potions.splice(this.potions.indexOf(potionName), 1);

//     // Change code above this line
//   },
// };

// console.log(atTheOldToad)



//==============================================================



// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const iterator of this.potions) {
//       if (iterator.name === newPotion.name)
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     let i = 0;
//     for (const iterator of this.potions) {
//       if (iterator.name === potionName) {
//         this.potions.splice(i, 1);
//         return;
//       }
//       i++;
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     for (const iterator of this.potions) {
//       if (iterator.name === oldName) {
//         iterator.name = newName;
//         console.log(this.potions);
//         return;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };

// console.log(atTheOldToad.addPotion({ name: "hjewjksdgvjhgf" }));
// console.log()