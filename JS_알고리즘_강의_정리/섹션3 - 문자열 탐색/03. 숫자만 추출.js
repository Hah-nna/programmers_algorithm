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

// 숫자인 것만 매치해서 숫자로 바꿈
function solution(str) {
  const regexp = /[0-9]/g;
  const a = str.match(regexp).join("");
  return Number(a);
}
