// 내가 해결한 방법
function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}

// 다른 사람이 해결한 방법
// 1. indexOf 사용
function solution(str1, str2) {
  return str1.indexOf(str2) === -1 ? 2 : 1;
}

// 2. str2를 기준으로 split하고 길이가 1 이상이면 1을 반환, 아니면 2를 반환
function solution(str1, str2) {
  return str1.split(str2).length > 1 ? 1 : 2;
}
