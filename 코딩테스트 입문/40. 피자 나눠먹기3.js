// 내가 해결한 방법
function solution(slice, n) {
  return Math.ceil(n / slice);
}

// 다른 사람이 해결한 방법
function solution(slice, n) {
  let i = 1;
  while (slice * i < n) {
    i++;
  }
  return i;
}
