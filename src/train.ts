// function getDigits(numbers: any) {
//     let result = '';
//     for (let i = 0; i < numbers.length; i++) {
//         if (!isNaN(numbers[i]) && numbers[i] !== ' ') {
//               result += numbers[i];
//         }
//     }
//    return result;
// }
// console.log(getDigits("m14i1t")); 

/* Project Standarts:
-Logging standarts
Naming standarts:
   function, method, variable => CAMEL
   class => PASCAL
   folder => KEBAB
   CSS => SNAKE
 - ERRORS HANDLING  
 
 
  Traditional FD => BSSR(ADMIN) => EJS
  Modern FD      => SPA =>  REACT


*/

// function majorityElement(nums: number[]): number | null {
   
//     const counts: { [key: number]: number } = {};
//     for (let result of nums) {
//         counts[result] = (counts[result] || 0) + 1;
//     }
//     let maxCount = 0;
//     let findElement: number | null = null;

//     for (let result in counts) {
//         if (counts[result] > maxCount) {
//             maxCount = counts[result];
//             findElement = parseInt(result);
//         }
//     }  
//     return findElement;
// }
// console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4])); // 4






//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// console.log(find_longest_word('Men come from Uzbekistan'));


// function countVowels(letters: string): number {
//   const result: string = "aeiouAEIOU";
//   let count: number = 0;
//   for (let i = 0; i < letters.length; i++) {
//       if (result.indexOf(letters[i]) !== -1) {
//           count++;
//       }
//   }
//   return count;
// }

// function reverseSentence(sentence: string): string {
//     const words = sentence.split(' ');
//     const reversedWords = words.map(word => word.split('').reverse().join(''));
//     return reversedWords.join(' ');
// }
// const results = reverseSentence("git hub problems");
// console.log(results); 





// function getSquareNumbers(numbers: number[]): { number: number, square: number }[] {
//     return numbers.map(num => ({ number: num, square: num * num }));
// }
// const result = getSquareNumbers([1, 2, 3]);
// console.log(result); 

// function palindromCheck(str: string): boolean { 
//     const change = str.replace(/\s+/g, '');   
//     const result = change.split('').reverse().join('');    
//     return change === result;
// }
// console.log(palindromCheck("dad")); // true
// console.log(palindromCheck("hoh")); // true
// console.log(palindromCheck("son")); // false
// console.log(palindromCheck("dad")); // true
// console.log(palindromCheck("hoh")); // true
// console.log(palindromCheck("son")); // false

// function calculateSumOfNumbers(result: any[]): number {
//     return result.reduce((sum, item) => {
//         if (typeof item === 'number') {
//             return sum + item;
//         }
//         return sum;
//     }, 0);
// }

// const result = calculateSumOfNumbers([10, "10", {son: 10}, true, 35]);
// console.log(result); // 45


// function objectToArray(obj: Record<string, any>): [string, any][] {
//     return Object.entries(obj);
// }
// const obj = { a: 10, b: 20 };
// const result = objectToArray(obj);
// console.log(result); // [['a', 10], ['b', 20]]

// function hasProperty(obj: Record<string, any>, prop: string): boolean {
//     return obj.hasOwnProperty(prop);
// }

// console.log(hasProperty({name: "BMW", model: "M3"}, "model")); 
// console.log(hasProperty({name: "BMW", model: "M3"}, "year")); 


// function calculate(expression: string): number {
//     const numbers = expression.split('+');
//     const sum = numbers.reduce((acc, current) => acc + parseInt(current, 10), 0);
//     return sum;
// }
// console.log(calculate("1+2")); 
// console.log(calculate("10+20")); 
// console.log(calculate("5+15")); 

// function missingNumber(nums: number[]): number {
//     const n = nums.length;
//     const expectedSum = (n * (n + 1)) / 2;
//     const actualSum = nums.reduce((sum, num) => sum + num, 0);
//     return expectedSum - actualSum;
// }
// const result = missingNumber([3, 0, 1]);
// console.log(result); 




// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//     let mergedArray: number[] = [];
//     let i = 0;
//     let j = 0;
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             mergedArray.push(arr1[i]);
//             i++;
//         } else {
//             mergedArray.push(arr2[j]);
//             j++;
//         }
//     }
//     while (i < arr1.length) {
//         mergedArray.push(arr1[i]);
//         i++;
//     }

//     while (j < arr2.length) {
//         mergedArray.push(arr2[j]);
//         j++;
//     }

//     return mergedArray;
// }


// const result2 = mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
// console.log(result2); 

// function sumOdds(n: number): number {
//     let count = 0;
//     for (let i = 1; i <= n; i += 2) {
//         count++;
//     }
//     return count;
// }

// console.log(sumOdds(20)); 
// console.log(sumOdds(40)); 

// function chunkArray<T>(array: T[], size: number): T[][] {
//     const chunkedArray: T[][] = [];
//     for (let i = 0; i < array.length; i += size) {
//         const chunk = array.slice(i, i + size);
//         chunkedArray.push(chunk);
//     }
//     return chunkedArray;
// }
// const result = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
// console.log(result); 

// function countOccurrences(obj: any, key: string): number {
//     let count = 0;

//     function recursiveCount(currentObj: any) {
//         if (typeof currentObj === 'object' && currentObj !== null) {
//             for (let k in currentObj) {
//                 if (k === key) {
//                     count++;
//                 }
//                 if (typeof currentObj[k] === 'object' && currentObj[k] !== null) {
//                     recursiveCount(currentObj[k]);
//                 }
//             }
//         }
//     }

//     recursiveCount(obj);
//     return count;
// }

// const obj = {model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}};
// console.log(countOccurrences(obj, 'model')); 



// function findIntersection<T>(arr1: T[], arr2: T[]): T[] {
//     const set1 = new Set(arr1);
//     const set2 = new Set(arr2);
//     const intersection = [...set1].filter(item => set2.has(item));
//     return intersection;
// }

// const result = findIntersection([1, 2, 3], [3, 2, 0]);
// console.log(result); 

// function randomBetween(min: number, max: number): number {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const randomNum = randomBetween(30, 50);
// console.log(randomNum); 

// function sumEvens(numbers: number[]): number {
//   return numbers
//     .filter(num => num % 2 === 0) 
//     .reduce((sum, num) => sum + num, 0); 
// }
// const result = sumEvens([1, 2, 3]);
// console.log(result); // 2


// function celsiusToFahrenheit(celsius: number): number {
//   return (celsius * 9/5) + 32;
// }
// console.log(celsiusToFahrenheit(0)); 
// console.log(celsiusToFahrenheit(100)); 

// function changeNumberInArray(target: number, arr: number[], newNumber: number): number[] {
//   const index = arr.indexOf(target);
//   if (index !== -1) {
//     arr[index] = newNumber;
//   }
//   return arr;
// }


// const result1 = changeNumberInArray(1, [1, 3, 7, 2], 2);
// console.log(result1); 




// function removeDuplicate(input: string): string {
 
//   const seen = new Set<string>();
  
//   let result = '';

  
//   for (const char of input) {
      
//       if (!seen.has(char)) {
          
//           seen.add(char);
//           result += char;
//       }
//   }

  
//   return result;
// }


// console.log(removeDuplicate('stringg')); // 'string'

// function capitalizeWords(text: string): string {
//   const words = text.split(' ');
//   const capitalizedWords = words.map(word => {
//       if (word.length <= 2) {
//           return word;
//       }
//       return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//   });

//   return capitalizedWords.join(' ');
// }


// console.log(capitalizeWords('name should be a string')); // "Name Should be a String"

// function convertToSnakeCase(str: string): string {
//   return str
//       .toLowerCase()         
//       .replace(/\s+/g, '_');   
// }


// console.log(convertToSnakeCase('name should be a string')); 
//  'name_should_be_a_string'

//  function delayHelloWorld(message: string): Promise<string> {
//   return new Promise((resolve) => {
//       setTimeout(() => {
//           resolve(message);
//       }, 3000); 
//   });
// }


// delayHelloWorld("Hello World").then((result) => {
//   console.log(result); 
// });

// function reduceNestedArray(arr: any[]): number {
//   return arr.reduce((sum, current) => {
//     if (Array.isArray(current)) {
//       return sum + reduceNestedArray(current); 
//     } else if (typeof current === 'number') {
//       return sum + current; 
//     } else {
//       return sum; 
//     }
//   }, 0); 
// }


// console.log(reduceNestedArray([1, [1, 2, [4]]])); // 8

// function printNumbers() {
//   let count = 1;
//   const intervalId = setInterval(() => {
//       console.log(count);
//       count++;
//       if (count > 5) {
//           clearInterval(intervalId);
//       }
//   }, 1000);
// }

// // Funksiyani chaqiramiz
// printNumbers();

function stringToKebab(str: string): string {
  return str
      .replace(/\s+/g, '-')       
      .replace(/[A-Z]/g, (match) => match.toLowerCase()) 
      .replace(/[^a-zA-Z0-9\-]/g, '') 
      .replace(/--+/g, '-')        
      .trim();                      
}
console.log(stringToKebab("I love Kebab")); // Natija: "i-love-kebab"


