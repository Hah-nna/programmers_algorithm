function solution(s) {
  var answer = [];

  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      answer.push(s[i]);
    }
  }
  return answer.sort().join("");
}

// s의 문자열 각각의 첫 번째 인덱스와 마지막 인덱스를 비교함
// 인덱스가 같으면 push하고 사전순으로 졍렬한 후 join한 값을 리턴함

// 다른 사람의 해결방법
// 1. filter와 match, 정규식을 사용한 방법
var solution = (s) =>
  [...s]
    .filter((c) => s.match(new RegExp(c, "g")).length == 1)
    .sort()
    .join("");

// 2. new Map을 사용한 방법
// Map도 다시 봐봐야겠다
function solution(s) {
  const m = new Map();
  [...s].forEach((e) => m.set(e, m.get(e) + 1 || 1));
  return [...m]
    .filter((e) => e[1] === 1)
    .map((e) => e[0])
    .sort()
    .join("");
}
