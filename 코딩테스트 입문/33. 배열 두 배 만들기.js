// 내가 해결한 방법
function solution(numbers) {
  return numbers.map((x) => x * 2);
}

// 다른 사람이 해결한 방법

function solution(numbers) {
  return numbers.reduce((a, b) => [...a, b * 2], []);
}
