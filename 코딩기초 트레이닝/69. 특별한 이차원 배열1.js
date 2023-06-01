// 이 문제의 경우 풀지 못해 다른 사람의 풀이를
// 해석하면서 참고했음

function solution(n) {
  const answer = new Array(n).fill().map(() => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    answer[i][i] = 1;
  }
  return answer;
}

// Array(n) : n개의 요소를 가진 빈 배열을 생성
// Array(n).fill() : fill에 인자로 주어진 것이 없으므로 undefined로 빈 배열이 채워짐
// answer = new Array(n).fill().map(() => new Array(n).fill(0)); // 인덱스별로 0으로 채워진 배열이 들어감
// answer[[0,0,0], [0,0,0], [0,0,0]]
