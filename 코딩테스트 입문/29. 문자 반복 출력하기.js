function solution(str, n) {
  return [...str].map((val) => val.repeat(n)).join("");
}
