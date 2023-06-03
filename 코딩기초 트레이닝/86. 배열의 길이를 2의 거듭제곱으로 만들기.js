function solution(arr) {
  let num = 1;

  while (arr.length > num) {
    // 6 > 1 -> 2
    // 6 > 2 -> 4
    // 6 > 4 -> 8

    num *= 2;
  }

  while (arr.length < num) {
    arr.push(0);
  }

  return arr;
}
