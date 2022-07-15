function Fibonacci(n: number) {
    let number1 = 0, number2 = 1, total = 0, sum = 0;

    console.log(number1);
    for (let i = 1; i < n; i++) {
        number1 = number2;
        number2 = total;

        total = number1 + number2;

        sum += total;
        console.log(total);
    }
    console.log("Tổng của dãy số fibonacci là " + sum);
}

Fibonacci(10);

// function Fibonacci(n: number): number {
//     if (n <= 2) {
//         return 1
//     }
//     return Fibonacci(n - 1) + Fibonacci(n - 2)
// }
//
// let n1 = 0, n2 = 1, next = 0, sum = 0;
// console.log("Dãy Fibonacci: ");
// console.log(n1);
// for (let i = 2; i <= Fibonacci(10); i++) {
//   n1 = n2;
//   n2 = next;
//   next = n1 + n2;
//   sum+=next;
//     console.log(next)
// }
// console.log("Tổng: " + sum);










