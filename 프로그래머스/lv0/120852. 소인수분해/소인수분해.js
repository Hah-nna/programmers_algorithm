function solution(n) {
  var answer = [];
  let count = 2;

  while (n !== 1) {
    if (n % count === 0) {
      answer.push(count);
      n /= count;
    } else {
      count++;
    }

    // n을 count로 나눴을 때 나머지가 0미면
    // count를 push, n은 n / count한 값
    // 만약 나머지가 0이 안 되면 count++하고 다시 나눠보기
  }
  return [...new Set(answer)].sort((x, y) => x - y);
  // 중복되는 소수가 있을 수 있기 때문에 Set을 사용해 중복된 소수 제거

  // 다른 사람의 풀이 방법

  function solution(n) {
    let answer = [];

    let i = 2;
    while (i <= n) {
      if (n % i === 0) {
        answer.push(i);
        n = n / i;
      } else {
        i++;
      }
    }

    return [...new Set(answer.sort((a, b) => (a > b ? 1 : -1)))];
  }
}
