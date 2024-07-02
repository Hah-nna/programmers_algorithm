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

/**
 * rt = 0
 * sum = 1
 * count = 0-0+1 = 1
 * 부분배열 [1]
 *
 * rt = 1
 * sum = 4
 * count = 1-0+1 = 1 + 2 = 3
 * 2 = 부분배열의 길이 [1], [3], [1,3]
 *
 * rt = 2
 * sum = 5
 * count = 2 - 0 + 1 = 3+3=6
 * // 6 = 부분배열의 길이 [1] [3] [1] [1,3] [31] [131]
 *
 * rt = 3
 * sum = 7
 * sum = 7 - arr[lt=0] = 6
 * sum = 6 - arr[lt=1] = 6 - 3 = 3
 * lt = 2
 * ******* count = (3 - 2) + 1 = 6 + 2 = 8 **********
 * // 2 = 부분배열의 길이
 * // lt = 2부터니까 arr[2]부터 부분배열
 * [1][2][12]
 *
 * rt = 4
 * sum = 3 + 3 = 6
 * sum = 6 - arr[lt=2] = 5
 * lt = 3
 * count = (4 - 3) + 1 = 8 + 2 = 10
 * // 2 = 부분배열집합
 * // lt = arr[3]부터 시작
 * [2][3][23]
 *
 */
