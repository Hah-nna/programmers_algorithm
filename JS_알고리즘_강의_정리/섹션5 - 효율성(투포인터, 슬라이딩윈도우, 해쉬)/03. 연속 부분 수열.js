// 강사님이 해결한 방법
// 투포인터 다시 이해하고 풀어봐야겠다...
function solution(m, arr) {
  let answer = 0,
    lt = 0,
    sum = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) answer++;
    }
  }
  return answer;
}

// 내가 해결한 방법
let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));

function solution(m, arr) {
  let answer = 0;
  let num = 0;
  let left = 0;
  let right = 0;

  while (right < arr.length) {
    if (num < m) num += arr[right++];
    else if (num > m) num -= arr[left++];
    else if (num === m) {
      answer++;
      num -= arr[left++];
      if (num === m) answer++;
      else if (num > m) num -= arr[left++];
    }
  }

  return answer;
}

// chatGPT한테 코드 리뷰 받고 고쳐봄
// 중복되는 부분을 고치고 축약해서 쓸 수 있는 부분은 축약해서 씀
function solution(m, arr) {
  let answer = 0;
  let num = 0;
  let left = 0;
  let right = 0;

  while (right < arr.length) {
    if (num < m) {
      num += arr[right++];
    } else {
      num -= arr[left++];
    }

    if (num === m) {
      answer++;
    }
  }
  return answer;
}
