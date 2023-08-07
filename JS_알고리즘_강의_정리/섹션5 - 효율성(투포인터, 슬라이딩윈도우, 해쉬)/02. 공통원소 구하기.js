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
