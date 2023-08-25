// 처음에 푼 방법
function solution(s) {
  let result = [];

  for (let item of s) {
    if (item === "(") result.push(item);
    else result.pop();
  }

  return result.length === 0 ? "YES" : "NO";
}

let a = "()()()((()))())(((((()";
console.log(solution(a));

// 두 번째로 푼 방법
// ")"가 먼저 나올 때를 생각못함...
// ")"가 나올 때 result의 길이가 0이면 짝이 되는 게 없기 때문에 바로 NO를 리턴하면 됨

function solution(s) {
  let result = [];

  for (let item of s) {
    if (item === "(") result.push(item);
    else {
      if (result.length === 0) return "NO";
      else result.pop();
    }
  }

  return result.length === 0 ? "YES" : "NO";
}
