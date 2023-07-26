function solution(s) {
  let lower = s.toLowerCase();
  let result = "YES";
  let n = Math.floor(lower.length / 2);
  for (let i = 0; i < n; i++) {
    if (lower[i] !== lower[lower.length - i - 1]) {
      result = "NO";
    }
  }

  return result;
}
//   0 1 2 3 4
let str = "g o o o G";
console.log(solution(str));

function solution(s) {
  let lower = s.toLowerCase();
  if ([...lower].reverse().join("") !== lower) {
    return "NO";
  }
  return "YES";
}
