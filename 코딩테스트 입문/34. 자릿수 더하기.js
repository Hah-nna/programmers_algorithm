// 내가 해결한 방법
// for문 사용
function solution(n) {
  let str = String(n).split("");
  let result = 0;
  for (let item of str) {
    result += Number(item);
  }
  return result;
}
// reduce 사용
function solution(n) {
  let str = String(n).split("");
  return str.reduce((acc, cur) => {
    return acc + Number(cur);
  }, 0);
}

// 다른 사람이 해결한 방법
function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
}
