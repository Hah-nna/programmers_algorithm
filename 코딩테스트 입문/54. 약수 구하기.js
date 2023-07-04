// 내가 해결한 방법
function solution(n) {
  var answer = [];
  let i = 1;
  while (i <= n) {
    if (n % i === 0) {
      answer.push(i);
    }
    i++;
  }
  return answer;
}

// 다른 사람이 해결한 방법
// 길이 n만큼의 배열을 0으로 채움
// 각 요소마다 접근해 1부터 시작하는 배열을 만듦
// 예를 들면 n = 12일 때, [0,0,0,0,0,0,0,0,0,0,0,0]
// map을 돌면서 0번째 요소의 값(0)과 index(0) + 1을 해서 0번째 요소를 1로 변경
// 1번째 요소는 0+1+1 = 2
// 2번째 요소는 1+1+1 = 3 ...
// [1,2,3,4,5,6,7,8,9,10,11,12]가 됨
// filter를 돌리면서 n % 배열 속 하나하나의 요소 === 나머지 0 인 것만 필터링함
// [1, 2, 3, 4, 6]라는 결과값이 나옴
function solution(n) {
  return Array(n)
    .fill(0)
    .map((v, index) => v + index + 1)
    .filter((v) => n % v === 0);
}
