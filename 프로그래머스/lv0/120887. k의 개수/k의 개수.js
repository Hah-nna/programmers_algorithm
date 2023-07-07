// 내가 해결한 방법
function solution(i, j, k) {
  let result = 0;
  while (i <= j) {
    result += [...String(i)].filter((val) => val === String(k)).length;
    i++;
  }
  return result;
}

// 다른 사람의 해결 방법

function solution(i, j, k) {
  let a = "";
  for (i; i <= j; i++) {
    a += i;
  }

  return a.split(k).length - 1;
}
