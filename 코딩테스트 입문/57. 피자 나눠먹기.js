// 내가 해결한 방식
// while문을 사용해 i * 6 % n이 0이면 멈추고 i를 리턴함
function solution(n) {
  let i = 1;
  while (i <= n) {
    if ((i * 6) % n === 0) {
      break;
    }
    i++;
  }

  return i;
}

// 다른 사람이 해결한 방법
// 6부터 시작하고 while(true)로 무한루프를 돌 것 같지만
// 아래의 조건문에 해당하면 멈추고 리턴 값으로 piece / 6을 한 값을 리턴함
const solution = (n) => {
  let piece = 6;

  while (true) {
    if (piece % n === 0) {
      break;
    }
    piece += 6;
  }

  return piece / 6;
};

// while 조건문 안의 값이 true이면(0이 아니면) 계속 pizza를 하나식 더해나감
// while문의 조건이 false가 되면((pizza * 6) % n === 0이 되면) while문을 종료하고 pizza를 리턴함
// 나랑 비슷하게 풀었지만 좀 더 간결하고 깔끔한 코드임
function solution(n) {
  let pizza = 1;
  while ((pizza * 6) % n) {
    pizza++;
  }
  return pizza;
}
