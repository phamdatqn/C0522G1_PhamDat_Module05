function fibonacci(index) {
    if (index < 2) {
        return 1;
    }
    return fibonacci(index - 1) + fibonacci(index - 2);
}
var sum = 0;
var size = 10;
var fibo = 0;
var total = 0;
for (var i = 0; i < size; i++) {
    fibo = sum + fibonacci(i);
    console.log("Số fabonacci thứ " + (i + 1) + " là: " + fibo);
    total += fibo;
}
console.log("Tổng fibonacci trong dãy là: " + total);
