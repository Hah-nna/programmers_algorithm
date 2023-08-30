// 중위식 -> 후위식
// 휘위식 -> 중위식으로 바꾸는 스택 문제가 은근히 많음 이럴 때 스택을 사용하자
// 거의 다 떠먹여주는 문제 설명 듣고 풀어보았는데 강사님하거 거의 비슷하게 풀음

// 1차로 풀어봄
function solution(s) {
  let answer;
  let st = [];

  for (let item of s) {
    if (!isNaN(Number(item))) {
      st.push(Number(item));
    } else {
      let right = st.pop();
      let left = st.pop();

      if (item === "+") answer = left + right;
      else if (item === "-") answer = left - right;
      else if (item === "*") answer = left * right;
      else if (item === "/") answer = left / right;
      st.push(answer);
      console.log("st2", st);
    }
  }

  return answer;
}

// 강사님 코드가 더 마음에 들어 바꿔봄
function solution(s) {
  let st = [];

  for (let item of s) {
    if (!isNaN(Number(item))) {
      st.push(Number(item));
    } else {
      let right = st.pop();
      let left = st.pop();

      if (item === "+") st.push(left + right);
      else if (item === "-") st.push(left - right);
      else if (item === "*") st.push(left * right);
      else if (item === "/") st.push(left / right);
    }
  }

  return st[0];
}

let str = "352+*9-";
console.log(solution(str));
