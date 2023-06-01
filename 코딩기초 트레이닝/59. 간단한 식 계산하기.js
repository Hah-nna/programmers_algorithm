function solution(binomial) {
  let a = binomial.split(" ");
  if (a[1] === "+") return +a[0] + +a[2];
  if (a[1] === "-") return +a[0] - +a[2];
  if (a[1] === "*") return +a[0] * +a[2];
}
