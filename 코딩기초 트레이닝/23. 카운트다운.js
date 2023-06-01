function solution(start, end) {
  var answer = [];
  let sum = 0;

  for (let i = start; i >= end; i--) {
    answer.push(i);
  }
  return answer;
}
