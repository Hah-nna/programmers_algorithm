// 첫 번째로 푼 방법
function solution(arr, k) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1] && !answer.includes(arr[i])) {
      answer.push(arr[i]);
    }
    if (answer.length === k) {
      break;
    }
  }

  while (answer.length < k) {
    answer.push(-1);
  }

  return answer;
}

// chatGPT에게도 물어보았음
// 그런데 자료구조를 사용해 풀더라...
// 배운 거 이럴 때 써먹어야하는데 ㅎ

// chatGPT가 푼 방법
function solution(arr, k) {
  const uniqueNums = new Set();
  const result = [];

  for (let num of arr) {
    if (!uniqueNums.has(num)) {
      uniqueNums.add(num);
      result.push(num);
      if (result.length === k) {
        break;
      }
    }
  }

  while (result.length < k) {
    result.push(-1);
  }

  return result;
}

// Set을 이용해 중복되는 값인지 확인하고
// 중복되는 값이 아니라면 빈배열인 result에 push함
// 그리고 result.length가 k와 같다면 멈춤
// result.length가 k보다 작은 경우는
// while문을 사용해 k보다 작을 때까지 계속 -1을 result에 push함
// 추가하다보면 result의 length가 k와 같은 시점이 옴 그러면 멈춤

// 자료구조 존잼
