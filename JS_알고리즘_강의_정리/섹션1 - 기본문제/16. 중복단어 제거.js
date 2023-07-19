function solution(s) {
  let answer;
  answer = s.filter((val, idx) => idx === s.indexOf(val));
  return answer;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
