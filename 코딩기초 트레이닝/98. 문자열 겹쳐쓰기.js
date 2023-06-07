// 처음 시도한 방법
function solution(myStr, overwrite, s) {
  let b = myStr.substring(s, overwrite.length + s);
  return myStr.replaceAll(b, overwrite);
}

// 테스트 케이스 6번을 계속 통과하지 못해 일단 보류 ㅠ

// 최종적으로 통과한 방법
function solution(myStr, overwrite, s) {
  let a = [...myStr];
  let b = a.splice(s, overwrite.length, overwrite);
  return a.join("");
}
