function solution(n) {
  var answer = [];
  let a = (n + "")
    .split("")
    .map((val) => +val)
    .reverse();
  return a;
}

// 숫자풀이

var arr = [];

do {
  arr.push(n % 10);
  n = Math.floor(n / 10);
} while (n > 0);

return arr;
