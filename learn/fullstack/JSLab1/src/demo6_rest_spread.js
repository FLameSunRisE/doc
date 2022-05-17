const numbers = [3, 1, 4, 1, 5, 9];
const newNumbers = [...numbers, 55, 33, 99];
console.log(newNumbers);
const course = { name: "react", instructor: "MarkHo" };
const fullCourse = {
  ...course,
  duration: 35,
  location: "taipei",
};
console.log(fullCourse);
const myFilter = (...parameters) => {
  return parameters.filter((e) => e > 10);
};
console.log("filter", myFilter(1, 2, 3, 10, 11, 12, 13, 22, 55, 3, 1));
