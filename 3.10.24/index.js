/**In this kata you will create a function that takes a 
 * list of non-negative integers and strings and returns 
 * a new list with the strings filtered out.
 */

function filterList(l) {
  // Return a new array with the strings filtered out
  let numberArray=[]
  for (let i=0; i < l.length; i++){
    if ((typeof l[i])=='number'){
        numberArray.push(l[i])
    }
  }
  return numberArray
}

module.exports = filterList;


// console.log(filter_list([1,2,'a','b']))

