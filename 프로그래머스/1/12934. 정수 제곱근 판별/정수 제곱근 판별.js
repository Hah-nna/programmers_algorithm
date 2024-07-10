function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? Math.pow(Math.sqrt(n) + 1, 2) : -1;
  // Number.isInteger : 정수인지 판별
  // Math.pow(n, m) : n을 m만큼 제곱해줌
}
