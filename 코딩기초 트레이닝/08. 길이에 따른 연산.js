// 내가 해결한 방법
function solution(num_list) {
  let a = 0;
  if (num_list.length >= 11) {
    for (item of num_list) {
      a += item;
    }
  } else {
    a = 1;
    for (item of num_list) {
      a = a * item;
    }
  }
  return a;
}

// 다른 사람의 해결 방법 중 인상 깊은 답변
// reduce와 삼항연산자를 사용한 풀이법

function solution(num_list) {
  return num_list.length <= 10
    ? num_list.reduce((acc, cur) => acc * cur)
    : num_list.reduce((acc, cur) => acc + cur);
}
