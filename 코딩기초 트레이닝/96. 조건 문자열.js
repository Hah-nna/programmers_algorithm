// 내가 해결한 방법
function solution(ineq, eq, n, m) {
  let a = 0;
  if (ineq === ">" && eq === "=") {
    n >= m ? (a = 1) : 0;
  } else if (ineq === "<" && eq === "=") {
    n <= m ? (a = 1) : 0;
  } else if (ineq === ">" && eq === "!") {
    n > m ? (a = 1) : 0;
  } else if (ineq === "<" && eq === "!") {
    n < m ? (a = 1) : 0;
  }
  return a;
}

// 다른 사람의 해결 방법 중 인상 깊었던 방법

// no.1
const operations = {
  ">=": (n, m) => n >= m,
  "<=": (n, m) => n <= m,
  ">!": (n, m) => n > m,
  "<!": (n, m) => n < m,
};

function solution(ineq, eq, n, m) {
  const op = operations[ineq + eq];
  return Number(op(n, m));
}

// no.2
function solution(ineq, eq, n, m) {
  if (eq === "=" && n === m) return 1;
  if (ineq === "<" && n < m) return 1;
  if (ineq === ">" && n > m) return 1;
  return 0;
}
