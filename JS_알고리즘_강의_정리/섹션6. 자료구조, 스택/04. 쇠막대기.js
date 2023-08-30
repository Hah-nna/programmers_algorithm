// 요건 제대로 문제 접근을 하지 못해 강사님거 보고 이해하면서
// 다시 머릿속으로 떠올려서 작성함

function solution(s) {
  let answer = 0;
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push("(");
      // 스택에 '('를 푸쉬해서 쎃음
    } else {
      stack.pop();
      // s[i]가 ')'면 s[i-1]번째가 '('이면 레이저니까
      // 스택에서 빼주고 (레이저는 쇠막대기가 아니니까)
      // 스택 배열에 남은 나머지를 answer에다가 더함
      // 만약 pop을 하지 않는다면 레이저에 속하는 괄호가 빠지지 않았으므로
      // 쇠막대기가 아니라 레이저의 갯수도 포함하는 것임
      if (s[i - 1] === "(") {
        answer += stack.length;
      } else {
        // 레이저가 아닌 끝맺음 괄호니까 +1
        answer += 1;
      }
    }
  }

  return answer;
}

let a = "()(((()())(())()))(())";
console.log(solution(a));
