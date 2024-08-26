function solution(str1, str2) {
  let answer = "Yes";
  let hash = new Map();

  for (let item of str1) {
    if (hash.has(item)) {
      hash.set(item, hash.get(item) + 1);
    } else {
      hash.set(item, 1);
    }
  }

  for (let item of str2) {
    if (!hash.has(item) || hash.get(item) === 0) return "NO";
    else {
      hash.set(item, hash.get(item) - 1);
    }
  }
  return answer;
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));

// 다시 풀어본 방법 01
// 맵을 두 개나 할 필요는 없는디...ㅎ for문을 세 번이나 돌아버림ㅋ...
function solution(a, b) {
  let answer = "YES";

  const aMap = new Map();
  const bMap = new Map();

  for (let item of a) {
    if (!aMap.has(item)) {
      aMap.set(item, 1);
    } else {
      aMap.set(item, aMap.get(item) + 1);
    }
  }

  for (let item of b) {
    if (!bMap.has(item)) {
      bMap.set(item, 1);
    } else {
      bMap.set(item, bMap.get(item) + 1);
    }
  }

  for (let [key, value] of aMap) {
    if (aMap.get(key) !== bMap.get(key)) answer = "No";
  }

  return answer;
}

// 다시 풀기 02
// 기준점을 잡고 풀자
function solution(a, b) {
  let answer = "YES";

  const aMap = new Map();

  for (let item of a) {
    if (!aMap.has(item)) aMap.set(item, 1);
    else aMap.set(item, aMap.get(item) + 1);
  }

  for (let item of b) {
    if (aMap.has(item) && aMap.get(item) !== 0) {
      aMap.set(item, aMap.get(item) - 1);
    } else return "No";
  }

  console.log("aMap", aMap);

  return answer;
}

// 다시 풀어본 방법 03
function solution(a, b) {
  let answer = "YES";
  const str1 = new Map();
  const str2 = new Map();

  // 해시만들기
  for (let i = 0; i < a.length; i++) {
    str1.set(a[i], (str1.get(a[i]) || 0) + 1);
    str2.set(b[i], (str2.get(b[i]) || 0) + 1);
  }

  console.log("str1", str1);
  console.log("str2", str2);
  // 값 찾기
  // 하나라도 다르거나 없으면 No 리턴

  for (const [key, value] of str1) {
    let aa = str1.get(key);
    let bb = str2.get(key);
    console.log("aa", aa);
    console.log("bb", bb);
    if (str1.get(key) !== str2.get(key)) answer = "NO";
  }

  return answer;
}

// let a = "abaCC";
// let b = "Caaab";
// console.log(solution(a, b));
