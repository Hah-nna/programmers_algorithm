// 내가 푼 방식
function solution(l, r) {
  let answer = [];
  let num = l;

  while (num <= r) {
    let numStr = num.toString();
    if ([...numStr].every((val) => val == "0" || val == "5")) {
      answer.push(num);
    }
    num++;
  }

  return answer.length === 0 ? [-1] : answer.sort((x, y) => x - y);
}

// 다른 사람의 방법 중 이해한 방법
// 1
function solution(l, r) {
  let result = [];

  for (let i = l; i <= r; i++) {
    const numStr = i.toString();
    if (numStr.match(/^[05]+$/)) {
      result.push(i);
    }
  }

  if (result.length === 0) {
    result.push(-1);
  }

  return result;
}

// 2
function solution(l, r) {
  var answer = [];

  for (let i = l; i <= r; i += 1) {
    if (
      i
        .toString()
        .split("")
        .every((e) => e == "5" || e == "0")
    )
      answer.push(i);
  }
  return answer.length == 0 ? [-1] : answer;
}

// l~r까지 반복해서 숫자 하나하나가 0,5로 이루어져 있는지 확인
// 각 숫자를 문자열로 변환 -> 문자열로 변환한 숫자에 0,5가 들어있는지 확인
// 만약 0과 5로만 이루어져있으면 빈 배열에 추가
// 반복문 종료 후 answer에 length가 0이면 [-1]리턴
