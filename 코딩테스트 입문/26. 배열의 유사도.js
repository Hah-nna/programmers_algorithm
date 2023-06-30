// 내가 해결한 방법
// 1. for문, includes 사용
function solution(s1, s2) {
  var answer = 0;
  for (let i = 0; i < s2.length; i++) {
    if (s2.includes(s1[i])) {
      answer++;
    }
  }
  return answer;
}

// 다른 사람의 방법 중 인상 깊은 방법
function solution(s1, s2) {
  return s1.filter((x) => s2.includes(x)).length;
}

function solution(s1, s2) {
  const intersection = s1.filter((x) => s2.includes(x));
  return intersection.length;
}
