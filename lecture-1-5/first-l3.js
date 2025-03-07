/**
 * loop--->
 * for loop---
 * while loop---
 * do while loop---
 */

// for(let i = 0;i <=10;i++){
//     console.log(i);
// }

//alternative--
// let i = 0;
// while(i <=10){
//     console.log(i);
//     i++;
// }

// let i = 10;
// do{
//     console.log(i);
//     i++;
// }
// while(i < 10);

// let strVar = 'dipongkor';
// for(let value of strVar){
//     console.log('alphabet:',value);
// }

// let fullName = 'finalExam';
// let fullNameLength = 0;
// for(let i of fullName){
//     console.log('i=',i);
//     fullNameLength++
// }
// console.log(fullNameLength);

// let student = {
//     fullName: 'Rahul Kumar',
//     age: 20,
//     cgpa: 7.5,
//     isPass: true
// }
// for(let key in student){
//     console.log(key,student[key]);
// }

//practice question-2--->

// let userNum = console.log(prompt('guess the number:'));
// let gameNum = 25;
// while(userNum != gameNum){
//    userNum = prompt('you entered wrong number. guess again:');
// }
// console.log('congratulations, you enter the right number.

//type--
// let obj = {
//     item: 'pen',
//     price: 10,
// }
// console.log('the cost of', obj.item, 'is', obj.price, 'taka');
// //alternative---
// //create backtick and type alphabet and dollar symbol and curly braces--
// console.log(`the cost of ${obj.item} is ${obj.price} taka`);
// //some-important---
// let specialString = `this is a \n template \t literal ${1 + 2 + 3}`;
// console.log(specialString);

// type--->
// let stringPart = 'Bangladesh';
// console.log(stringPart.slice(0, 6));
// let str = 'hello';
// console.log(str.replace('h', 'y'));
// let str1 = 'hellololo';
// console.log(str1.replace('lo', 'p'));
// console.log(str1.replaceAll('lo', 'p'));

// let str1 = 'dip';
// let str2 = ' roy';
// console.log(str1.concat(str2));
// //alternative---
// console.log(str1 + str2);

// type-->
// let str = 'ILoveJS';
// // console.log(str.charAt(5)); //finding index(5)--character--

// str[0] = 'j'; // not working because string is immutable--
// //alternative for this--
// str = str.replace('I', 'S');
// console.log(str);

// practice-question-->
// let fullName = prompt('enter your fullname without spaces');
// let userName = "@" + fullName + fullName.length;
// console.log(userName);

const browserType = "mozilla";

if (browserType.endsWith("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}


