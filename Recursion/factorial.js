function fact(n) {          // O(1)
    if (n === 1) return 1;    // O(1)
    return n * fact(n - 1);   // O(n)
  }
  
  console.log(fact(5));
  console.log(fact(6));