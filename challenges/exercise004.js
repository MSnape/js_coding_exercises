function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  var smallNums = [];

  nums.forEach(myFunction);

  function myFunction(item) {
    if (item < 1) {
      smallNums.push(item);
    }
  }
  return smallNums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  var namesBegWith = [];

  names.forEach(myFunction);

  function myFunction(item) {
    if (item.substring(0, 1) == char) {
      namesBegWith.push(item);
    }
  }
  return namesBegWith;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  var verbs = [];

  words.forEach(myFunction);

  function myFunction(item) {
    if (item.substring(0, 3) == "to ") {
      console.log(item.substring(0, 2));
      verbs.push(item);
    }
  }
  return verbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  var integers = [];

  nums.forEach(myFunction);

  function myFunction(item) {
    if (Number.isInteger(item)) {
      integers.push(item);
    }
  }
  return integers;
}

function getCities(users) {
  if (!users) throw new Error("users is required");

  var cities = [];
  users.forEach(myFunction);
  function myFunction(item){
    cities.push(item.data.city.displayName);
  
  }

 // for (var i = 0; i < users.length; i++) {
    
  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  var sqRoots = [];
  for (var i = 0; i < nums.length; i++) {
    sqRoots.push(to2DP(Math.sqrt(nums[i])));
  }
  return sqRoots;
}

function to2DP(number) {
  return (Math.round(number * 100)) / 100;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  var matchSentences = [];
  sentences.forEach(myFunction);

  function myFunction(item) {
    var lowerCaseStr = str.toLowerCase();
    var lowerCaseItem = item.toLowerCase();
    if (lowerCaseItem.includes(lowerCaseStr)) {
      matchSentences.push(item);
    }
  }
  return matchSentences;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");

  var longestSides = [];
  triangles.forEach(myFunction);

  function myFunction(item) {
    longestSides.push(Math.max(...item));
  }
  return longestSides;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
