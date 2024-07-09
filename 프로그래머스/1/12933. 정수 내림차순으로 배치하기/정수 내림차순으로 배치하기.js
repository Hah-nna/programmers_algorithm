function solution(n) {
  var answer = 0;
  let a = (n + "").split("").sort().reverse().join("");
  return +a;
}

// 숫자 풀이
//숫자가 분명히 더 빠름
var nums = [];
do {
  nums.push(n % 10);
  n = Math.floor(n / 10);
} while (n > 0);

return nums.sort((a, b) => b - a).join("") * 1;
