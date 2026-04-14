// console.log("\n=== Деструктуризация массивов ===");
// const colors = ["red", "green", "blue"];
// const color1 = colors[0];
// const color2 = colors[1];
// console.log(color1, color2);
// const [firstColor, secondColor, thirdColor] = colors;
// console.log(firstColor, secondColor, thirdColor);
// const [primary,, tertiary] = colors;
// console.log(primary, tertiary);
// const [c1, c2, c3, c4 = "yellow"] = colors;

// console.log(c4);
// console.log("\nДеструктуризация объектов");

// const userName = user.name;
// const userAge = user.age;
// console.log(userName, userAge);
// const { name, age, city } = user;
// console.log(name, age, city);
// const { name: fullName, age: years } = user;
// console.log(fullName, years);
// const { name: personName, country = "Россия"} = user;
// console.log(personName, country);
// const user = {
//   name: "Алиса",
//   age: 25,
//   city: "Москва",
// };
// console.log("Деструктуризация в параметрах");
// function printUserOld(user) {
//   console.log(`Имя: ${user.name}`);
//   console.log(`Возраст: ${user.age}`);
//   console.log(`Город: ${user.city}`);
// }
// function printUserOld({name, age, city}) {
//   console.log(`Имя: ${name}`);
//   console.log(`Возраст: ${age}`);
//   console.log(`Город: ${city}`);
// }
// printUserOld(user);
// console.log();
// printUserOld(user);
// const product = {
//   name: "iPhone",
//   price: 100000,
//   category: "Mobile Phone",
//   inStock: true
// };
// function printProduct({name, price, category, inStock}) {
//     console.log(`Название: ${name}`);
//     console.log(`Цена: ${price}`);
//     console.log(`Категория: ${category}`);
//     console.log(`В наличии: ${inStock}`);
//   }
// printProduct(product);
// console.log("Spread для массивов");
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = [...arr1, ...arr2];
// console.log("Объединенный массив:", combined);
// const copy = [...arr1];
// console.log("Копия массива:", copy);
// const extended = [0, ...arr1, 7, 8];
// console.log("Расширенный массив:", extended);
// console.log("Spread для объектов");
// const person = {
//   name: "Иван",
//   age: 30
// };
// const address = {
//   city: "Санкт-Петербург",
//   street: "Невский проспект"
// };
// const fullInfo = {...person, ...address};
// console.log("Полная информация", fullInfo);
// const personCopy = {...person};
// console.log("Копия объекта", personCopy);
// const updated = {...person, age: 31, occupation: "Developer"};
// console.log("Обновленный объект:", updated);
// console.log("Rest оператор");
// function sum(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }
// console.log("Сумма 1,2,3:", sum(1,2,3));
// console.log("Сумма 1,2,3,4,5:", sum(1,2,3,4,5));
// const numbers = [10,20,30,40,50];
// const [first,second, ...rest] = numbers;
// console.log("Первое число:", first);
// console.log("Второе число:", second);
// console.log("Остальные числа:", rest);
const num1 = [1,3,5,7,9];
const num2 = [2,4,6,8];
const combined2 = [...num1, ...num2];
console.log("Объединенный массив:", combined2);
function findMax(...numbers) {
  return Math.max(...numbers);
}
console.log(findMax(...combined2));
const iPhone = {
    name: "iPhone",
    price: 100000
  };
  const iPad = {
    name1: "iPad",
    price1: 60000
  };
  const fullInfo = {...iPad, ...iPhone};
  console.log("Полная информация", fullInfo);