function solution(arr) {
  let max = arr[0];
  let count = 1; // 첫 번째 학생은 보이므로 count에 1을 추가한 상태로 시작
  for (let i = 1; i < arr.length; i++) {
    // 첫 번째 학생은 보이는 걸로 치니까 1부터 시작
    if (arr[i] > max) {
      max = arr[i];
      count++;
    }
  }
  return count;
}

function solution(arr) {
  let max = arr[0];
  let a = arr.filter((val) => {
    if (val > max) {
      max = val;
      return true; // max보다 큰 값들을 true로
    }
    return false; // max보다 작거나 같은 값은 false로
  });
  return [arr[0], ...a].length;
}
