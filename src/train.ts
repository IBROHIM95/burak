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


*/
