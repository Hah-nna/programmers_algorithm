// 내가 해결한 방법
function solution(my_string) {
  const regex = /[a|e|i|o|u]/g;
  return my_string.replaceAll(regex, "");
}

function solution(my_string) {
  return my_string.replace(/[aeiou]/g, "");
}
