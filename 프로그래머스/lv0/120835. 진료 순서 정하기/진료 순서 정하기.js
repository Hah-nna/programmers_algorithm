// sort가 원본 배열을 바꾸는 메소드인 걸 지금 앎...

function solution(emergency) {
  let sortedArr = [...emergency].sort((x, y) => y - x);
  // [76, 24, 3]
  return emergency.map((val) => sortedArr.indexOf(val) + 1);
  // [3 76 24]
}
