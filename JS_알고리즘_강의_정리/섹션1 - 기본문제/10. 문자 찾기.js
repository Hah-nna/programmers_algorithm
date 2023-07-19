function solution(s, t) {
  return [...s].filter((val) => val === t).length;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));

function solution(s, t) {
  return s.split(t).length - 1;
}
