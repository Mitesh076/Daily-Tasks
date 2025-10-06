<<<<<<< HEAD
var nums = [1, 2, 3, 4,5 , 5, 6];

function shift(k) {
  let shifted = [];

  for (let i = 0; i < nums.length; i++) {
    shifted[(i + k) % nums.length] = nums[i];
  }
  console.log("shifted array by :", k);
  return console.log(shifted);
}

shift(2);
=======
var nums = [1, 2, 3, 4,5 , 5, 6];

function shift(k) {
  let shifted = [];

  for (let i = 0; i < nums.length; i++) {
    shifted[(i + k) % nums.length] = nums[i];
  }
  console.log("shifted array by :", k);
  return console.log(shifted);
}

shift(2);
>>>>>>> 035db531475feb4494fb4663d28bf101ff9cbd58
