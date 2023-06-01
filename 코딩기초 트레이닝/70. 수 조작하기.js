function solution(num) {
  let answer = "";
  for (let i = 0; i < num.length - 1; i++) {
    let val = num[i + 1] - num[i];
    switch (val) {
      case 1:
        answer += "w";
        break;
      case -10:
        answer += "a";
        break;
      case 10:
        answer += "d";
        break;
      case -1:
        answer += "s";
        break;
    }
  }
  return answer;
}
