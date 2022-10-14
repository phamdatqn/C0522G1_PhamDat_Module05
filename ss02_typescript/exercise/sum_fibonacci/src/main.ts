function fibonacci(index: number): number {
    if (index < 2) {
        return 1;
    }
    return fibonacci(index - 1) + fibonacci(index - 2);
}

let sum: number = 0;
let size: number = 10;
let fibo: number = 0;
let total: number = 0;
for (let i = 0; i < size; i++) {
    fibo = sum + fibonacci(i);
    console.log("Số fabonacci thứ " + (i + 1) + " là: " + fibo);
    total += fibo;
}
console.log("Tổng fibonacci trong dãy là: " + total)