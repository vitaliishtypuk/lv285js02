let sequence = prompt("Введіть порядковий номер:");
let n = sequence;

function fibonacciRecur(n) {
  return n <= 2 ? 1: fibonacciRecur (n - 1) + fibonacciRecur (n - 2);
}
document.write("Рекурсія: " + fibonacciRecur(n) + "<br>");

function fibonacciArrey(n) {
  let fibonacciArrey = [1 , 1];
  for (let i = 2; i < n; i++) {
    fibonacciArrey [i] = fibonacciArrey[i - 1] + fibonacciArrey[i - 2];
  }
  return fibonacciArrey[n - 1];
}
document.write("Масив:" + fibonacciArrey(n) + "<br>");

function fibonacciLoop(n) {
  let a = 1;
  let b = 1;
  
  for (let i = 3; i <= n; i++) {
       let c = a + b;
       a = b;
       b = c;
  }    
  return b;
}
document.write("Цикл:" + fibonacciLoop(n));