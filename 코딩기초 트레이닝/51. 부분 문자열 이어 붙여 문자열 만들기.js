function solution(str, parts) {
  let sum = "";
  for (let i = 0; i < str.length; i++) {
    let c = str[i].substring(parts[i][0], parts[i][1] + 1);
    sum += c;
  }

  return sum;
}
