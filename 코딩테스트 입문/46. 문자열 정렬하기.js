// 내가 푼 방법
function solution(my_string) {
  return my_string
    .split("")
    .filter((v) => !isNaN(v))
    .map((v) => v * 1)
    .sort((a, b) => a - b);
}

// 다른 사람이 푼 방법
// match를 사용해 숫자만 골라내고 sort한 다음 map을 돌려서 각각의 요소를 숫자로 변환해 새로운 배열 반환
function solution(my_string) {
  return my_string
    .match(/\d/g)
    .sort((a, b) => a - b)
    .map((n) => Number(n));
}
