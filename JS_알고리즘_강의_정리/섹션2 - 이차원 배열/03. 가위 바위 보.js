function solution(a, b) {
  let answer = "";
  for (let i = 0; i < a.length; i++) {
    if (a[i] === 1 && b[i] === 3) answer += "A";
    else if (a[i] === 2 && b[i] === 1) answer += "A";
    else if (a[i] === 3 && b[i] === 2) answer += "A";
    else if (a[i] === b[i]) answer += "D";
    else answer += "B";
  }
  return answer;
}

function solution(a, b) {
  let answer = "";
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) answer += "D";
    else if (a[i] === 1 && b[i] === 3) answer += "A";
    else if (a[i] === 2 && b[i] === 1) answer += "A";
    else if (a[i] === 3 && b[i] === 2) answer += "A";
    else answer += "B";
  }
  return answer;
}

/**
 * a[i] b[i]
 * 가위 보    => 1  3
 * 바위 가위  => 2  1
 * 보 바위    => 3  2
 *
 * a[i] b[i] 같으면 "D" (비김)
 *
 * 위의 경우들이 다 아니면 B가 출력
 *
 * 비교 할 때는 기준 점을 잡자
 */
let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
