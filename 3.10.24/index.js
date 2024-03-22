/**In this kata you will create a function that takes a
 * list of non-negative integers and strings and returns
 * a new list with the strings filtered out.
 */

function filterList(l) {
  // Return a new array with the strings filtered out
  let numberArray = [];
  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] == "number") {
      numberArray.push(l[i]);
    }
  }
  return numberArray;
}

module.exports = filterList;

// console.log(filter_list([1,2,'a','b']))

/**
 * Write an algorithm that takes an array and moves all of the zeros to the end,
 * preserving the order of the other elements.
 */

// declare two new arrays, one for everything else, one for Zeros.
// combine both arrays with the spread operator. 
function moveZeros(arr) {
  let zeroArray = [];
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroArray.push(arr[i]);
    } else {
      newArray.push(arr[i]);
    }
  }
  return [...newArray, ...zeroArray]
}

// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

module.exports = moveZeros;