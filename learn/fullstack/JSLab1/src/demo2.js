// arrow function demo
function myFunc1(x, y) {
  return x * y;
}
const myFunc2 = (x, y) => {
  return x * y;
};
const myFunc3 = (x, y) => x * y;
const myFunc4 = (x) => x * 100;
p = 300;
q = 200;
const myFunc5 = () => p * q;
console.log(myFunc1(2, 3));
console.log(myFunc2(3, 4));
console.log(myFunc3(5, 6));
console.log(myFunc4(7, 8));
console.log(myFunc5());
