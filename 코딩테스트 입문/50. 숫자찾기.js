// 내가 해결한 방법
function solution(num, k) {
  let newStr = String(num);
  return newStr.indexOf(k) !== -1 ? newStr.indexOf(k) + 1 : -1;
}

// 다른 사람이 해결한 방법
// 1. 더하기를 통해서 문자열 만듦
function solution(num, k) {
  let ind = ("" + num).indexOf(k);
  return ind === -1 ? -1 : ind + 1;
}

// 2. map을 활용한 방법
function solution(num, k) {
  return (
    num
      .toString()
      .split("")
      .map((el) => Number(el))
      .indexOf(k) + 1 || -1
  );
}
