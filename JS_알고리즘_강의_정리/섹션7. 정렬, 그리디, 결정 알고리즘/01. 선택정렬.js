// 선택 정렬이 뭔지 몰라서 sort로 풀었는데 문제의 취지와는 달라서
// 선택 정렬이 뭔지 알고 이 개념으로 다시 풀어봐야겠다
// i번쨰에 올 수 있는 값을 쭉 탐색해서 찾은 후 선택해서 i번째에 할당 후 정렬

function solution(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    // 1
    // 2
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) idx = j;
      // arr[1]: 13 arr[1]: 13 pass
      // arr[2]: 11 < arr[1]: 13 -> idx = 2
      // arr[3]: 7 < arr[2]: 11 -> idx = 3
      // arr[4]: 23 arr[3]: 7 -> pass
      // arr[5]: 15 arr[3]: 7 -> pass
    }

    [arr[i], arr[idx]] = [arr[idx], arr[i]];
    // [arr[0], arr[1]] = [arr[1], arr[0]]
    // arr[0](13)과 arr[1](5)를 디스트럭처링을 통해 교환함
    // 이 과정을 반복하면 오름차순으로 배열이 정렬됨

    // [arr[1], arr[3]] = [arr[3], arr[1]]
  }
  console.log(arr, "arr");
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];

console.log(solution(arr));
