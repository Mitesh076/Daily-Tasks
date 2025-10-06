<<<<<<< HEAD
nums = [1, 1, 4, 2, 3, 1, 1, 2, 3, 5];

function removeDuplicates(k) {
  cleaned = [];
  let number = 1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] != "-") {
        if (nums[i] == nums[j]) {
          nums[j] = "-";
        }
      }
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != "-") {
      cleaned.push(nums[i]);
    }
  }
  return console.log(cleaned);
}

removeDuplicates();
=======
nums = [1, 1, 4, 2, 3, 1, 1, 2, 3, 5];

function removeDuplicates(k) {
  cleaned = [];
  let number = 1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] != "-") {
        if (nums[i] == nums[j]) {
          nums[j] = "-";
        }
      }
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != "-") {
      cleaned.push(nums[i]);
    }
  }
  return console.log(cleaned);
}

removeDuplicates();
>>>>>>> 035db531475feb4494fb4663d28bf101ff9cbd58
