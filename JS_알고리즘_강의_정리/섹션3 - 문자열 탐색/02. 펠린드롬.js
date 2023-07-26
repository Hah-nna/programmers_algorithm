function solution(s) {
  let regex = /[A-Za-z]/gi;
  let a = s.match(regex).join("").toLowerCase();

  for (let i = 0; i < Math.floor(a.length / 2); i++) {
    if (a[i] !== a[a.length - i - 1]) return "NO";
  }
  return "YES";
}
let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));

function solution(s) {
  let regex = /[A-Za-z]/gi;
  let a = s.match(regex).join("").toLowerCase();

  for (let i = 0; i < Math.floor(a.length / 2); i++) {
    if (a[i] !== a[a.length - i - 1]) return "NO";
  }
  return "YES";
}
