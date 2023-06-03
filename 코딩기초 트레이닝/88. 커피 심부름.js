// 내가 푼 해결 방법
function solution(order) {
  let sum = 0;

  for (menu of order) {
    if (menu.includes("cafelatte")) {
      sum += 5000;
    } else {
      sum += 4500;
    }
  }
  return sum;
}

// 다른 사람의 해결 방법
// reduce를 잘 활용하면 쉬워진다!

function solution(order) {
  return order.reduce((pre, cur) => {
    if (cur.includes("americano")) {
      return pre + 4500;
    } else if (cur.includes("cafelatte")) {
      return pre + 5000;
    } else {
      return pre + 4500;
    }
  }, 0);
}

function solution(order) {
  return order.reduce(
    (pre, cur) => pre + (cur.includes("cafelatte") ? 5000 : 4500),
    0
  );
}
