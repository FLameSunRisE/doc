const user = { id: 42, is_verified: true };

const { id, is_verified } = user;
console.log(id);
console.log(is_verified);
// name should be mapping to key
const { my_id, myid_is_verified } = user;
console.log(my_id);
console.log(myid_is_verified);
const numbers = [1, 2, 3, 4, 5];
//const [n1, n2, n3] = numbers
const [n1, n2, n3, n4, n5, n6] = numbers;
console.log(n6, n3, n1, n2, n5, n4);

const user2 = { name: "Mark", age: 44 };
const { name } = user2;
console.log("name=", name);
const course = { title: "react", duration: 44 };
const { duration, title } = course;
console.log(duration, title);
