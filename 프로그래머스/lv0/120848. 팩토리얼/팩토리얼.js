function solution(n) {
  var i = 1;
  let num = 1;

  while (num <= n) {
    i++;
    num *= i;
  }

  return i - 1;
}
