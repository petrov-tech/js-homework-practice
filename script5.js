// Модуль 3. Занятие 1. Объекты

// Example 1 - Основы обьектов
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
// Код

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);
// console.table(keys);

// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

//! ==================================================================

//* Example 2 - метод Object.values()
// У нас есть объект, в котором хранятся зарплаты нашей команды. Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.

// Код

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const salariesArray = Object.values(salaries);
// let sum = 0;

// for (const salary of salariesArray) {
//   sum += salary;
// }
// console.log(sum);

// !=================================================================

// Example 3 - Массив объектов
// Напишите ф-цию calcTotalPrice(stones, stoneName), которая принимает массив обьектов и строку с названием камня. Ф-ция считает и возвращает общую стоимость камней с таким именем, ценой и количеством из обьекта

// Код

// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 3 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 200, quantity: 2 },
// ];

// console.log(calcTotalPrice(stones, "Изумруд"));
// console.log(calcTotalPrice(stones, "Бриллиант"));
// console.log(calcTotalPrice(stones, "Сапфир"));
// console.log(calcTotalPrice(stones, "Щебень"));

// function calcTotalPrice(stones, stoneName) {
//   // 1. створити зміну для суми
//   let totalPrice = 0; // коли тільки створили зміну-це ініціалізація

//   // 2. створити цикл for of та пройтись по кожному об'єкту
//   for (const stone of stones) {

//     // 3. вибрати об'єкт у якого поле name співпадає с параметром stoneName
//     if (stone.name === stoneName) {

//       // 4. порахувати загальну вартість помноживши ціну на кількість
//       // totalPrice = stone.price * stone.quantity;
//       return stone.price * stone.quantity;
//     }
//   }
// }

// ==============================================================

// // Example 4 - Комплексные задачи
// // Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {},

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {},

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {},

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {},

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {},
// };

// function countProps(object) {
//   let propCount = 0;

// //   // Change code below this line
//   const values = Object.values(object);
//   // console.table(keys.length);

//   for (const key of values) {
//     propCount = values.length;
//     console.log(propCount)
//   }
//   return propCount
// }

// for (let value in values) {
//   propCount = values.length;
//   // console.log(propCount);
//   // return propCount
// }
// // Change code above this line
//   console.log(propCount)
// return propCount;
// }

//
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500, adress: "isdhgfshg" });

//==============================================================================


// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const values = Object.values(salaries);
//   for (const value of values) {
//     totalSalary += value
//   }
// console.table(totalSalary)
//   // Change code above this line
//   return totalSalary;
// }

// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });


//==============================================================================

// const temps = [14, -4, 25, 8, 11];

// // В консоли будет массив
// console.log(temps);
// // ❌ Так не сработает, потому что передаём целый массив
// console.log(Math.max(temps)); // NaN

// // // В консоли будет набор отдельных чисел
// // console.log(...temps);
// // ✅ Распылим коллекцию элементов как отдельные аргументы
// console.log(Math.max(...temps)); // 25



//=================================================================

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, makePizza, onOrderError) {
//     for (let i of this.pizzas) {
//         if (i === pizzaName) {
//             // console.log(i)
//             // console.log(onOrderError)
//         return makePizza(pizzaName);
//         }
//       }
//       return onOrderError(pizzaName)
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//     console.log(`Your order is accepted. Cooking pizza ${pizzaName}.`);
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(pizzaName) {
//     console.log(
//       `Error! There is no pizza with a name ${pizzaName} in the assortment.`
//     );
// //   return `Error! There is no pizza with a name Big Mike in the assortment.`;
// }
// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);
// pizzaPalace.order('Ultracheese', makePizza, onOrderError);


// //решил
// //===========================================================================




// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }
// console.log(orderedItems)
// orderedItems.forEach(element => {
//   totalPrice+=element
// });

    
//   // Change code above this line
//     console.log(totalPrice)
//   return totalPrice;
// }




// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);

//Done
//================================================================

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   numbers.forEach(number => {
//   if (number > value) {
//     console.log(filteredNumbers.push(number))
//   }
  
// });


//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }

//   // Change code above this line
//   console.log(filteredNumbers)
//   return filteredNumbers;
// }


// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);

//done
//=================================================================


// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach((element, i) => {
//      console.log(element)
//      if (secondArray.includes(element)) {
//        commonElements.push(element);
//      }
//    });

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }
//   // console.log(firstArray, secondArray);
//   console.log(commonElements)
//   return commonElements;
//   // Change code above this line
// }

// // getCommonElements([1, 2, 3], [2, 4]);
// // getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// // getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// // getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// // getCommonElements([1, 2, 3], [10, 20, 30]);

//done
//====================================================================


// function changeEven(numbers, value) {
//   // Change code below this line


  
//   // const newArray = [];
//   // numbers.forEach((element, i) => {
//   //   if (element % 2 === 0) {
//   //     newArray.push(element+value);
//   //   } else {
//   //     newArray.push(element)
//   //   }
//   // console.log(newArray)
//   //   return newArray
//   // });

//     const newArray1 = []
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//     newArray1.push(numbers[i]+value)
//     } else {
//         newArray1.push(numbers[i])
//   }
//   }
//   console.log(newArray1);
//   return newArray1

//   // Change code above this line
// }


// changeEven([1, 2, 3, 4, 5], 10);
// changeEven([2, 8, 3, 7, 4, 6], 10);
// changeEven([17, 24, 68, 31, 42], 100);
// changeEven([44, 13, 81, 92, 36, 54], 100);
// changeEven(
//   [17, 19, 24, 6, 21, 13, 8, 20, 23, 6, 18, 17, 17, 8, 11, 23, 7, 21, 24],
//   19
// );

//done
//======================================================================


// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Хьюстон", score: 64 },
// ];

// const names = students.map(student => student.name);
// console.log(names);


//=====================================================================

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(value => value % 2 === 0);
// const oddNumbers = numbers.filter(value => value % 2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);

//done
//==================================================================


// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction', 'mysticism'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism', 'adventure'],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(books => books.genres);
// const uniqueGenres = allGenres.filter((allGenres, i, arr) => arr.indexOf(arr[i]) === i);

// console.log(allGenres);
// console.log(uniqueGenres)


//done
//======================================================================

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Bernard Cornwell';
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);



//done
//================================================================


// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];

// console.table(users);
//   // console.log(users)


// const getUsersWithFriend = (users, friendName) => {
//   users.filter(user => user.friends.includes(friendName));
//   console.log(user.friends)
// };

//done
//=========================================================================

const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
    age: 39,
  },
];

// console.log(users);

const getFriends = users => {
  const friendArray = users.flatMap(item => item.friends);
 
  const uniqueFriend = friendArray.filter(
    (friends, i, arr) => arr.indexOf(friends) === i
  );

console.log(friendArray);


  return uniqueFriend;
};

