function solution(day, arr) {
  return arr.filter((val) => val % 10 === day).length;
}
