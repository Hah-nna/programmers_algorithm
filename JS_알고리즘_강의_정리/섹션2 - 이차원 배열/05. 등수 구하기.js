function solution(arr) {
  let copy = [...arr];
  let sorted = copy.sort((x, y) => y - x);

  let a = arr.map((val, idx) => {
    return (val = sorted.indexOf(val) + 1);
  });
  return a;
}

let arr = [87, 89, 92, 100, 76, 100];
console.log(solution(arr));
// 근데 이 코드는 같은 점수일 때 같은 등수로 하는 것을 못함

function solution(arr) {
  let result = Array.from(arr, () => 1);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) result[i]++;
    }
  }
  return result;
}
