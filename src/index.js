/**
 * const, let
 */

// var v = 2;
// console.log(v);

// v = "上書き可能"

// console.log(v);

// var v = "再宣言も可能";

// console.log(v);

// let v2 = 12;
// console.log(v2);

// v2 = "上書き可能";
// console.log(v2);

// let v2 = "再宣言不可";
// var v2 = "varでもだめ";
// console.log(v2);

// const v3 = "const";
// console.log(v3);
// v3 = "上書き不可";
// console.log(v3);

// const v3 = "再宣言も不可";

// const v4 = {
//   name: "test",
//   age: 28,
// };
// v4.name = "上書き";
// console.log(v4);

// const v5 = ["a", "b"];
// v5[0] = "z";
// v5.push("c");
// console.log(v5);

// const name = "hoge";
// const age = 12;

// const msg = `${name} : ${age} 歳`;
// console.log(msg);

// const func1 = (str) => str + str;
// const func2 = (a, b) => a + b;
// console.log(func1("hoge"));
// console.log(func2(9, 1));

// const prof = {
//   name: "taro",
//   age: 22
// };

// const msg = `name is ${prof.name}. age is ${prof.age}.`;
// console.log(msg);

// const { name, age } = prof;
// const msg2 = `name is ${name}. age is ${age}.`;
// console.log(msg2);

// const hoge = [1, 2, 3];
// const [a, b] = hoge;
// console.log(a, b);

// const sayHello = (name = "anonymous") => console.log(`hello ${name}`);
// sayHello();

// const arr1 = [1, 2];
// console.log(...arr1);

// const sumFunc = (a, b) => console.log(a + b);
// sumFunc(...arr1)

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1, num2);
// console.log(arr3);

// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);
// const [...arr7] = arr4;
// console.log(arr7);

// const arr8 = [...arr4, ...arr5];
// console.log(arr8);

// const arr = ["hoge", "fuga", "piyo"];
// // for (let i = 0; i < arr.length; i++) {
// //   console.log(arr[i]);
// // }

// const arr2 = arr.map((name) => {
//   return name;
// })

// console.log(arr2)
// arr.map((name, idx) => console.log(idx, name));

// const numArr = [1, 2, 3, 4, 5];
// const filterd = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(filterd)

// const arr = ["tanaka", "yamada", "sato"];
// console.log(arr.map((name) => {
//   if (name === "sato") {
//     return name;
//   } else {
//     return `${name}さん`
//   }
// }))
