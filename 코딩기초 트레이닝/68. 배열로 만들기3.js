function solution(arr, intervals) {
  const [a, b] = intervals;

  let firstArr = arr.slice(a[0], a[1] + 1);
  let secondArr = arr.slice(b[0], b[1] + 1);
  return firstArr.concat(secondArr);
}
