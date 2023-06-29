function solution(numbers) {
  return numbers.reduce((pre, cur) => pre + cur, 0) / numbers.length;
}
