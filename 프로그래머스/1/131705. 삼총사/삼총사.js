function solution(number) {
  let count = 0;
  // 삼중 포문...?
  // i = 0; j = i + 1; k = j + 1
  // 더한 값이 0이면 카운트++
  // 리턴 sum

  for (let i = 0; i < number.length - 2; i++) {
    for (let j = i + 1; j < number.length - 1; j++) {
      for (let k = j + 1; k < number.length; k++) {
        let sum = 0;
        sum += number[i] + number[j] + number[k];
        if (sum === 0) count++;
      }
    }
  }
  return count;
}

// 다른 풀이(dsf)

function solution(number) {
  var answer = 0;
  function dfs(idx, count, sum) {
    if (idx > number.length) {
      return;
    }
    if (count === 3) {
      if (sum === 0) {
        answer++;
      }
      return;
    }
    dfs(idx + 1, count + 1, sum + number[idx]);
    dfs(idx + 1, count, sum);
  }
  dfs(0, 0, 0);
  return answer;
}
