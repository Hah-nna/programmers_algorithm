// 요소 하나하나를 넣음
// 만약 요소가 )라면 (를 만날 때까지 뺌( '('도 뺴야함)
// 접근 방법은 맞았는데 while문의 조건을 이상하게 써서 안 되던 거였음...
// 연습이 필요함
function solution(s) {
  let result = [];

  for (let item of s) {
    if (item === ")") {
      while (result.pop() !== "(");
    } else {
      result.push(item);
    }
  }
  return result.join("");
}

let a = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(a));

// 다시 풀기 02
// flag라는 변수를 이용해 풀어봄;; 근데 이거 스택으로 풀어야하는데 또 순회해버렸네
function solution(a) {
  const stack = [];
  let flag = 0;
  let answer = "";
  // flag === 0 && str = ( => flag++
  // flag !== 0 && str = ) => flag--
  // flag === 0 && str !== ( && str !== ) answer += "str"

  for (const str of a) {
    if (str === "(") flag++;
    else if (str === ")") flag--;
    else if (flag === 0 && str !== "(" && str !== ")") {
      answer += str;
    }
  }
  return answer;
}
