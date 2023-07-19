function solution(s) {
  let result;
  let a = Math.floor(s.length / 2);
  if (s.length % 2 !== 0) result = s[a];
  else result = s.substring(a - 1, a + 1);

  return result;
}
console.log(solution("study"));

function solution(s) {
  let result;
  let a = Math.floor(s.length / 2);
  if (s.length % 2 !== 0) result = s.substr(a, 1);
  else result = s.substr(a - 1, 2);

  return result;
}
console.log(solution("studyp"));
