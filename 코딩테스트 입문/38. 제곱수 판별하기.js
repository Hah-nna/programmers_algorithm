function solution(n) {
  return Math.sqrt(n) % 1 === 0 ? 1 : 2;
}

// % 1을 해준 이유는 Math.sqrt한 값이 정수라면 (제곱근이라면) 1로 나누었을 때
// 항상 0이 되기 때문임
// Number.inInteger()도 있긴 한데 익스플로러에서는 안 된다고 하여 위와 같은 방법을 사용함
