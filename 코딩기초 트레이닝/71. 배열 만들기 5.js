function solution(int, k, s, l) {
  var answer = [];
  return int.map((a) => +a.substr(s, l)).filter((x) => x > k);
}
