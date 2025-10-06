inputarray = [1, 2, [5, 4], 3, [5], [93, 8, 2,[5]]];

function flatten(input) {
  simple = inputarray.toString();
  flattenarray = simple.split(",").map(Number);

  console.log(flattenarray);
}

flatten();
