function solution(sides) {
  var answer = [];

  let max = Math.max(...sides);
  let min = Math.min(...sides);

  for (let i = max - min + 1; i <= max + min - 1; i++) {
    answer.push(i);
  }

  return answer.length;
}
