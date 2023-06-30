// 내가 해결한 방법
// 오름차순 사용
function solution(numbers) {
  const sortedArr = numbers.sort((x, y) => x - y);
  return sortedArr.at(-1) * sortedArr.at(-2);
}

// 내림차순 사용
function solution(numbers) {
  const sortedArr = numbers.sort((x, y) => y - x);
  return sortedArr[0] * sortedArr[1];
}

// 다른 사람의 해결 방법
// 구조 분해 할당 써서 내림차순으로 정렬한 것의 0번쨰와 1번째를 곱함
function solution(numbers) {
  let [a, b] = numbers.sort((a, b) => b - a);
  return a * b;
}
