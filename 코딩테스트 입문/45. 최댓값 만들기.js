// 내가 푼 방법
function solution(numbers) {
  const positiveArr = numbers.sort((x, y) => y - x);

  return positiveArr[0] * positiveArr[1] >
    positiveArr.at(-1) * positiveArr.at(-2)
    ? positiveArr[0] * positiveArr[1]
    : positiveArr.at(-1) * positiveArr.at(-2);
}

// 다른 사람이 푼 방법
// 1. Math.max를 이용해 깔끔하게 품
function solution(numbers) {
  numbers.sort((a, b) => a - b);
  return Math.max(
    numbers[0] * numbers[1],
    numbers[numbers.length - 1] * numbers[numbers.length - 2]
  );
}

// 2. 1번이랑 같은데 좀 더 깔끔해서 좋음
function solution(numbers) {
  const N = numbers.length;

  numbers.sort((a, b) => a - b);

  return Math.max(numbers[N - 1] * numbers[N - 2], numbers[0] * numbers[1]);
}
