function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example usage:
const number = 7;
console.log(`Fibonacci of ${number} is ${fibonacci(number)}`);
