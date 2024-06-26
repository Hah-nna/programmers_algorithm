function solution(n, k, card) {
  let cardSum = new Set();

  for (let i = 0; i < card.length; i++) {
    for (let j = i + 1; j < card.length; j++) {
      for (let l = j + 1; l < card.length; l++) {
        cardSum.add(card[i] + card[j] + card[l]);
      }
    }
  }

  let a = [...cardSum].sort((x, y) => y - x); // 내림차순

  return a[k - 1]; // 3번째 수를 뽑으려면 인덱스 - 1 을 해야나오기 때문
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));

// 1. 3장의 카드를 합친 수를 기록한다(중복을 제외)
// 2. 배열로 만들어 sort한다
// 3. k번째 값을 리턴한다

// 중복을 피해야하는 거면 Set을 고려하자
// 앞의 두 문제가 좀 어려워서인지 이번 문제는 아주 쉽다 ㅎㅎㅎㅎ
// 멘토링과 졸업 선물 문제 다시 복습하자~

// 다시 풀어봄
// set 생각할 겨를없이 걍 for문 돌려서 해버림;ㅎ
// 생각하는 과정이 약간 강사님이랑 비슷해져서 뿌듯
// 중복되는 거는 조건문 걸어서 없애버림

function solution(arr, k) {
  // 중복되는 걸 조건문을 걸어 피해줌
  // 첫 번째와 두 번째 고정
  // 두 번째는 +1
  // 세 번째는 두 번째의 +1...?

  let a = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    console.log("iii", arr[i]);
    for (let j = i + 1; j < arr.length - 1; j++) {
      console.log("jj", arr[j + 1]);
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[k] !== arr[i] && arr[k] !== arr[j]) {
          sum += arr[i] + arr[j] + arr[k];
          a.push(sum);

          sum = 0;
        }
      }
    }
  }
  let answer = [];
  const b = a.sort((x, y) => y - x);
  for (let i of b) {
    if (i !== answer[answer.length - 1]) {
      answer.push(i);
    }
  }

  return answer[k - 1];
}
