function solution(number) {
  var answer = 0;

  [...number].map((x) => (answer += +x));

  return answer % 9;
}
