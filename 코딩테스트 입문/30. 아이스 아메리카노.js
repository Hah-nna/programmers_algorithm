// 내가 해결한 방법
function solution(money) {
  let num = Math.trunc(money / 5500);
  return [num, money - 5500 * num];
}

function solution(money) {
  let num = Math.trunc(money / 5500);
  return [num, money % 5500];
}

// 다른 사람의 방법 중 인상 깊은 방법
// while문 사용
function solution(money) {
  let count = 0;
  while (money >= 5500) {
    money -= 5500;
    count++;
  }
  return [count, money];
}
