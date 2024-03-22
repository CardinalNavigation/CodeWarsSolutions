function aVeryBigSum(ar) {
  // Write your code here
  let newSum = 0;
  for (let i = 0; i < ar.length; i++) {
    console.log(ar[i]);
    newSum += ar[i];
  }
  return newSum;
}

console.log(aVeryBigSum([1, 2, 3, 4, 5]));

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code her
  //S and T is the range of location of house
  //A is apple tree B is orange tree
  //Then we have two arrays, which will need to be compared to the location of the house, we can set two
  //different if statemetns that loop through the arrays in question and return whether the fruit falls within that
  //range
  console.log(`House is within ${s} - ${t}`)
    console.log(`ATree is at ${a}, OTree is at ${b}`)
    console.log("Apples is", apples)
    console.log("Oranges is", oranges)
  let appleHitCount = 0;
  let orangeHitCount = 0;
  for (let i = 0; i < apples.length; i++) {
    if (a + apples[i] >= s && a + apples[i] <= t) {
      console.log(a+apples[i]);
      appleHitCount += 1;
    }
  }
  for (let i = 0; i < oranges.length; i++) {
    if (b + oranges[i] >= s && b + oranges[i] <= t) {
      console.log(b+oranges[i]);
      orangeHitCount += 1;
    }
  }
  return [appleHitCount, orangeHitCount];
}
// console.log(countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]));
console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [-5,-6]));
