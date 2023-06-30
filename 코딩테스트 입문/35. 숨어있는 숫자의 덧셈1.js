// 내가 해결한 방법
// \D(숫자가 아닌 것)을 사용해 풀었음
function solution(my_string) {
  let filteredStr = my_string.replace(/\D+/g, "");
  return filteredStr.split("").reduce((acc, cur) => acc + Number(cur), 0);
}

// 다른 사람이 해결한 방법
// 0~9까지 매치하는 숫자만을 뽑아서 각 수를 더함
function solution(my_string) {
  return my_string.match(/[0-9]/g).reduce((acc, cur) => acc + Number(cur), 0);
}
