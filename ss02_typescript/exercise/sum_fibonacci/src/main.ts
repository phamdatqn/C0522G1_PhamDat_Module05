function fibonacci(num: number): number {
    if (num < 2) {
        return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}

let size: number = 10;
let fibo: number = 0;
let total: number = 0;
for (let i = 0; i < size; i++) {
    fibo = fibonacci(i);
    console.log("Số fabonacci thứ " + (i + 1) + " là: " + fibo);
    total += fibo;
}
console.log("Tổng fibonacci trong dãy là: " + total)