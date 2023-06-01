function solution(n) {
  let a = 0;
  let b = 0;

  for (let i = 0; i <= n; i++) {
    if (i % 2 === 1) {
      a += i;
    } else {
      b += i ** 2;
    }
  }
  return n % 2 === 1 ? a : b;
}
