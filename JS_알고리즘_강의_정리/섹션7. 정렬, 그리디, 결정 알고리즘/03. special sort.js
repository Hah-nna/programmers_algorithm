function solution(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      // j < 8 - 0 - 1 = 7
      // j < 8 - 1 - 1 = 6
      // j < 8 - 2 - 1 = 5
      // j < 8 - 3 - 1 = 4
      // j < 8 - 4 - 1 = 3

      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        // arr[0]: 1 arr[j+1]: 2 => pass
        // arr[1]: 2 arr[j+1]: 3 => pass
        // arr[2]: 3 arr[j+1]: -3 => arr = [1, 2, -3, 3, -2, 5, 6, -6];
        // arr[3]: 3 arr[j+1]: -2 => arr = [1, 2, -3, -2, 3, 5, 6, -6];
        // arr[4]: 3 arr[j+1]: 5 => pass;
        // arr[5]: 5 arr[j+1]: 6 => pass;
        // arr[6]: 6 arr[j+1]: -6 => arr = [1, 2, -3, -2, 3, 5, -6, 6];

        // ----------------
        // arr[0]: 1 arr[j+1]: 2 => pass
        // arr[1]: 2 arr[j+1]: -3 => [1, -3, 2, -2, 3, 5, -6, 6];
        // arr[2]: 2 arr[j+1]: -2 => arr = [1, -3, -2, 2, 3, 5, -6, 6];
        // arr[3]: -2 arr[j+1]: 3 => pass
        // arr[4]: 3 arr[j+1]: 5 => pass;
        // arr[5]: 5 arr[j+1]: -6 => arr = [1, -3, -2, 2, 3, -6, 5, 6];

        // -----------------

        // arr[0]: 1 arr[j+1]: -3 => arr = [-3, 1, -2, 2, 3, -6, 5, 6];
        // arr[1]: 1 arr[j+1]: -2 => [-3, -2, 1, 2, 3, -6, 5, 6];
        // arr[2]: 1 arr[j+1]: 2 => pass
        // arr[3]: 2 arr[j+1]: 3 => pass
        // arr[4]: 3 arr[j+1]: -6 => arr = [-3, -2, 1, 2, -6, 3, 5, 6];

        // -----------------

        // arr[0]: -3 arr[j+1]: -2 => arr = [-3, -2, 1, 2, -6, 3, 5, 6];
        // arr[1]: -2 arr[j+1]: 1 => pass
        // arr[2]: 1 arr[j+1]: 2 => pass
        // arr[3]: 2 arr[j+1]: -6 => arr = [-3, -2, 1, -6, 2, 3, 5, 6];

        // -----------------

        // arr[0]: -3 arr[j+1]: -2 => pass
        // arr[1]: -2 arr[j+1]: 1 => pass
        // arr[2]: 1 arr[j+1]: -6 => arr = [-3, -2, -6, 1, 2, 3, 5, 6];;
      }
    }
  }

  return answer;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
