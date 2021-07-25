// Code your solutions in this file
//for (let age = 30; age < 40; age++) {
    //let age = 30 is the initialization, age is the variable we will be changing and we use LET because we need to increment the value
  //  console.log(`I'm ${age} years old. Happy Birthday to me!`)
//}
//const gifts = ["teddy bear", "drone", "doll"];

//function wrapGifts(gifts) {
 // for (let i = 0; i < gifts.length; i++) {
  //  console.log(`Wrapped ${gifts[i]} and added a bow!`);
  //  debugger;
//  }

 // return gifts;
//}

//wrapGifts(gifts); 


const names = ["Ada", "Brendan", "Ali"]
const event = "birthday"
//declare variable for reference

function writeCards(names, event) {
    let birthdayMessage = [];
    for (let i = 0; i < 3; i++) [

        birthdayMessage.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    ]
    return birthdayMessage
}


function countDown(number) {
let countDown = 10;
while (countDown >= 0)  {
    console.log(countDown--) }
}
