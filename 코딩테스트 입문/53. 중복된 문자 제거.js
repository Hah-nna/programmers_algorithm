// 내가 해결한 방법
// set을 사용했지만 array가 아니라서 for of 사용해서 더함
function solution(my_string) {
  const str = new Set([...my_string]);
  // 예시) str = Set(4) { 'p', 'e', 'o', 'l' }
  let a = "";
  for (let item of str) {
    a += item;
  }
  return a;
}

// 다른 사람이 푼 방법
// 스프레드 문법을 사용해 배열 안에서 Set하고 이 배열을 join함
// 아직 Set에 익숙하지 않으니까 좀 더 익숙해져보자
function solution(my_string) {
  return [...new Set(my_string)].join("");
}
