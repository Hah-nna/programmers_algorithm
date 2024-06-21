function solution(n, arr) {
  let b = [...arr];

  let result = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let item of b) {
    let sum = String(item)
      .split("")
      .reduce((pre, cur) => {
        return pre + Number(cur);
      }, 0);
    if (sum > max) {
      max = sum;
      result = item;
    } else if (max === sum) {
      if (item > result) result = item;
    }
  }
  return result;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));

// 다시 풀어본 방법

function solution(num, arr) {
  let sum = 0;
  let max = 0;
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    console.log("arr[i]", arr[i]);
    let split = String(arr[i]).split("");
    sum = 0;
    for (let j = 0; j < split.length; j++) {
      console.log("split[j]", split[j]);
      sum += Number(split[j]);
      console.log("sum", sum);
    }

    if (sum > max) {
      max = sum;
      answer = arr[i];
      // sum = 0;
    } else if (sum === max) {
      answer = answer > arr[i] ? answer : arr[i];
    }
  }
  // max = 0
  // 이중포문으로 돌면서 자리수끼리 더함
  // 더한 값이 max랑 같으면 max = a[i]
  // max보다 크면 max = a[i]
  return answer;
}

// 개선 시킨 코드

function solution(num, arr) {
  let maxSum = 0;
  let maxNumber = 0;

  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];
    const currentSum = String(currentNumber)
      .split("")
      .reduce((acc, curr) => acc + Number(curr), 0);

    if (currentSum > maxSum) {
      maxSum = currentSum;
      maxNumber = currentNumber;
    } else if (currentSum === maxSum && currentNumber < maxNumber) {
      maxNumber = currentNumber;
    }
  }

  return maxNumber;
}
