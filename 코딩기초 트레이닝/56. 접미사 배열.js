function solution(my_string) {
  let answer = [];

  let a = [...my_string];
  for (let i = 0; i < a.length; i++) {
    let b = a.slice(-i).join("");
    answer.push(b);
  }
  return answer.sort();
}
