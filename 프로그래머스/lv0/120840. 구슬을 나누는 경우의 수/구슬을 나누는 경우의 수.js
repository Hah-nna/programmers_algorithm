// 내가 푼 방법...
// 일일히 for 문 돌려서 걍 문제에서 주는 힌트대로 했지만...
// 문제를 풀면서도 이건 재귀함수로 해야한다는 생각은 있었지만
// 아직 재귀함수가 어려움...
/**
 * Math.round()를 한 이유
 * 컴퓨터는 2진법을 사용함. 그래서 컴퓨터는 우리가 사용한 10진법을 2진법으로 바꾸는데 이 과정에서 소수 중 일부는 무한소수가 되어버림.
 * 하지만 컴퓨터 메모리에는 한계가 있어 무한 소수를 다 담지 못하고 중간에 잘라서 유한 소수로 저장함.
 * 이 과정에서 미세한 오차가 발생함
 * 이를 해결하는 방법으로 결과값을 소수점 12번째 자리에서 반올림하는 방법을 사용한다고 함
 * toFixed()나 Math.round()를 사용함
 * */

function solution(balls, share) {
  let a = 1;
  let b = 1;
  let c = 1;
  let minusCalc = balls - share;

  for (let i = 1; i <= balls; i++) {
    a *= i;
  }

  for (let i = 1; i <= minusCalc; i++) {
    b *= i;
  }

  for (let i = 1; i <= share; i++) {
    c *= i;
  }

  return Math.round(a / (b * c));
}

// 다른 사람이 재귀함수로 푼 방식
// 재귀함수 짱... 난 왜 이렇게 생각을 못하는가
function solution(balls, share) {
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }

  // 문제에서 알려준대로 공식에 정의한 재귀함수 사용하기
  const answer =
    factorial(balls) / (factorial(share) * factorial(balls - share));

  return answer;
}
