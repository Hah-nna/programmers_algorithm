function solution(arr) {
  let answer = [];
  for (let item of arr) {
    if (item % 2 !== 0) {
      answer.push(item);
    }
  }
  return Math.min(...answer);
}
