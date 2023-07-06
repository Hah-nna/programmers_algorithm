// 처음 시도한 방법
function solution(array, n) {
  let a = array.map((val) => n - val);
  let idx = a.indexOf(Math.min(...a));
  return array[idx];
  // 각각의 값에서 n을 뺌
  // 빼고 남은 수가 가장 적으면 적은 수의 idx에 있는 수를 리턴함
}

// 테스트 코드는 통과했으나 제출할 때 틀린 경우가 더 많음
// 생각해보니 음수를 고려 안 한 듯
// 그래서 map을 돌릴 때 Math.abs을 사용해 절대값으로 나오게 함
// x가 양수이거나 0이라면 x를 리턴하고, x가 음수라면 x의 반대값, 즉 양수를 반환

function solution(array, n) {
  let a = array.map((val) => Math.abs(n - val));
  let idx = a.indexOf(Math.min(...a));
  return array[idx];
}

// 그러나 테스트 코드 5,13번에서 막힘...
// 아마 가장 가까운 수가 여러 개일 경우를 고려하지 않아서 인듯
// 근데 어떻게 짜야할지 지금 생각이 안 나기 때문에 내일 다시 도전...!
