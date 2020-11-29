function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.substring(0,1).toUpperCase() + word.substring(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.substring(0,1) +"." + lastName.substring(0,1);
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (vatRate === undefined) throw new Error("vatRate is required");
  return (Math.round((originalPrice * (1 + vatRate/100))*100))/100;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  return (Math.round((originalPrice * (1 - reduction/100))*100))/100;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  if(str.length%2 == 0)
    return str.substring(Math.round(str.length/2)-1, Math.round(str.length/2)+1);
  else
    return str.substring(Math.round(str.length/2)-1, Math.round(str.length/2));
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  var splitStr =  word.split("");
  var revWord = splitStr.reverse();
  return revWord.join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  //var splitStr =  words.split(" ");
  var reversedWords = [];
  for(var i = 0; i< words.length; i++)
  {
    reversedWords[i] = reverseWord(words[i]);
  }
  return reversedWords;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
  var count = 0;
  for(var i=0; i<users.length; i++){
    if (users[i].type == "Linux") count++;
  }
  return count;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  var sum = 0;
  for(var i=0; i<scores.length;i++)
  {

     sum += scores[i];
  }
  return ((Math.round(sum/(scores.length)*100)))/100;
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");

  var isDiv3 = n%3==0;
  var isDiv5 = n%5==0;

  if(isDiv3 && isDiv5) return "fizzbuzz";
  else if(isDiv3)  return "fizz";
  else if(isDiv5)  return "buzz";
  else return n;
 
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
