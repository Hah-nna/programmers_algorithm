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
