const { capitalize } = require("./exercise001");

function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  var squares = [];
  for (var i = 0; i < nums.length; i++) {
    squares[i] = nums[i] * nums[i];
  }
  return squares;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  var camelCaseWord = words[0];
  for (var i = 1; i < words.length; i++) {
    camelCaseWord += capitalize(words[i]);
  }
  return camelCaseWord;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  var totalSubjects = 0;
  for (var i = 0; i < people.length; i++) {
    totalSubjects += people[i].subjects.length;
  }
  return totalSubjects;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  var found = false;
  menu.forEach(myFunction);

  function myFunction(item) {
    if (item.ingredients.includes(ingredient)) {
      found = true;
    }
  }
  return found;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");

  var duplicateNumbers = [];
  arr1.forEach(myFunction);

  function myFunction(item) {
    if (arr2.includes(item) && !duplicateNumbers.includes(item)) {
      duplicateNumbers.push(item);
    }
  }
  return duplicateNumbers.sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
