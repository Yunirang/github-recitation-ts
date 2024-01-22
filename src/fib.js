"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// util function that computes the fibonacci numbers
function fibonacci(n) {
    if (n < 0) {
        return -1;
    }
    else if (n == 0) {
        return 0;
    }
    else if (n == 1) {
        return 1;
    }
    var fib1 = fibonacci(n - 1);
    var fib2 = fibonacci(n - 2);
    return (fib1 + fib2);
}
exports.default = fibonacci;
