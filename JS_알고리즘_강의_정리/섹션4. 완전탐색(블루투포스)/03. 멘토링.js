// 이 문제가 블루투포스의 대표적인 예시문제
// 근데 시도하다가 못 풀어서 강사님의 풀이를 이해하는 방식으로 진행함^^...

function solution(test) {
  let answer = 0; // 멘토링 횟수
  let m = test.length; // 테스트 횟수
  let n = test[0].length; // 학생 수

  // 1번 학생부터
  for (let i = 1; i <= n; i++) {
    // 멘토
    for (let j = 1; j <= n; j++) {
      // 멘티
      let count = 0;
      for (let k = 0; k < m; k++) {
        let pi = 0;
        let pj = 0;
        for (let s = 0; s < n; s++) {
          if (test[k][s] === i) pi = s;
          // k번째 테스트에 s위치에 i번 학생이 있는지 없는지 확인
          // 있으면 등수는 s의 값을 할당

          if (test[k][s] === j) pj = s;
          // j학생의 등수는 s
        }
        if (pi < pj) count++;
      }
      if (count === m) answer++;
      // count의 값이 length랑 같으면 테스트를 다 통과한 것
    }
  }

  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
