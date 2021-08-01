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

const cal = isPrime();

console.log(cal(9));
console.log(cal(11));

/* Test cases

    9 => false
    11 => true

*/
