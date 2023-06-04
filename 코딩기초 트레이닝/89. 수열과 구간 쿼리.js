function solution(arr, queries) {
  let result = [...arr];

  for (let i = 0; i < queries.length; i++) {
    const [s, e, k] = queries[i];

    for (let j = s; j <= e; j++) {
      if (j % k === 0) {
        result[j]++;
        //s = 0 / k = 1 / e = 4

        // 0 % 1 = 0
        // 1 % 1 = 0
        // 2 % 1 = 0
        // 3 % 1 = 0
        // 4 % 1 = 0

        // => 1,2,3,4

        // s = 0 / k = 2 / e = 3

        // 0 % 2 = 0
        // 1 % 2 = 1
        // 2 % 2 = 0

        // => 0, 2

        // s = 0 / k = 3 / e = 3

        // 0 % 3 = 0
        // 1 % 3 = 1
        // 2 % 3 = 2
        // 3 % 3 = 0

        // => 0,3

        /*
[0, 1, 2, 4, 3] => [1,2,3,5,4] => [2,2,4,5,4] => [3,2,4,6,4]
*/
      }
    }
  }

  return result;
}

function solution(arr, queries) {
  for (let [s, e, k] of queries) {
    for (let i = s; i <= e; i++) {
      if (i % k === 0) arr[i]++;
    }
  }
  return arr;
}
