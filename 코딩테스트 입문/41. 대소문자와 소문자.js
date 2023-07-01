// 내가 푼 방법
function solution(my_string) {
  return [...my_string]
    .map((x) => (x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()))
    .join("");
}

// 다른 사람이 푼 방법
function solution(my_string) {
  return [...my_string]
    .map((el) => (el.charCodeAt() < 91 ? el.toLowerCase() : el.toUpperCase()))
    .join("");
}
