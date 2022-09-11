var n = prompt("Введите число:");
var factorial = 1;

for (var i = 1; i <= n; i++) {
  factorial *= i;
}

alert("Факториал:" + " " + factorial);
