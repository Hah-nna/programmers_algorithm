// 내가 푼 방법
function solution(a, b) {
  var answer = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    answer += i;
  }
  return answer;
}

// 가우스 공식(등차수열 공식이랑 같음)
// 가우스의 공식을 찾아보고 적용해보자...
function adder(a, b) {
  return ((a + b) * (Math.abs(a - b) + 1)) / 2;
}

console.log(adder(3, 5));
