'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(' i can drive');

//const interface = 'audio';
//const if = 534;

//  function 
function logger() {
  console.log('my name is fenet');
}

// calling // running // running 
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `juice with ${apples} apples and ${oranges} oranges`;
  //console.log(juice);
  return juice;
}


const appleJuice = fruitProcessor(3, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);



// function declaration 
function calcAge1(birthYear) {
  return  2037 - birthYear;;
}

const age1 = calcAge1(1991);
console.log(age1);
// function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}

const age2 = calcAge2(1992);
console.log(age1, age2);


// function expression 
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age2);

// arrow function 
const calcAge3 =  birthYear => 2037 - birthYear;
const age3 = calcAge3(1994);
console.log(age3);

function cutFruit(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
const applePieces = cutFruit(apples);
const orangePieces = cutFruit(oranges);

  const juice = `juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
  //console.log(juice);
  return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
  return 2037 - birthYear;
}
const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return retirement;
    console.log(`${firstName} retires in ${retirement}years`); 
   

  } else {
    console.log(`${firstName} has already retired`);
    return -1;
    
  }
 // return 
}

console.log(yearsUntilRetirement(1950, 'fenet'));

const friends =["michael","steven","peter"];
friends.push('jay');// adding data to the end
console.log(friends);
// learning objects
const fenet = {
  firstName: 'fenet ',
  lastName: 'wedajo',
  age: 30,
  friends: ['michael', 'steven', 'peter']
};
console.log(fenet);
console.log(fenet.lastName);
console.log(fenet['lastName']);

const nameKey = 'Name';
console.log(fenet['first' + nameKey]);
console.log(fenet['last' + nameKey]);

const interestedIn = prompt('what do you want to know about fenet? choose between firstName, lastName, age, friends');
//console.log(fenet[interestedIn]);
if (fenet[interestedIn]) {
  console.log(fenet[interestedIn]);
} else {
  console.log('wrong request');
}

//adding new properties to the object
fenet.location = "ethiopia";
fenet.twitter = ['@fenetwedajo'];
// challenge
// jonas has 3 friends and his best friend is called michael'
const friend = `fenet has  ${fenet.friends.length} friends and her best friend is called ${fenet.friends[0]} `;
console.log(friend);

// object method 
const fenet = {
  firstName: 'fenet ',
  lastName: 'wedajo',
  birthYear: 1991,
  friends: ['michael', 'steven', 'peter'],
  hasDriversLicense: true,
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return  `${this.firstName} is a ${this.calcAge()} year old and he has ${this.hasDriversLicense? 'a':no} DriversLicense`;
  }
  };

  console.log(fenet.getSummary());
//console.log(fenet['calcAge'](fenet.birthYear));

// challenge
// "jonas is a 46-year old teacher ,and he has a driver license"


const fenet = {
  fullName: 'Fenet Wedajo',
  mass: 48,
  height: 1.55,
  calcbmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }

};

const roba = {
  fullName: 'roba tamirat',
  mass: 58,
  height: 1.65,
  calcbmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

fenet.calcbmi();
roba.calcbmi();
console.log(fenet.bmi, roba.bmi);

if (fenet.bmi > roba.bmi) {
  console.log(`${fenet.fullName} 's(${fenet.bmi})BMI is greater than ${roba.fullName} 's (${roba.bmi})`);
} else {
  console.log(`${roba.fullName} 's(${roba.bmi})BMI is greater than ${fenet.fullName} 's (${fenet.bmi})`);
}

// itration for loop
for (let i = 1; i <= 10; i++){
  console.log(`lifting weights repetiton ${i}`)
}

*/

//looping through arrays

const types = [];
const jonasArray = [
  'fenet',
  'wedajo',
  2037 - 1991,
  'teacher',
  ['michael', 'peter', 'steven']
];

for (let i = 0; i < jonasArray.length; i++){
  console.log(jonasArray[i],);
  
 // types[i] = typeof jonasArray[i];
  //console.log(types[i]);

  types.push(typeof jonasArray[i]);
}

console.log(types);

