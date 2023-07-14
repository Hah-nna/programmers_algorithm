function solution(n) {
  let result = 0;
  for (let i = n; i >= 0; i--) {
    result += i;
  }
  return result;
}
