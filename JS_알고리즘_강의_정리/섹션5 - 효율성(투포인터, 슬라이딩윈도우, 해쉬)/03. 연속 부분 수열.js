// 강사님이 해결한 방법
// 투포인터의 대표적인 방법이므로 잘 익혀두자
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

/** 설명쓰
 * 1. for문이 실행되면서 sum += arr[rt]가 진행됨. sum = 1이 된다
 * 2. 1은 num보다 작고, 관련한 조건이 없으므로 넘어간다
 * 3. sum += arr[rt]가 실행되고, sum은 3 -> 4 -> 7순으로 값이 변경된다
 * 4. sum이 7이 되면 num보다 크기 때문에 while문이 실행된다
 * 5. sum -= arr[lt]가 실행되고, lt = 0이기 때문에 sum -= 1이 되므로, sum = 6이 된다
 * 6. sum이 6이 되므로 while문 안의 if(sum === num)이 실행되면서 count가 1 증가한다(count = 1)
 * 7. while문이 끝나고, sum = 6인 상태에서 for문의 sum += arr[rt];이 실행되면서 sum은 6 + 1 = 7이 된다
 * 8. 7은 sum보다 크기 때문에 while문이 실행되고, lt=1이기 때문에 sum은 7-2=5라는 값으로 변경된다
 * 9. sum = 5는 num보다 작은 값이고, 관련한 처리가 없기 때문에 넘어간다
 * 10. sum은 5 + 1(arr[rt]) = 6이 된다. 그러므로 for문 안의 if문에서 처리가 되므로 count = 2가 된다
 * 11. sum은 6이고 whlie문의 조건도 만족하므로 while문이 실행된다
 * 12. sum -= arr[lt]가 실행되고, lt = 2이므로, sum은 6-1 = 5로 변경된다
 * 13. 5는 num보다 작고 관련한 처리가 없기 때문에 넘어간다
 * 14. sum += arr[rt];이 실행되고, sum은 5 + 1 = 6이라는 값이 된다
 * 15. sum === num이고, for문 안의 if가 실행되면서 count = 3이 된다
 * 16. sum = 6이고, while문의 조건을 만족하므로 while문이 실행된다
 * 17. sum -= arr[lt++];가 실행되고, lt = 3이므로 sum = 6-3 = 3으로 변경된다
 * 18. rt는 arr.length보다 작으므로 for문의 조건에 해당하지 않고, 함수가 종료되며, 최종적으로 count = 3의 값을 리턴한다
 */

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

// 다시 풀기(for문)
function solution(num, arr) {
  // 작으면 더하기
  // 만약 커졌다면 그 다음 기준 넘버부터 더하기 시작
  // num === a 같으면 카운트++

  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    console.log("arr[i] sum", sum);
    sum += arr[i];
    // 0 -> 1
    // 0 -> 2
    for (let j = i + 1; j < arr.length; j++) {
      console.log("arr[j] sum2", sum);
      if (sum < num) sum += arr[j];
      // 1 + 2 = 3
      // 3 + 1 = 4
      // 4 + 3 = 7
      else if (sum > num) break;
      else if (sum === num) {
        count++;
        break;
      }
      console.log("count", count);
    }
  }
  return count;
}
