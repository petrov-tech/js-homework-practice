// 🚀


// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((total, time) => (total + time.playtime / time.gamesPlayed), 0);
// console.log(totalAveragePlaytimePerGame);

//done
//===============================================================================

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// const getTotalFriendCount = users => {

//   return users.reduce((user, friend) => (user + friend.friends, 0));
// };

// console.table(users)

// const getTotalFriendCount = users => {
//   return users.reduce(
//     (allFriend, { friends }) => allFriend + friends.length,
//     0
//   );
// };

// const array = [15, 16, 17, 18, 19];

// function reducer(previousValue, currentValue, index) {
//   const returns = previousValue + currentValue;
//   console.log(
//     `previousValue: ${previousValue}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`
//   );
//   return returns;
// }

// array.reduce(reducer);

//=====================================================================

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a,b) => a - b);
// console.log(ascendingReleaseDates)
// const alphabeticalAuthors = [...authors].sort((a, b) => b.localeCompare(a));
// console.log(alphabeticalAuthors)

//done
//===========================================================================

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94
//   },
//   {
//     title: "Enemy of God",
//     author: "Bernard Cornwell",
//     rating: 8.67
//   },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));
// console.table(sortedByAuthorName)

// const sortedByReversedAuthorName = [...books].sort((a, b) =>
//   b.author.localeCompare(a.author)
// );
// console.table(sortedByReversedAuthorName);

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);
// console.table(sortedByAscendingRating)

// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);
// console.table(sortedByDescentingRating)

// const sortedByAuthorName = [...books].sort((a, b) =>
//   a.author.localeCompare(b.author)
// );
// console.log(sortedByAuthorName);
// const sortedByReversedAuthorName = [...books].sort((a, b) =>
//   b.author.localeCompare(a.author)
// );
// console.log(sortedByReversedAuthorName);
// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);
// console.log(sortedByAscendingRating);
// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);
// console.log(sortedByDescentingRating);

//done
//===========================================================================

// const sortByDescendingFriendCount = users => {
//   return [...users].sort((a, b) => a.friends - b.friends);
// };

// const getSortedFriends = users => {
//  return [...users]
//     .filter((friend, i, array) => array.indexOf(friend) === i)
//     .sort((a, b) => a - b);

// };

//===========================================================================

// class Storage {
//   constructor(items, addItem, removeItem) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     this.items.push(item);
//   }

//     removeItem(removeToItem) {
//     return this.items.splice(1, 1);
//   }
// }

// // Change code above this line
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// //done
// //==============================================================================

// class StringBuilder {
//   constructor(initialValue) {
//    this.value = initialValue;
//   }
//   getValue() {
//     return this.value;
//     }
//     padStart(str) {
//      this.value = str + this.value
//     }
//     padEnd(str) {
//         this.value = this.value + str;
//     }
//     padBoth(str) {
//         this.value = str += this.value += str
//     }
// }

// // Change code above this line
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

//done
//=======================================================================

// class Car {
//   // Change code below this line
//     #brand;
//   constructor({ brand, model, price } = {}) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand() {
//     return this.#brand;
//   }
//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
//   // Change code above this line
// }

// new Car({ brand: "Audi", model: "Q3", price: 36000 });
// // new Car({ brand: "bmw", model: "X5", price: 58900 });
// // new Car({ brand: "Nissan", model: "Murano", price: 31700 });

// class User {
//   constructor({ name, age, salary }) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary
//   }

//   sayHello() {
//     return `Hello! My name is ${this.name}, i'm ${this.age} tears old!`
//   }
// }

// const user = new User({ name: "Alex", age: 30, salary: 1500 })

// console.log(user.sayHello())
// console.dir(user)
// console.log(user.prototype)
// console.log(User.prototype.sayHello())

// console.log(user.__proto__)
// console.log(User.__proto__)

// class Vehicle {
//   constructor({ model, color, wheels } = {}) {
//     this.model = model;
//     this.color = color;
//     this.wheels = wheels;
//   }
//   showInfo() {
//     return `Vechicle ${this.model} color ${this.color}`
//   }
// }

// class Car extends Vehicle {
//   constructor({ model, color, wheels, amountOfSist, amountOfDoors }) {
//     super(model, color, wheels);
//     this.model = model;
//     this.color = color;
//     this.wheels = wheels;
//     this.amountOfSist = amountOfSist;
//     this.amountOfDoors = amountOfDoors;
//   }
// }

// const car = new Car({
//   model: 'tesla',
//   color: 'red',
//   wheels: 4,
//   amountOfSist: 8,
//   amountOfDoors: 4,
// });


// console.log(car)




//===================================================================




// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line
//     blacklistedEmails = [];
   
  
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
  
//   }
//   blacklist(email){
//    this.blacklistedEmails.push(email)
//   }
//  isBlacklisted(email){
//      return this.blacklistedEmails.includes(email);
//     //  console.log(this.blacklistedEmails)
//  }
//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true