// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!

function squareDigits(num) {
  let numberString = String(num);
  let newNumber = "";
  for (let i = 0; i < numberString.length; i++) {
    newNumber += numberString[i] ** 2;
  }

  return newNumber;
}

console.log(squareDigits(9119));
console.log(squareDigits(765));

/** DESCRIPTION:
You walk in a maze. 
You need to reach the exit through many rooms.
These rooms are in a straight line.

You can only walk in the dark. 
Otherwise, you will be caught by the enemy.

Your trouble is that some rooms have light bulbs. 
If the light bulb is bright when you enter the room. 
You were caught by the enemy.

Fortunately, the status of these bulbs (on/off) is aoto-switched every minute.
So you have a chance to go through the maze.

Task
Let's us use a string map to represent these rooms， 
like this: "xo oxox".

"x" means there is a bulb in the room, and its initial status is off;
"o" means there is a bulb in the room, and its initial status is on;
" "(space) means a room without bulb, it's always dark.

Your task is to determine if you can go through the maze. 
Return true if you can, false otherwise.

Note
Your initial position is the most left
the exit position is the most right.

Your moving speed is 1 minute per step. 
You can not stop before you start your moving until you reach the exit.

Examples
For map = "xo oxox". The output should be true.

step 0 :  xo oxox
          ^ <--------You are here
step 1 :  ox xoxo
           ^ <--------You are here
step 2 :  xo oxox
            ^ <--------You are here
step 3 :  ox xoxo
             ^ <--------You are here
step 4 :  xo oxox
              ^ <--------You are here
step 5 :  ox xoxo
               ^ <--------You are here
step 6 :  xo oxox
                ^ <--------You are here
step 7 :  ox xoxo
                 ^ <--------You've go through the maze :)
For map = "xo  oxox". The output should be false.

step 0 :  xo  oxox
          ^ <--------You are here
step 1 :  ox  xoxo
           ^ <--------You are here
step 2 :  xo  oxox
            ^ <--------You are here
step 3 :  ox  xoxo
             ^ <--------You are here
step 4 :  xo  oxox
              ^ <--------You were caught by the enemy :(
Happy Coding ^_^
*/

function bulbMaze(maze) {
  //coding and coding..
  let hidden = true;
  for (let minute = 0; minute < maze.length; minute++) {
    if (maze[minute] === " ") {
      hidden = true;
    } else if (minute % 2 === 0 && maze[minute] === "x") {
      hidden = true;
    } else if (minute % 2 !== 0 && maze[minute] === "o") {
      hidden = true;
    } else {
      return false;
    }
  }
  return hidden;
}

console.log(bulbMaze("xo oxox"));
console.log(bulbMaze("xooxxo"));

/**
 * Kevin is noticing his space run out! 
 * Write a function that removes the spaces from the values 
 * and returns an array showing the space decreasing.
For example, running this function on the array 
['i', 'have','no','space'] would produce 
['i','ihave','ihaveno','ihavenospace']
 */

// function spacey(array){
//     let newWord=""
//     let newArray=[]
//     console.log(array)
//     for (let i=0; i < array.length; i++){
//       console.log(array[i])
//       newWord+=array[i]
//       newArray.push(newWord)
//     }
//     return newArray
//   }
//   console.log(spacey(['kevin', 'has','no','space']))

function solution(str, ending) {
  // TODO: complete
  let match = false;
  let stringMatch = "";
  for (let i = 0; i < str.length; i++) {
    for (let j=0; j < ending.length; j++){
      if (str[i] === ending[j]) {
        stringMatch = stringMatch + str[i];
        match = true;
      }
    }
  }
  return match
}

console.log(solution("abcde", "cde"));
// console.log(solution('abcde', 'abc'))
