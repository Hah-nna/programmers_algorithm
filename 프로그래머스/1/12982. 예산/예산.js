// 내가 푼 방법
function solution(d, budget) {
  d.sort((x, y) => x - y);
  let count = 0;
  for (let i = 0; i < d.length; i++) {
    budget -= d[i];
    if (budget > 0) count++;
    else if (budget === 0) {
      count++;
      return count;
    } else if (budget < 0) return count;
  }

  return count;
}

// 남이 푼 방법 (1)
function solution(d, budget) {
  return d
    .sort((a, b) => a - b)
    .reduce((count, price) => {
      return count + ((budget -= price) >= 0);
    }, 0);
}

// 남이 푼 방법 (2)

function solution(d, budget) {
  var answer = 0;
  var index = 0;
  d.sort((a, b) => a - b);

  while (answer + d[index] <= budget) {
    answer += d[index];
    index++;
  }
  return index;
}
