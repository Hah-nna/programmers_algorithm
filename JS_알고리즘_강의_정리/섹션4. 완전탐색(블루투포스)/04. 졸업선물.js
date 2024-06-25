function solution(m, product) {
  let answer = 0;
  let n = product.length; // 학생 수
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  for (let i = 0; i < n; i++) {
    let money = m - (product[i][0] / 2 + product[i][1]);
    let cnt = 1;
    for (let j = 0; j < n; j++) {
      if (j !== i && product[j][0] + product[j][1] > money) break;
      if (j !== i && product[j][0] + product[j][1] <= money) {
        money -= product[j][0] + product[j][1];
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }
  return answer;
}

let arr = [
  [6, 6], // 12
  [2, 2], // 4
  [4, 3], // 7
  [4, 5], // 9
  [10, 3], // 13
];

console.log(solution(28, arr));

// 문제 자체도 이해 못해서 결국 이해하는 걸로 그쳤다
// 완전 탐색은 정말 다 탐색해야하는 거라서 모든 경우의 수를 생각해야하기 때문에 더 어려운 거 같다
// 1. 들어온 배열(product)을 상품 값(arr[i][0])과 배송비(arr[i][1])를 합친 값이 낮은 순서대로 sort한다
/**
   let arr = [
     [6, 6], // 12
     [2, 2], // 4
     [4, 3], // 7
     [4, 5], // 9
     [10, 3], // 13
   ];

   상품값과 배송비를 더한 값이 [2,2]가 제일 적음
   이를 기준으로 정렬

   2. 50% 할인 쿠폰이 있음. 이걸 어디에 적용해야할지 기준이 없음
   왜냐면 값이 가장 비싼 것에 할인 쿠폰을 적용한다고 해도 그만큼 더 많은 물품을 구매할 수 있을지 없을지 모름
   따라서 하나씩 쿠폰을 먹여보고 money가 물품을 살 수 없는 가격이 되었을 때까지 횟수를 구해서 가장 많은 횟수가 나온 걸로 하면 됨
   일단 for문을 돌면서 0번째부터 쿠폰을 먹인 후 가지고 있는 돈(m)에서 할인 된 값을 뺀다
   그리고 그 안에 또 반복문을 돌면서 쿠폰을 먹인 것을 제외하고(j !== i) 나머지 배열에 았는 상품값이랑 배송비랑 더한 값이 할인된 상품을 뺀 나머지 돈보다 작거나 같으면
   그 금액을 뺀다
   그리고 상품 값이랑 배송비랑 더한 값이 남은 돈보다 크면 더이상 물품을 구매할 수 없으므로 멈춘다
   횟수를 리턴한다
   솔직히 이렇게 흐름만 이해했는데 내가 저렇게 하나부터 열까지 코드를 짤 수 있으면 졸겠다
   반복학습 고고
   *
   */

// 다시 풀어봄
// 앞서 풀었던 멘토링과 같이 기준을 잡고 하나씩 다 돌면서 확인해야함
function solution(price, arr) {
  let answer = 0;
  // 정렬을 해줌
  // 작은 수부터 하나씩 더해가면서 많은 갯수를 살 수 있기 때문임
  let a = arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < a.length; i++) {
    // 기준이 되는 금액(leftMoney)
    // 인자로 주어진 프라이스에서 앞의 수를 나누기 2한 금액과 배송비를 더한 값이 남은돈이 됨
    let leftMoney = price - (a[i][0] / 2 + a[i][1]);

    // 위에서 기준이 되는 상품을 하나 골랐으니까 카운트 변수에 1 할당
    let count = 1;

    for (let j = 0; j < a.length; j++) {
      // 기준이 되는 금액을 더하지 않아야하기 때문에 j !== i라는 조건 붙임
      // 크면 멈추고 작거나 같으면 남은 돈에서 빼줌
      // 그리고 카운트를 더해줌
      if (j !== i && a[j][0] + a[j][1] > leftMoney) break;
      if (j !== i && a[j][0] + a[j][1] <= leftMoney) {
        leftMoney -= a[j][0] + a[j][1];
        count++;
      }
    }
    answer = Math.max(answer, count);
  }
  return answer;
}
