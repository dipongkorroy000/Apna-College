// //General-function--
// function multiply(a, b) {
//     return a * b;
// }
// console.log(multiply(3, 6));

// // arrow function---uses-sort-calculation---
// let sum = (a,b) => {
// // sum is a arrow function--
//     return a + b;
// };
// console.log(sum(3, 6));

//problem--
//count the vowel character--
// function countVowels(string) {
//     let count = 0;
    // for (const character of string) {
    //     if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
    //         count++;
    //     }
    // }
    // return count;
// }
// console.log(countVowels('dipongkorroy'));

// alternative--
// let countVowel = (str) => {
//     let count = 0;
//     for (const character of str) {
//         if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowel('dipongkorroy'));



//video last questions--->
let n = prompt('enter a number :');
let array = [];
for (let i = 1; i <= n; i++){
    array[i - 1] = i;
}
console.log(array);
//second step--
let sum = array.reduce((previous, current) => {
    return previous + current;
});
console.log('sum =',sum);
//third step--
let multiply = array.reduce((previous, current) => {
    return previous * current;
});
console.log('multiply =',multiply);