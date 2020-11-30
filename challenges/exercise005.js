/* Code needs to be refactored to use more functions within 
functions, arrow functions and implicit return*/

const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  for (var i = 0; i < nums.length - 1; i++) {
    if (nums[i] == n) {
      return nums[i + 1];
    }
  }
  return null;
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");

  var zeroCount = 0;
  var oneCount = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.substring(i, i + 1) === "0") {
      zeroCount++;
    }
    else if (str.substring(i, i + 1) === "1") {
      oneCount++;
    }
  }

  return {
    '0': zeroCount,
    '1': oneCount
  };
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  return parseFloat(n.toString().split('').reverse().join('')) * Math.sign(n);
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");

  var sum = 0;
  for (var i = 0; i < arrs.length; i++) {
    sum += arrs[i].reduce(function (a, b) {
      return a + b;
    }, 0);
  }
  return sum;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");

  if (arr.length >= 2) [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");

  var lowerSearchTerm = searchTerm.toLowerCase();
  var found = false;

  for (key in haystack) {
    if (typeof haystack[key] == "string") {
      var lowerCaseValue = haystack[key].toLowerCase();
      if (lowerCaseValue.includes(lowerSearchTerm)) {
        found = true;
      }
    }
  }

  return found;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  var unpunctuatedStr = str.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '');
  var wordArray = unpunctuatedStr.split(' ');

  const frequencies = {};
  for (let i = 0; i < wordArray.length; i++) {
    const word = wordArray[i].toLowerCase();
    if (frequencies[word] === undefined) {
      frequencies[word] = 1;
    }
    else frequencies[word] += 1;
  }
  return frequencies;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
