append = (arr, item) => {
  return arr.push(item);
};

truncate = (arr) => {
  arr.pop;
  return arr
};

prepend = (arr, item) => {
  return arr.unshift(item);
};

curtail = (arr) => {
  //not sure what this wants
};

concat = (arr1, arr2) => {
  return arr1.concat(arr2);
};

insert = (arr, item, index) => {
  return arr.splice(index, 0, item);
};

count = (arr, item) => {
  return arr.match(item);
};

duplicates = (arr) => {
  return arr.slice(0);
};

square = (arr) => {
  //make use of .map()
  let arr4 = arr.map(function (x) {
    return x * x;
  })
  return arr4
};

findAllOccurrences = (arr, item) => {
  return arr.filter(item)
};
