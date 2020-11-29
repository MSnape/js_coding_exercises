function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  return person.city == "Manchester";
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  var extraBus = (people/40) - Math.round(people/40) > 0; 
  if (extraBus) return Math.round(people/40)  + 1
  else return Math.round(people/40)
  }

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  var numOfSheep = arr.reduce(function(p,c){
    if(c === "sheep")
       p++;
    return p;
},0);
  return numOfSheep;
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  var pc = person.address.postCode;
  return (pc.substring(0,1) == "M") && (isNumeric(pc.substring(1,2))); 
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
