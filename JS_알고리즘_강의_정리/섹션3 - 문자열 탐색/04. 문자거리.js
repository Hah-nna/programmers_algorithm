// 1. 내가 해결한 방법
// for문 안의 else 의 if가 좀 아쉬움...

function solution(s, t) {
  let a = [];
  let stand = 999999;

  for (let item of s) {
    if (item === t) {
      stand = 0;
      a.push(stand);
    } else {
      stand++;
      a.push(stand);
    }
  }

  for (let i = a.length - 1; i >= 0; i--) {
    if (a[i] === 0) {
      stand = 0;
    } else {
      stand++;
      if (stand < a[i]) {
        a[i] = stand;
      }
    }
  }

  return a;
}

// 2. 강사님이 해결한 방법
// Math.min()을 사용해 훨씬 더 깔끔하고 가독성있게 풀었다
function solution(s, t) {
  let answer = [];
  let p = 1000;
  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }
  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) p = 0;
    else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));
