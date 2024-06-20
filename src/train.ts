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




// function find_longest_word(str:any) : any
// {
//   let array1 = str.match(/\w[a-z]{0,}/gi);
//   let result = array1[0];

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


function countVowels(letters: string): number {
  const result: string = "aeiouAEIOU";
  let count: number = 0;
  for (let i = 0; i < letters.length; i++) {
      if (result.indexOf(letters[i]) !== -1) {
          count++;
      }
  }
  return count;
}
console.log(countVowels("string")); // 1
