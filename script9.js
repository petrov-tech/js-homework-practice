// Модуль 5. Занятие 9. Контекст вызова функции и this
// Example 1 - Мастерская драгоценностей
// Напишите метод calcTotalPrice(stoneName), который принимает название камня и рассчитывает и возвращает общую стоимость камней с таким именем, ценой и количеством из свойства stones.

// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     const curentStone = this.stones.find((stone) => stoneName === stone.name);
//     return curentStone.price * curentStone.quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600


//done
//================================================================================



// Example 2 - Телефонная книга
// Выполните рефакторинг методов объекта phonebook чтобы код заработал.

// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: 'default',
//       ...contact,
//       id: phonebook.generateId(),
//       createdAt: phonebook.getDate(),
//     };
//       this.contacts.push(newContact);
//       return this.contacts;
//   },
//   generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// console.log(
//   phonebook.add({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   }),
// );
// console.log(
//   phonebook.add({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   }),
// );

// ==================================================================================

// Example 3 - Калькулятор
// Создайте объект calculator с тремя методами:

// read(a, b)- принимает два значения и сохраняет их как свойства объекта.
// add() - возвращает сумму сохранённых значений.
// mult() - перемножает сохранённые значения и возвращает результат.


// const calculator = {
//     a: 0,
//     b: 0,
//     read(a, b) {
//         this.a = a;
//         this.b = b;
//     },
//     add() {
//         return this.a + this.b
//     },
//     mult() {
//         return this.a * this.b
//     }
// };

// calculator.read(3, 5)
// console.log(calculator)
// console.log(calculator.add())
// console.log(calculator.mult())




//==============================================================================

// function foo(num) {
//   console.log('foo', num);

//     // console.log(this.a)
//     this.count += 1;
// }

// foo.count = 0

// // foo(6) // window

// foo.call(foo, 1) // context - foo
// foo.call(foo, 2) // context - foo
// foo.call(foo, 3) // context - foo

// console.log(foo.count);

// const obj = {
//     a:5,
//     showCntx: foo,
// }

// obj.showCntx(4) //obj
// console.log(obj)

// // foo.count = 0

// // for (let i = 0; i < 5; i+=1) {
// //     foo.call(foo, i);

// // }

// // foo(6)