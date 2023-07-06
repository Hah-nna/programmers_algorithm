// 내가 해결한 코드
// 인덱스를 찾아 없애고 length에 따라 1이나 0을 리턴하게 함
function solution(before, after) {
  var answer = 0;
  // b에서 indexOf로 a의 요소의 인덱스를 찾아 b에서 splice함
  // b의 length가 0이면 1을 리턴, 아니면 0 리턴

  let b = before.split("");
  let a = after.split("");

  for (let i = 0; i < a.length; i++) {
    let idx = b.indexOf(a[i]);
    if (idx === -1) {
      return 0;
    }
    b.splice(idx, 1); // idx가 0이 아니면
  }
  return b.length === 0 ? 1 : 0;
}

// 다른 사람이 해결한 방법
// 이렇게 쉬운 방법이 있다니...! 기억해둬야겠다
function solution(before, after) {
  return before.split("").sort().join("") === after.split("").sort().join("")
    ? 1
    : 0;
}
