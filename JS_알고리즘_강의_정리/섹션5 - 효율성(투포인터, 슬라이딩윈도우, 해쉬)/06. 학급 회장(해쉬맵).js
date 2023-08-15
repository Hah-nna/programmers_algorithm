// 해시(hash)라는 자료구조 처음 들어봄;
// 강사님이 해결한 방법을 정리해봄

function solution(s) {
  let answer;
  let hash = new Map();

  for (let item of s) {
    if (hash.has(item)) {
      // 각각의 알파벳들을 키로 가지고 있으면 더해서 set해라
      // ex: has.set('A', hash.get('A'))에서
      // hash.get('A')은 1이므로 + 1 읋 하면 값을 더할 수 있음
      hash.set(item, hash.get(item) + 1);
    } else {
      hash.set(item, 1);
    }
  }

  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, value] of hash) {
    if (value > max) {
      max = value;
      answer = key;
    }
  }
  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
