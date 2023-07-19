function solution(arr) {
  let a = arr.filter((_, idx) => arr[idx] > arr[idx - 1]);
  return [arr[0], ...a];
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));

function solution(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      result.push(arr[i]);
    }
  }
  return [arr[0], ...result];
}
