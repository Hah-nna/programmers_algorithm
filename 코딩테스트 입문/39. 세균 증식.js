// 내가 해결한 방법
function solution(n, t) {
  let count = 1;
  while (count <= t) {
    n *= 2;
    count++;
  }
  return n;
}

// 다른 사람이 해결한 방법
// 1. while
// 내가 사용한 while보다 좀 더 똑똑하게 사용함
function solution(n, t) {
  while (t-- > 0) n *= 2;
  return n;
}

// 2. 수학적인 접근
function solution(n, t) {
  return n * 2 ** t;
}
