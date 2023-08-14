// 내가 해결한 방법
// k를 전혀 사용하지 않고 주먹구구로 풀었다^^..

function solution(k, arr) {
  let sum = 0;
  let lt = 0;

  for (let rt = 1; rt < arr.length; rt++) {
    let a = arr[lt++] + arr[rt] + arr[rt + 1];
    if (a > sum) sum = a;
  }
  return sum;
}

// 슬라이딩 윈도우 방식으로 푼 방법
// 창문을 하나씩 옆으로 슬라이딩하는 것처럼 푸는 방식
// 하나씩 옆으로 옮길 때마다 새로 추가된 끝이 수와 아까 더했던 맨 처음 값을 빼서 기존의 sum에 더해줌

function solution(k, arr) {
  let answer = 0;
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  answer = sum;

  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    console.log("arr[i]", arr[i], "arr[i-k]", arr[i - k]);
    answer = Math.max(answer, sum);
  }
  return answer;
}
