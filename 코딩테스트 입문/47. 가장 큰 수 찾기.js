// 내가 해결한 방법
function solution(array) {
  let maxNum = Math.max(...array);
  let maxNumIdx = array.indexOf(maxNum);
  return [maxNum, maxNumIdx];
}

// 다른 사람이 해결한 방법
// 1. findIdx 사용
function solution(array) {
  return [
    Math.max(...array),
    array.findIndex((el) => el === Math.max(...array)),
  ];
}

// 2. 윗 풀이를 좀 더 깔끔하게 한 버전
function solution(array) {
  let max = Math.max(...array);
  return [max, array.findIndex((v) => v === max)];
}
