// 내가 해결한 방법
function solution(array) {
  const arrayLength = Math.floor(array.length / 2);
  const sortedArr = array.sort((x, y) => x - y);
  return sortedArr[arrayLength];
}

// 다른 사람의 방법 중 인상 깊은 방법
function solution(array) {
  return array
    .sort((a, b) => {
      return a - b;
    })
    .at(Math.floor(array.length / 2));
}
