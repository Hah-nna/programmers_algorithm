// 이건 문제 자체도 이해하기 어려워서
// 다른 사람이 준 힌트를 참고함
// 수학 어렵다^^...
function solution(box, n) {
  const [width, depth, height] = box;
  return Math.floor(width / n) * Math.floor(depth / n) * Math.floor(height / n);
}

// 다른 사람의 해결 방법
// reduce를 사용한 방법
function solution(box, n) {
  return box.reduce((acc, v) => acc * Math.floor(v / n), 1);
}
