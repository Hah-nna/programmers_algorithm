// 내가 해결한 방법
// right면 맨 끝의 요소가 맨 앞으로
// left면 맨 앞의 요소가 끝으로

function solution(numbers, direction) {
  let answer = [...numbers];
  if (direction === "right") {
    numbers.pop();
    numbers.unshift(answer.at(-1));
  } else {
    numbers.shift();
    numbers.push(answer.at(0));
  }
  return numbers;
}

// 코드리뷰 받고 고친 버전
// numbers를 바로 mutate하지 말고 카피해서 변형함
// at은 아직 ECMAScript의 정식 메소드가 아니기 때문에 변경

function solution(numbers, direction) {
  let copiedNumbers = [...numbers];
  if (direction === "right") {
    copiedNumbers.unshift(copiedNumbers.pop());
  } else {
    copiedNumbers.push(copiedNumbers.shift());
  }
  return copiedNumbers;
}
