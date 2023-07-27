// 1. 내가 푼 방법
// count가 1일 때도 같이 출력한 다음 replace를 했음

function solution(s) {
  let answer = "";
  let count = 1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      count++;
    } else {
      answer += s[i];
      answer += count;
      count = 1;
    }
  }

  return answer.replace(/1/g, "");
}

// 2. 강사님이 해결한 방법
// count > 1 조건을 걸어주면 되는구나...!
// 그리고 문자열로 변경하는 것도 잊지말자(자동으로 형변환시 이상한 값이 들어갈 수 있기 때문에
function solution(s) {
  let answer = "";
  let cnt = 1;
  s = s + " ";
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) cnt++;
    else {
      answer += s[i];
      if (cnt > 1) answer += String(cnt);
      cnt = 1;
    }
  }
  return answer;
}
let str = "KKHSSSSSSSE";
console.log(solution(str));
