// 내가 해결한 방법
function solution(n_str) {
  return n_str.replaceAll(/^[0]+/g, "");
}

//^는 문자열의 시작을 나타냄
// ^[0]+ 는 문자열의 시작점에 0이 하나 이상 있는 문자열을 바꾼다는 뜻

function solution(n_str) {
  return String(Number(n_str));
}
