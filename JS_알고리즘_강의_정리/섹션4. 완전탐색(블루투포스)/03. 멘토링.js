// 이 문제가 블루투포스의 대표적인 예시문제
// 근데 시도하다가 못 풀어서 강사님의 풀이를 이해하는 방식으로 진행함^^...

// 블루투포스는 경우의 수를 먼저 생각해보아야 함
// 멘토, 멘티가 되는 경우는 각각 1,2,3,4 => 4*4 = 16가지임
// 하나하나 다 돌면서 되는지 확인해야함

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

// 다시 풀어봄
function solution(arr) {
  let answer = 0;
  let count = 0;
  let pl = 0;
  let pr = 0;
  // 첫 번쨰 : 멘토
  // 그래서 1부터 arr[0].length까지 돎
  // 두 번째 : 멘티
  // 1 ~ arr[0].length까지 돎
  // 1 - >1,2,3,4
  // 2(첫 번째) -> 1,2,3,4(두번째) 이런 식으로
  // 그래서 1번부터 돎
  // k,s는 0부터 돌면서 각 요소를 순회함
  // k = 0, s => 0,1,2,3
  // k = 1, s => 0,1,2,3
  // k = 2, s => 0,1,2,3
  // 세 번째와 마지막 반복문은 멘토와 멘티의 등수를 결정함
  // 멘토는 항상 순위가 멘티보다 높아야 하기 때문에 pl < pr로 설정함
  // 그리고 어레이의 길이만큼 돌면서 count는 최대 3이 되기 때문에 arr.lnegth와 같으면 answer을 더함

  for (let i = 1; i <= arr[0].length; i++) {
    for (let j = 1; j <= arr[0].length; j++) {
      count = 0;
      for (let k = 0; k < arr.length; k++) {
        pl = 0;
        pr = 0;
        for (let s = 0; s < arr[0].length; s++) {
          if (arr[k][s] === i) pl = s;
          if (arr[k][s] === j) pr = s;
        }
        console.log("pl, pr", pl, pr);
        if (pl < pr) count++;
      }
      if (count === arr.length) answer++;
    }
  }
  return answer;
}
