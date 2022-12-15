// Модуль 2. Занятие 3. Массивы
// Example 1 - Базовые операции с массивом
// Создайте массив genres с элементами «Jazz» и «Blues».
// Добавьте «Рок-н-ролл» в конец.
// Выведите в консоль первый элемент массива.
// Выведите в консоль последний элемент массива. Код должен работать для массива произвольной длины.
// Удалите первый элемент и выведите его в консоль.
// Вставьте «Country» и «Reggae» в начало массива.

// const genres = ["Jazz", "Blues"];
// console.log(genres);

// genres.push("Rock'n'Roll")
// console.log(genres)

// // console.log(genres[0]);

// const arrLength = genres.length - 1;
// console.log(genres[arrLength]);

// // console.log(genres.shift())
// console.log(genres.splice(0, 1)[0])
// console.log(genres)

// genres.unshift("Country", "Reggae");
// console.log(genres);



////====================================================

//* Example 2 - Массивы и строки
// Напиши скрипт для вычисления площади прямоугольника со сторонами, значения которых хранятся в переменной values в виде строки. Значения гарантированно разделены пробелом.

// const values = '8 11';

// const valuesArray = values.split(' ');
// console.log(valuesArray);

// const square = valuesArray[0] * valuesArray[1];
// console.log('square:', square);





//========================================================






//* Example 3 - Перебор массива
// Напиши скрипт для перебора массива fruits циклом for. Для каждого элемента массива выведи в консоль строку в формате номер_элемента: значение_элемента. Нумерация элементов должна начинаться с 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
// for (let i = 0; i < fruits.length; i += 1) {
//     console.log(`${i+1}: ${fruits[i]}`)
// }

//======================================================================


//* Example 4 - Массивы и циклы
// Напиши скрипт который выводит в консоль имя и телефонный номер пользователя. В переменных names и phones хранятся строки имен и телефонных номеров, разделенные запятыми. Порядковый номер имен и телефонов в строках указывают на соответствие. Количество имен и телефонов гарантированно одинаковое.

// const names = 'Jacob,William,Solomon,Artemis';
// console.log("🚀 -> names", names);

// const phones = '89001234567,89001112233,890055566377,890055566300';
// console.log("🚀 -> phones", phones);

// const namesArray = names.split(',')
// console.log("🚀 -> namesArray", namesArray);

// const phoneNumber = phones.split(',')
// console.log("🚀 -> phoneNumber", phoneNumber);

// for (const i in namesArray) {
//     console.log(`${namesArray[i]}: ${phoneNumber[i]}`);
// }

// const namesArray = names.split(",");
// const phonesArray = phones.split(",");

// console.log(namesArray, phonesArray)

// for (const i in namesArray) {
//     console.log(`${namesArray[i]}: ${phonesArray[i]}`)
// }






// Example 5 - Массивы и строки
// Напиши скрипт который выводит в консоль все слова строки кроме первого и последнего. Результирующая строка не должна начинаться или заканчиваться пробельным символом. Скрипт должен работать для любой строки.




const string = 'Welcome to the future';
console.log("🚀 -> string", string);







// Example 6 - Массивы и строки
// Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит ее в консоль.

// const string = 'Welcome to the future';

//* Example 7 - Сортировка массива с циклом
// Напиши скрипт сортировки массива строк в алфавитном порядке по первой букве элемента.

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

// const langSorted = langs.sort();
// console.log(langSorted);

// for (const i for langs) {
//     let wasSwap = false;
//     for (let j = 0; j < langs.length - 1 - i; j++) {
//         if (lang[j].charCodeAt(0) > langs[j + 1].charCodeAt(0))
//         // const element = array[j];
//             const swap = langs

//     }
// }

// Example 8 - Поиск элемента
// Напиши скрипт поиска самого маленького числа в массиве. Код должен работать для любого массива чисел. Используй цикл для решения задачи.

// const numbers = [2, 17, 94, 1, 23, 37];
// let min = 0;
// for (const i of numbers) {
// min = Math.min(...numbers)
// }
// console.log(min); // 1

// (function (num) {
//     console.log( num ** 2)
// })(5) // самовызывающая функция
