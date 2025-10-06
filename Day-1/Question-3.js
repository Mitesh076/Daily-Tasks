<<<<<<< HEAD
input = "icecreame";

function check() {
  var j = 0;
  output = [];
  var lower = input.toLowerCase();
  len = lower.length;
  vovels = [];
  for (i = 0; i <= len; i++) {
    if (
      lower[i] == "a" ||
      lower[i] == "e" ||
      lower[i] == "i" ||
      lower[i] == "o" ||
      lower[i] == "u"
    ) {
      vovels.push(lower[i]);
    }
  }
  rvovels = vovels.reverse();
  console.log(rvovels);
  j = 0;
  for (i = 0; i <= len; i++) {
    if (
      lower[i] == "a" ||
      lower[i] == "e" ||
      lower[i] == "i" ||
      lower[i] == "o" ||
      lower[i] == "u"
    ) {
      output.push(rvovels[j]);

      j++;
    } else {
      output.push(lower[i]);
    }
  }
  console.log(output.join(""));
}
check();
=======
input = "icecreame";

function check() {
  var j = 0;
  output = [];
  var lower = input.toLowerCase();
  len = lower.length;
  vovels = [];
  for (i = 0; i <= len; i++) {
    if (
      lower[i] == "a" ||
      lower[i] == "e" ||
      lower[i] == "i" ||
      lower[i] == "o" ||
      lower[i] == "u"
    ) {
      vovels.push(lower[i]);
    }
  }
  rvovels = vovels.reverse();
  console.log(rvovels);
  j = 0;
  for (i = 0; i <= len; i++) {
    if (
      lower[i] == "a" ||
      lower[i] == "e" ||
      lower[i] == "i" ||
      lower[i] == "o" ||
      lower[i] == "u"
    ) {
      output.push(rvovels[j]);

      j++;
    } else {
      output.push(lower[i]);
    }
  }
  console.log(output.join(""));
}
check();
>>>>>>> 035db531475feb4494fb4663d28bf101ff9cbd58
