allCaps = (str) => {
  str.toUpperCase
};

combine = (str1, str2) => {
  return str1.concat(str2)
};

reverseString = (str) => {
  return str.split("").reverse().join("")
};

reduceString = (str, amount) => {
  return str.slice(0, amount)
};
