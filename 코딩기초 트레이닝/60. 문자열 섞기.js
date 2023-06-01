// 내가 제일 첫 번째로 쓴 답
function solution(str1, str2) {
  let a = [...str1];
  let b = [...str2];

  let c = [];

  for (let i = 0; i < a.length; i++) {
    let d = a[i] + b[i];
    c.push(d);
  }
  return c.join("");
}

//for문 사용

function solution(str1, str2) {
  let answer = "";
  let str1Arr = [...str1];
  let str2Arr = [...str2];

  for (let i = 0; i < str1.length; i++) {
    answer += str1Arr[i] + str2Arr[i];
  }
  return answer;
}

// map 사용
function solution(str1, str2) {
  let answer = "";
  let str1Arr = [...str1];
  let str2Arr = [...str2];
  str1Arr.map((x, idx) => {
    answer = answer + x + str2Arr[idx];
  });
  return answer;
}
