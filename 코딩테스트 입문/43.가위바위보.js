// 내가 푼 방법
function solution(rsp) {
  return [...rsp]
    .map((val) => {
      if (val === "2") return "0";
      if (val === "0") return "5";
      if (val === "5") return "2";
    })
    .join("");
}

// 다른 사람이 푼 방법
// 객체를 이용해서 풀었음
function solution(rsp) {
  let arr = {
    2: 0,
    0: 5,
    5: 2,
  };
  var answer = [...rsp].map((v) => arr[v]).join("");
  return answer;
}
