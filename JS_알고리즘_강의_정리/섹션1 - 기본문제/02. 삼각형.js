function solution(a, b, c) {
  let arr = [a, b, c].sort((x, y) => x - y);
  if (arr[0] + arr[1] > arr[2]) return "YES";
  else return "No";
}
