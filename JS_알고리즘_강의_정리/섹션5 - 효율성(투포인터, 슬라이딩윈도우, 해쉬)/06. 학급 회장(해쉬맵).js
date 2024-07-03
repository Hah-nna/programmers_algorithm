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

// 다시 풀어봄
// 굳이 split할 필요는 없음
function solution(str) {
  const map = new Map();
  let a = str.split("");
  for (let alpha of a) {
    // 해당 알파벳을 키, 밸류를 1로 설정
    // 만약 해당 알파벳을 키로 이미 가지고 있으면 밸류에 1더하기

    if (!map.has(alpha)) {
      map.set(alpha, 1);
    } else {
      let val = map.get(alpha);
      map.set(alpha, val + 1);
    }
  }

  // [키, 값]을 순회하면서 밸류가 max 보다 크다면 answer = key
  let max = 0;
  let answer = "";
  for (let key of map.keys()) {
    let val = map.get(key);
    if (max < val) {
      max = val;
      answer = key;
    }
  }
  return answer;
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));
