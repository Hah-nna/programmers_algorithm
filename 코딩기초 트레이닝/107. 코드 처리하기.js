// 내가 푼 방법
function solution(code) {
  let answer = "";
  let mode = 0;

  for (let i = 0; i < code.length; i++) {
    if (mode === 0) {
      if (code[i] !== "1" && i % 2 === 0) {
        answer += code[i];
      }
      if (code[i] === "1") {
        mode = 1;
      }
    } else {
      // mode가 1일때
      if (code[i] !== "1" && i % 2 !== 0) {
        answer += code[i];
      }
      if (code[i] === "1") {
        mode = 0;
      }
    }
  }
  return answer.length > 0 ? answer : "EMPTY";
}

// for문 안에 if와 if문을 넣어서 좀 지저분함...

// 다른 사람의 방법
function solution(code) {
  let answer = "";
  let mode = 0;

  for (let i = 0; i < code.length; i += 1) {
    if (Number(code[i]) === 1) {
      mode = mode === 1 ? 0 : 1;
    }
    if (Number(code[i]) !== 1 && i % 2 === mode) {
      answer += code[i];
    }
  }
  return answer.length > 0 ? answer : "EMPTY";
}

// mode를 이용해 깔끔하게 풀었다 멋있어

function solution(code) {
  let odd = false;
  return (
    Array.from(code).reduce((acc, v, i) => {
      if (v === "1") {
        odd = !odd;
        return acc;
      }
      return i % 2 === (odd ? 1 : 0) ? acc + v : acc;
    }, "") || "EMPTY"
  );
}

// reduce를 사용하면 좋을 문제 같았는데 어떻게 써야할지 감이 안 잡혀서 참고용으로 덧붙였다
// reduce 사용하는 연습도 해봐야겠다
