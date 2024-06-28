// 1. 2중 for문으로 해결한 방법
function solution(arr1, arr2) {
  let arr = [];

  let arr3 = arr1.sort((x, y) => x - y);

  for (let i = 0; i < arr3.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr3[i] === arr2[j]) {
        arr.push(arr3[i]);
        break;
      }
    }
  }

  return arr;
}

// 2. 투포인터로 해결한 방법
function solution(arr1, arr2) {
  let arr = [];
  let p1 = 0;
  let p2 = 0;

  arr1 = arr1.sort((x, y) => x - y);
  arr2 = arr2.sort((x, y) => x - y);

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) p1++;
    else if (arr1[p1] === arr2[p2]) {
      arr.push(arr1[p1]);
      p1++;
      p2++;
    } else if (arr1[p1] > arr2[p2]) p2++;
  }

  return arr;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));

// 다시 풀어봄(완전 탐색)
function solution(arr1, arr2) {
  let answer = [];
  // 포인터를 돌면서 같으면 answer에 push
  // 오름차순으로 정렬해서 리턴

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        answer.push(arr1[i]);
        break;
      }
    }
  }
  return answer.sort((x, y) => x - y);
}

// 다시 풀어봄(투포인터)
function solution(arr1, arr2) {
  let answer = [];
  let p1 = (p2 = 0);

  // 오름차순 정렬
  const arr11 = arr1.sort((x, y) => x - y);
  const arr22 = arr2.sort((x, y) => x - y);
  // 1 2 3 5 9
  // 2 3 5 7 8

  // 같으면 푸쉬 && p1++ p2++
  // p1 < p2 -> 뒤로도 계속 같은 값이 없는거니까 p1++
  // p1 > p2 -> p2에는 계속 같은 값이 없는거니까 p2++를 해서 큰 값으로 포인터 옮기기
  while (p1 < arr11.length && p2 < arr22.length) {
    console.log("p1", p1);
    console.log("p2", p2);
    if (arr11[p1] === arr22[p2]) {
      answer.push(arr11[p1]);
      p1++;
      p2++;
    } else if (arr11[p1] < arr22[p2]) p1++;
    else if (arr11[p1] > arr22[p2]) p2++;
    // p1 < p2 -> 같은 값 없음 / p1++(오름차순정리했으니까)
  }

  return answer;
}
