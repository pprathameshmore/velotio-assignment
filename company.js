function isPrime() {
  const cache = {};

  return (num) => {
    if (num in cache) {
      return cache[num];
    }

    if (num === 1) {
      return false;
    } else if (num === 2) {
      return true;
    } else {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          cache[num] = false;
          return false;
        }
      }
      //Store in cache
      cache[num] = true;
      console.log(cache);
      return true;
    }
  };
}

function calculateSeverance(employees) {
  const AMOUNT = 100000;
  let severanceAmount = 0;

  const cal = isPrime();

  for (let i = 0; i < employees.length; i++) {
    if (!cal(employees[i])) {
      severanceAmount += AMOUNT;
    }
  }
  return severanceAmount;
}

console.log(calculateSeverance([2, 6, 8, 9, 11, 12]));
console.log(calculateSeverance([11, 13, 17, 19]));

/* Test cases

    [2, 6, 8, 9, 11, 12] => 400000
    [11, 13, 17,19] => 0
*/
