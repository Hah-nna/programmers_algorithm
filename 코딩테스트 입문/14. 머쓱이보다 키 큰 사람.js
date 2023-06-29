// 내가 해결한 방법
function solution(array, height) {
  let count = 0;
  for (let person of array) {
    person > height ? (count += 1) : count;
  }
  return count;
}

// 다른 사람의 해결 방법 중 인상깊은 방법
function solution(array, height) {
  let newArray = array.filter((val) => val > height);
  return newArray.length;
}

// filter를 이용해 height보다 큰 값을 요소로 새로운 배열을 만들고 length를 이용했다
