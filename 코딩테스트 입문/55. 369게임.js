// 내가 해결한 방법
// 필터를 사용하긴 했는데 조건이 너무 안 예뻐서 별로임
function solution(order) {
  let numArr = [...(order + "")];
  return numArr.filter((val) => val === "3" || val === "6" || val === "9")
    .length;
}

// 다른 사람의 해결 방법
// 1. matchAll을 사용해 깔끔하게 품
// 다음 번엔 match, matchAll을 사용해보자
function solution(order) {
  var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
  return answer;
}

// 2. split을 사용해 더 깔끔하게 푼 방법
function solution(order) {
  return ("" + order).split(/[369]/).length - 1;
}

// 3. Set을 사용한 방법
function solution(order) {
  const mySet = new Set([3, 6, 9]);
  return String(order)
    .split("")
    .filter((num) => mySet.has(Number(num))).length;
}
