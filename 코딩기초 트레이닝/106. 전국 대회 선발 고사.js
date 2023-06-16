// 처음 풀었던 방법
function solution(rank, attendance) {
  let trueRank = rank;
  let answer = [];

  for (let i = 0; i < attendance.length; i++) {
    if (attendance[i]) {
      answer.push(trueRank[i]);
    }
  }

  answer.sort((x, y) => x - y);
  let a = trueRank.indexOf(answer[0]);
  let b = trueRank.indexOf(answer[1]);
  let c = trueRank.indexOf(answer[2]);
  return 10000 * a + 100 * b + c;
}

// attendance true이면 빈 배열에 push하고
// push된 새로운 배열을 sort한 다음 디스트럭처링해서 깔끔하게 풀려고 했으나
// 문제를 보니 그렇게 하면 결과가 이상하게 나와서
// 일단 공간 복잡도 신경 안 쓰고 막 풀었음^^...

// filter를 사용한 두 번째 방법
function solution(rank, attendance) {
  let trueRank = rank.filter((_, i) => attendance[i]).sort((x, y) => x - y);

  let a = rank.indexOf(trueRank[0]);
  let b = rank.indexOf(trueRank[1]);
  let c = rank.indexOf(trueRank[2]);
  return 10000 * a + 100 * b + c;
}

// 필터를 사용해 좀 더 깔끔하게 풀었다
// 뭔가 저 indexOf 하는 부분을 간단하게 표현해보고 싶은데
// 어떻게 해야할지 모르겠다;
