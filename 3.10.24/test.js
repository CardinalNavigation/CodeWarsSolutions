const filterList = require("../3.10.24/index");
const moveZeros = require("../3.10.24/index");

test("filterList is filtering strings?", () => {
  expect(filterList(["a", 1])).toEqual([1]);
});

test("moveZero is taking the the array and moving zero's to the end", () => {
  expect(moveZeros([0, "a", false])).toStrictEqual(["a", false, 0]);
});
