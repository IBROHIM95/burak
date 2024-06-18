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


