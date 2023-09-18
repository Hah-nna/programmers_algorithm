function solution(n) {
  let answer;
  let num = 1;

  for (let i = 0; i <= n; i++) {
    num *= i;
    if (num > n) {
      break;
    }
    answer = i; // num > n이면 for문이 즉시 종료되므로 이 코드가 실행되지 않아 i에는 이전 i(num>n이 아닌) 값이 할당되어 있음
  }

  return answer;
}

// while문을 사용해 좀 더 보기 편하게 작성함
function solution(n) {
  var i = 1;
  let num = 1;

  while (num <= n) {
    i++;
    num *= i;
  }

  // num > n이면 while 문이 종료되고 i는 이미 num > n인 경우가 되므로 1을 뺴주어 조건에 맞는 최대 팩토리얼인 i(num<=n)를 리턴함
  return i - 1;
}
