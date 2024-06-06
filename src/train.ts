function getpositive(arr: any) {
  const number = arr.filter(num => num > 0);
  const positive = number.join('')

  return positive

}

console.log(getpositive([1, 2, -3]));
console.log(getpositive([13, 12, -43]));
console.log(getpositive([-1, 32, 53]));
