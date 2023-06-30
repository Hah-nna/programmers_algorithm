// 내가 해결한 방법
// 1. for문 사용
function solution(array, n) {
  let answer = 0;
  for (let num of array) {
    num === n ? answer++ : answer;
  }
  return answer;
}

// 2. filter, length 사용
function solution(array, n) {
  return array.filter((val) => val === n).length;
}
