// 큐를 이용하긴 해야겠는데 어떻게 이용할지 잘 모르겠어서
// 일단 queue와 need가 같은 걸로 판별함
// 되긴 되는데 가독성이 너무 떨어지고 필요없는 코드들이 보임
// 그리고 디스트럭처링은 왜 했냨ㅋㅋ

function solution(need, plan) {
  let queue = [];

  const [one, two, three] = need;

  for (let i = 0; i < plan.length; i++) {
    if (plan[i] === one) queue.push(plan[i]);
    else {
      if (queue.includes(one) && plan[i] === two) queue.push(plan[i]);
      else if (queue.includes(one) && queue.includes(two) && plan[i] === three)
        queue.push(plan[i]);
    }
  }

  return queue.join("") === need ? "YES" : "NO";
}

let a = "CBA";
let b = "CABDGE";
console.log(solution(a, b));

// 위의 코드를 고쳐봄
// index라는 변수를 하나 두고 need에 있는 것과 같으면 하나씩 더해줌
function solution(need, plan) {
  let index = 0;
  for (let i = 0; i < plan.length; i++) {
    if (plan[i] === need[index]) index++;
  }

  return index === need.length ? "YES" : "NO";
}

// 강사님이 큐를 이용해 해결한 방법
// shift한 걸 뭐랑 비교해야하나 고민했었는데 너무나 쉽다리...
// shift()는 일단 실행되면 원본 배열을 변환시키기 때문에 따로 안 해줘도 됨

function solution(need, plan) {
  let queue = [...need];
  // [C, B, A]

  for (let item of plan) {
    if (queue.includes(item)) {
      if (item !== queue.shift()) return "NO";
    } else return "NO";
  }

  return queue.length === 0 ? "Yes" : "No";
}
