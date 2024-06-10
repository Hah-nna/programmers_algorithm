function solution(str) {
  const sett = new Set(str);
  let answer = "";
  for (let i of sett) {
    answer += i;
  }
  return answer;
}
console.log(solution("ksekkset"));
