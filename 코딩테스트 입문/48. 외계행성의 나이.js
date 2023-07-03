// 내가 해결한 방법
function solution(age) {
  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  let result = age
    .toString()
    .split("")
    .map((val) => alphabet[val])
    .join("");

  return result;
}

// 다른 사람이 해결한 방법
function solution(age) {
  return age
    .toString()
    .split("")
    .map((v) => "abcdefghij"[v])
    .join("");
}
// 문자열 자체에도 인덱스가 있음
// 예시 : 52 -> "52" -> ["5","2"]. -> ["abcdefghij"[5], "abcdefghij"[2] ] -> "fc"
// 문자열에도 인덱스가 있다는 사실을 기억하자
