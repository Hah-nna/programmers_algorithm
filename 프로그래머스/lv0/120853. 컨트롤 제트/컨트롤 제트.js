// for문을 사용해 풀어봄
function solution(s) {
  var result = 0;
  let a = s.split(" ").map((val) => {
    if (val === "Z") return "Z";
    return Number(val);
  });

  for (let i = 0; i < a.length; i++) {
    if (typeof a[i] === "number") {
      result += a[i];
    } else if (typeof a[i] === "string") {
      result -= a[i - 1];
    }
  }
  return result;
}

// reduce를 사용해 풀어봄
// reduce의 세번째 인자로 현재 인덱스가 들어올 수 있는지 처음 앎
function solution(s) {
  let a = s.split(" ").map((val) => {
    if (val === "Z") return "Z";
    return Number(val);
  });

  return a.reduce((acc, cur, curIdx) => {
    if (typeof cur === "number") {
      return acc + cur;
    } else if (typeof cur === "string") {
      return acc - a[curIdx - 1];
    }
    return acc;
  }, 0);
}

// 다른 사람이 해결한 방법
// pop을 사용해 a의 요소가 'Z'이면 stack 배열에 담긴 맨 마지막 요소(z 이전의 값)을 뺌
// 요소가 'Z'가 아니면 숫자로 형변환해서 stack에 push
function solution(s) {
  const stack = [];

  s.split(" ").forEach((target) => {
    if (target === "Z") stack.pop();
    else stack.push(+target);
  });

  return stack.length ? stack.reduce((pre, cur) => pre + cur) : 0;
}
