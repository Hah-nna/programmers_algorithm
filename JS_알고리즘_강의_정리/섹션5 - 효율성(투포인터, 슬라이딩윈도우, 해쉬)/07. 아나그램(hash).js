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
