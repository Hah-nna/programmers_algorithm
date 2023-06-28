// 내가 푼 방법
function solution(arr, query) {
  var answer = [];
  for (let i = 0; i < query.length; i++) {
    if (i % 2 === 0) {
      // 짝수 경우
      arr.splice(query[i] + 1);
    } else {
      // 홀수인 경우
      arr.splice(0, query[i]);
    }
  }
  return arr;
}

// 다른 사람의 방법
function solution(arr, query) {
  query.forEach((q, i) =>
    i % 2 === 0 ? arr.splice(q + 1, arr.length) : arr.splice(0, q)
  );
  return arr;
}

// forEach문을 통해 좀 더 깔끔하게 풀었다
