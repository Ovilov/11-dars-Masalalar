// 1.  Bahosi 5, 4, 3 bo’lgan o’quvchilarni ismlaridan iborat massiv qaytaruvchi getNamesByGrade(students, grade) funksiya tuzing. (map, filter)

const students = [
  { name: "Quincy", percent: 96 },
  { name: "Jason", percent: 84 },
  { name: "Alexis", percent: 100 },
  { name: "Sam", percent: 65 },
  { name: "Katie", percent: 90 },
  { name: "Anna", percent: 75 },
].map((item) => {
  if (item.percent > 84) {
    return { ...item, grade: 5 };
  } else if (item.percent <= 84 && item.percent > 70) {
    return { ...item, grade: 4 };
  } else if (item.percent <= 70 && item.percent > 60) {
    return { ...item, grade: 3 };
  } else {
    return { ...item, grade: 2 };
  }
});

console.log(students);

function getNamesByGrade(students, grade) {
  return students
    .filter((student) => {
      return student.grade === grade;
    })
    .map((student) => {
      return student.name;
    });
}

const result = getNamesByGrade(students, 5);
console.log(result);

// 2.  Massivdagi bir xil so’zlar sonini hosil qiluvchi obyekt yarating. (reduce)

//////////////////////////////////////////

// 3.  Massiv elementlari kvadratlaridan hosil bo’lgan massiv hosil qiling. (map)

// let numbers = [1, 3, 9, 43, 78, 38];
// let number = [];
// function kvadrat() {
//   for (let i = 0; i < numbers.length; i++) {
//     number.map((item) => {
//       return item ** 2;
//     });
//   }
// }

// kvadrat(numbers);
// console.log(number);

//Chiqmadi !!!

// 5.  Satrdagi so’zlarning bosh harflarini oling. (split, map, join)

// let matn = prompt("Matnni kiriting :");

// let str = matn
//   .split(" ")
//   .map((word) => {
//     return word.charAt();
//   })
//   .join("");
// console.log(str);

//////////////////////////////////////////

// 6.  Massivdagi eng yosh va eng qarilarni topib, ularni yoshlarini farqini toping. (sort).

// let obj = [
//   { name: "John", age: 13 },
//   { name: "Mark", age: 56 },
//   { name: "Rachel", age: 45 },
//   { name: "Nate", age: 67 },
//   { name: "Jeniffer", age: 65 },
// ].sort((a, b) => a - b);

// console.log(obj.at(-2).age - obj.at().age);

// 7.  N ta elementdan iborat massiv berilgan.
// Massiv elementlari orasidan juftlarini va toqlarini o'z ichiga oladigan massivlar hosil qilinsin. (filter)

// const numbers = [1, 2, 3, 35, 5, 6, 7, 8, 9, 10];

// const oddNumbers = numbers.filter((num) => {
//   return num % 2 == 0;
// });
// const enenNumbers = numbers.filter((num) => {
//   return num % 2 == 1;
// });

// console.log(oddNumbers, enenNumbers);

// 9. Products massivini id, name, price, rating va discount bo'yicha sortlash; (sort)

let products = [
  {
    id: 6,
    name: "Smarthpone",
    price: 12000,
    rating: 4.5,
    discount: 20,
  },
  {
    id: 2,
    name: "Acer",
    price: 10000,
    rating: 4.3,
    discount: 10,
  },
  {
    id: 1,
    name: "Mac book",
    price: 17000,
    rating: 4.7,
    discount: 40,
  },
  {
    id: 4,
    name: "HP",
    price: 21000,
    rating: 4.1,
    discount: 30,
  },
  {
    id: 5,
    name: "Dell",
    price: 35000,
    rating: 4.9,
    discount: 30,
  },
];

// 9. Products massivini id, name, price, rating va discount bo'yicha sortlash; (sort)

// const sortByID = products.sort((x, y) => {
//   return x.id - y.id;
// });

// console.log(sortByID);

// ///////////////////////////////////////////////////

// const sortByName = products.sort((a, b) => {
//   return a.name - b.name;
// });

// console.log(sortByName);

// ////////////////////////////////////////////////////

// const sortByPrice = products.sort((a, b) => {
//   return a.price - b.price;
// });

// console.log(sortByPrice);

/////////////////////////////////////////////////////

// const sortByRating = products.sort((a, b) => {
//   return b.rating - a.rating;
// });

// console.log(sortByRating);

///////////////////////////////////////////////////

// 10. Rating bo'yicha eng kuchli product topilsin. (sort)

// const sortByRating = products.sort((a, b) => {
//     return b.rating - a.rating;
//   });

//   console.log(sortByRating);

// console.log(sortByRating[0]);

//////////////////////////////////////////////////

// 11. Narxi eng past bo'lgan product topilsin. (sort)

// const sortByPrice = products.sort((a, b) => {
//   return a.price - b.price;
// });

// console.log(sortByPrice);
// console.log(sortByPrice.at());

/////////////////////////////////////////

// 13. Faqatgina products nomlaridangina iborat bo'lgan massiv qaytaring. (map)

// console.log(products.map((product) => product.name));

///////////////////////////////////////////

// 14. Id si 5 bo'lgan elementni nomini qaytaruvchi dastur yozing. (find)

// console.log(products.find((product) => product.id == 5).name);

///////////////////////////////////////////

// 15. Id si 4 bo'lgan productni o'chiruvchi dastur yozing. (filter)

// const filteredProducts = products.filter((product) => {
//   return product.id !== 4;
// });

// console.log(filteredProducts)

//////////////////////////////////////////
