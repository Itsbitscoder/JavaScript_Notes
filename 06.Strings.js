const name = "Kunal"
const surname = " Jadhav"

// console.log(name + surname + "oo"); This is outdated

// console.log(`hello my name is ${name} and my surname is ${surname}`);

const gameName = new String('Kunal-bhai-con')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(6));
// console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4)
// console.log(newString);

const onotherString = gameName.slice(-8, 4)
console.log(onotherString);

const newString1 ="       Kunal    "
console.log(newString1);
console.log(newString1.trim());

const url = "https://www.youtube.com/watch?v=fozwNnFunlo"

console.log(url.replace('youtube', '_'));
console.log(url.includes('youtube'));

console.log(gameName.split('-'));