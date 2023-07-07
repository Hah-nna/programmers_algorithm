function solution(my_string) {
  let numArr = my_string.match(/\d+/g);
  if (!numArr) return 0; // 자연수가 없으면 null이라서 false
  return numArr.reduce((pre, cur) => pre + Number(cur), 0);
}

// 다른 사람이 해결한 방법
function solution(my_string) {
  return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
}
