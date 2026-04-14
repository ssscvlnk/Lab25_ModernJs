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
const product = {
  name: "iPhone",
  price: 100000,
  category: "Mobile Phone",
  inStock: true
};
function printProduct({name, price, category, inStock}) {
    console.log(`Название: ${name}`);
    console.log(`Цена: ${price}`);
    console.log(`Категория: ${category}`);
    console.log(`В наличии: ${inStock}`);
  }
printProduct(product);