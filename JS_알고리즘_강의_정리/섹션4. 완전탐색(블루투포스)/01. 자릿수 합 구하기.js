function solution(n, arr) {
  let b = [...arr];

  let result = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let item of b) {
    let sum = String(item)
      .split("")
      .reduce((pre, cur) => {
        return pre + Number(cur);
      }, 0);
    if (sum > max) {
      max = sum;
      result = item;
    } else if (max === sum) {
      if (item > result) result = item;
    }
  }
  return result;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
