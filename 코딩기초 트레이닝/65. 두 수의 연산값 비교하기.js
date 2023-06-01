function solution(a, b) {
  let c = a + "";
  let d = b + "";
  let e = 2 * a * b;

  return c + d >= e ? +(c + d) : e;
}
