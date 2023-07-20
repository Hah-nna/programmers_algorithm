function solution(arr) {
  let score = 1;
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      score = 0;
      result += 0;
    } else if (arr[i - 1] === 1 && arr[i] === 1) {
      score += 1;
      result += score;
    } else {
      score = 1;
      result += score;
    }
  }
  return result;
}

function solution(arr) {
  let score = 0;
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      score = 0;
      result += score;
    } else if (arr[i] === 1) {
      score++;
      result += score;
    }
  }
  return result;
}

function solution(arr) {
  let answer = 0,
    cnt = 0;
  for (let x of arr) {
    if (x === 1) {
      cnt++;
      answer += cnt;
    } else cnt = 0;
  }

  return answer;
}
