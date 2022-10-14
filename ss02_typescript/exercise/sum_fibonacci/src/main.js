function fibonacci(num) {
    if (num < 2) {
        return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}
var size = 10;
var fibo = 0;
var total = 0;
for (var i = 0; i < size; i++) {
    fibo = fibonacci(i);
    console.log("Số fabonacci thứ " + (i + 1) + " là: " + fibo);
    total += fibo;
}
console.log("Tổng fibonacci trong dãy là: " + total);
