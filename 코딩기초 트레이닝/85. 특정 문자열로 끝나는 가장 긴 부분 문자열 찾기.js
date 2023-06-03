function solution(myString, pat) {
  for (let i = myString.length - 1; i >= 0; i--) {
    if (myString.slice(i, i + pat.length) === pat) {
      return myString.slice(0, i + pat.length);
    }
  }
  return myString;
}

// (6, 8) = G
// (5, 7) = FG
// (4, 6) = EF
// (3, 5) = dE

// 다른 사람이 푼 해결 방법 중 인상 깊은 방법
return myString.slice(0, myString.lastIndexOf(pat) + pat.length);

// 아... 나도 처음엔 lastIndexOf 사용했는데 제대로 활용을 못해 for문을 사용했음
// 천천히 차례대로 생각하면서 풀어보자
