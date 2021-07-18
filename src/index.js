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

const func1 = (str) => str + str;
const func2 = (a, b) => a + b;
console.log(func1("hoge"));
console.log(func2(9, 1));
