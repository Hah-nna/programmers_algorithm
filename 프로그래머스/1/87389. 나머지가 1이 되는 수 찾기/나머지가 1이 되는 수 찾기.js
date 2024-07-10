function solution(n) {
  var answer = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 1) {
      answer = i;
      break;
    }
  }
  return answer;
}

function solution(n) {
  let i = 1;
  while (true) {
    if (n % i === 1) {
      answer = i;
      break;
    } else {
      i++;
    }
  }
  return answer;
}

function solution(n, x = 1) {
  while (x++) {
    if (n % x === 1) {
      return x;
    }
  }
}
