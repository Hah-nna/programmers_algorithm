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
