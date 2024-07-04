// 내가 야매로 푼 방법 ㅎ...
function solution(a, d, included) {
  var answer = 0;
  let arr = [a];

  let sum = a;
  for (let i = 0; i < included.length - 1; i++) {
    sum += d;
    arr.push(sum);
  }

  const aa = included.filter((val, idx) => {
    if (val) {
      return (answer += arr[idx]);
    }
  });

  return answer;
}

// 다른 사람이 푼 방법으로 다시 풀어보기

function solution(a, d, included) {
  return included.reduce((acc, flag, i) => {
    return flag ? acc + a + d * i : acc;
  }, 0);
}

// 다른 사람이 푼 방법으로 다시 풀어보기 02
function solution(a, d, included) {
  var answer = 0;

  for (let i = 0; i < included.length; i++) {
    if (included[i]) {
      answer += a + d * i;
    }
  }

  return answer;
}
