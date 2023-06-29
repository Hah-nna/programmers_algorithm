// 내가 해결한 방법
function solution(n) {
  let answer = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) answer += i;
  }
  return answer;
}

// 다른 사람의 해결 방법 중 인상 깊은 방법
// 수열 공식을 이용한 방법
function solution(n) {
  let count = Math.trunc(n / 2);
  return count * (count + 1);
}
