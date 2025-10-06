<<<<<<< HEAD
flowerbed = [1, 0, 0, 0, 0, 0, 0, 0, 1];

function check(n) {
  len = flowerbed.length;
  count = 0;
  for (let i = 0; i < len; i++) {
    if (flowerbed[i] == 0) {
      if (flowerbed[i + 1] == 0 && flowerbed[i - 1] == 0) {
        count = count + 1;
        flowerbed[i] = 1;
      }
      if (i == len - 1) {
        if (flowerbed[i - 1] == 0) {
          count = count + 1;
          flowerbed[i] = 1;
        }
      }
      if (i == 0) {
        if (flowerbed[1] == 0) {
          count = count + 1;
          flowerbed[i] = 1;
        }
      }
    }
  }

  if (count >= n) {
    return console.log("true");
  } else {
    return console.log("false");
  }
}
check(4);
=======
flowerbed = [1, 0, 0, 0, 0, 0, 0, 0, 1];

function check(n) {
  len = flowerbed.length;
  count = 0;
  for (let i = 0; i < len; i++) {
    if (flowerbed[i] == 0) {
      if (flowerbed[i + 1] == 0 && flowerbed[i - 1] == 0) {
        count = count + 1;
        flowerbed[i] = 1;
      }
      if (i == len - 1) {
        if (flowerbed[i - 1] == 0) {
          count = count + 1;
          flowerbed[i] = 1;
        }
      }
      if (i == 0) {
        if (flowerbed[1] == 0) {
          count = count + 1;
          flowerbed[i] = 1;
        }
      }
    }
  }

  if (count >= n) {
    return console.log("true");
  } else {
    return console.log("false");
  }
}
check(4);
>>>>>>> 035db531475feb4494fb4663d28bf101ff9cbd58
