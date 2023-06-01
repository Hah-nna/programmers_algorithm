function solution(num_str) {
  let answer = 0;

  [...num_str].map((x) => (answer += Number(x)));

  return answer;
}
