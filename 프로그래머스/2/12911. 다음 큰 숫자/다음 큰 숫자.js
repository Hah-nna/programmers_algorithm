// 내가 푼 방법
function solution(n) {
  // n에서 1이 몇개 있는지 체크
  // n + 1의 숫자를 이진법으로 변환
  // 변환한 숫자에서 1이 몇개나 있는지 체크
  // 만약 같다면 break
  // 아니라면 숫자++

  function countOne(x) {
    return x.toString(2).split("0").join("").length;
  }

  const m = countOne(n);
  let next = n + 1;

  while (m !== countOne(next)) {
    next++;
  }

  return next;
}

// 다른 사람이 푼 방법(비트 연산자)
// 다시 코드 보고 공부해봐야할듯 ㅠ 아직은 익숙하지 않은 비트연산자...
function solution() {
  var i, j;
  for (i = 0; !(n & 1); i++) {
    n = n >> 1;
  }
  for (j = 0; n & 1; i++, j++) {
    n = n >> 1;
  }
  for (j--, n++; i !== j; i--) {
    n = n << 1;
  }
  for (i; i; i--, n++) {
    n = n << 1;
  }
  return n;
}
