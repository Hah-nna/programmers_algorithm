// 메소드를 사용한 방법
function solution(arr1, arr2) {
  return [...a, ...b].sort((x, y) => x - y);
}

// while문으로 해결한 방법
// 투 포인터 잘 배워봐야겠다

function solution(arr1, arr2) {
  let result = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] <= arr2[p2]) result.push(arr1[p1++]);
    // 후치 연산이라서 arr1[p1]이 푸쉬된 다음 p1 값이 하나 증가함
    else result.push(arr2[p2++]);
  }

  // p1과 p2중에 뭐가 끝났는지 모르니까 둘다 length보다 작을때까지 돌려서 result에 넣음

  while (p1 < arr1.legnth) result.push(arr1[p1]);
  while (p2 < arr2.length) result.push(arr2[p2]);

  return result;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
