function solution(str) {
  let answer = "";
  let a = str.replace(/[^0-9]/g, "");
  return Number(a);
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));

function solution(str) {
  let answer = "";
  for (let x of str) {
    if (!isNaN(x)) answer += x;
  }
  return parseInt(answer);
}
