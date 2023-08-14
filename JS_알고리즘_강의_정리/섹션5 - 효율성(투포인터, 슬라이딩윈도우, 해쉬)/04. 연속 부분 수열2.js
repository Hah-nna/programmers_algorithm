// 강사님이 해결한 방법 (투포인터 알고리즘 사용)

function solution(m, arr) {
  let answer = 0;
  let num = 0;
  let lt = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    num += arr[rt];
    while (num > m) {
      num -= arr[lt++];
      // num += arr[rt]를 한 후 m보다 크면
      // arr[lt]값을 빼줌 (sum이 m과 같거나 작을때까지)
    }

    answer += rt - lt + 1;
    // arr[rt]가 추가된 경우 m이하기 나오는 경우의 수
  }

  return answer;
}

let a = [1, 3, 1, 2, 3];

console.log(solution(5, a));
