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
