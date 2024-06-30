function getDigits(numbers: any) {
    let result = '';
    for (let i = 0; i < numbers.length; i++) {
        if (!isNaN(numbers[i]) && numbers[i] !== ' ') {
              result += numbers[i];
        }
    }
   return result;
}
console.log(getDigits("m14i1t")); 

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

function majorityElement(nums: number[]): number | null {
   
    const counts: { [key: number]: number } = {};
    for (let result of nums) {
        counts[result] = (counts[result] || 0) + 1;
    }
    let maxCount = 0;
    let findElement: number | null = null;

    for (let result in counts) {
        if (counts[result] > maxCount) {
            maxCount = counts[result];
            findElement = parseInt(result);
        }
    }  
    return findElement;
}
console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4])); // 4






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

function palindromCheck(str: string): boolean { 
    const change = str.replace(/\s+/g, '');   
    const result = change.split('').reverse().join('');    
    return change === result;
}
console.log(palindromCheck("dad")); // true
console.log(palindromCheck("hoh")); // true
console.log(palindromCheck("son")); // false
console.log(palindromCheck("dad")); // true
console.log(palindromCheck("hoh")); // true
console.log(palindromCheck("son")); // false

function calculateSumOfNumbers(result: any[]): number {
    return result.reduce((sum, item) => {
        if (typeof item === 'number') {
            return sum + item;
        }
        return sum;
    }, 0);
}

const result = calculateSumOfNumbers([10, "10", {son: 10}, true, 35]);
console.log(result); // 45





