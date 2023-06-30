// 내가 해결한 방법
function solution(sides) {
  const sortedArr = sides.sort((x, y) => x - y);
  return sortedArr.at(-1) >= sortedArr[0] + sortedArr[1] ? 2 : 1;
}

// 다른 사람이 해결한 방법 중 인상 깊은 방법
// 디스크럭처링을 사용해서 좀 더 읽기 좋게 코드를 작성한 게 마음에 듦
function solution(sides) {
  const [long, a, b] = sides.sort((a, b) => b - a);

  return long < a + b ? 1 : 2;
}
