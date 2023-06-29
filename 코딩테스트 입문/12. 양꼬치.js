function solution(n, k) {
  let bonus = Math.trunc(n / 10);
  return n * 12000 + k * 2000 - 2000 * bonus;
}
