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

// 다시 풀어봄
// 접근법은 괜찮았는데 그걸 코드로 표현 못했음 ㅠㅠ
// 그래도 슬라이딩 윈도우 기법을 알아서 다행쓰

function solution(k, arr) {
  let max = 0;
  let sum = 0;

  // sum에 다음값을 추가하고 아까 더했던 값중 맨 앞에 있는 수를 뺴기

  for (let i = 0; i < k; i++) {
    sum += arr[i];
    // 12 15 11 더한값
  }
  max = sum;
  // 38

  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    // arr[3] - arr[3-3=0]
    // 46
    // arr[4] - arr[4-3=1]
    // 56
    // arr[5] - arr[5-3=2]
    // 55
    max = Math.max(max, sum);
    // 46
    // 56
    // 56 > 55 = max = 56
  }
  return max;
}
let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];

console.log(solution(3, a));
