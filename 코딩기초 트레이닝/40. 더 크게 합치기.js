// 내가 해결한 방법
function solution(a, b) {
  let c = String(a);
  let d = String(b);

  return c + d > d + c ? Number(c + d) : Number(d + c);
}

// 다른 사람의 해결 방법 중 입상 깊은 해결 방법

function solution(a, b) {
  return Math.max(Number(`${a}${b}`), Number(`${b}${a}`));
}
