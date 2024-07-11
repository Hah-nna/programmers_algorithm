function solution(numbers) {
  var answer = 0;
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  numbers.sort();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== numbers[i]) {
      answer += i;
      numbers.splice(i, 0, i);
      console.log(numbers);
    }
  }
  return answer;
}

function solution(numbers) {
  // 0~9 더한 값 : 45
  // 45 - number의 모든 요소를 더한 값을 리턴

  let answer = numbers.reduce((acc, cur) => acc + cur, 0);
  return 45 - answer;
}
