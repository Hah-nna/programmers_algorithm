// 내가 해결한 방법
// 뭔가 엉성하게 reduce를 사용했는데 다른 풀이를 보고
// 내가 reduce를 제대로 사용 못 했구나하는 생각이 듦
function solution(num_list) {
  const newArr = [0, 0];
  num_list.reduce((pre, cur) => {
    cur % 2 ? newArr[1]++ : newArr[0]++;
  }, 0);
  return newArr;
}

// 다른 사람의 풀이 방법 중 인상 깊은 방법
// 비트 연산자를 사용해 홀수인지 짝수인지 판별하고
// 누산값 acc([0,0])를 배열을 순회하면서 각 요소를 처리할 때마다
// 현재까지의 누산값을 유지하면서 계산을 하기 위해서 아래와 같이 acc 라는 매개변수를 넣음
function solution(list) {
  return list.reduce(
    (acc, cur) => (cur & 1 ? acc[1]++ : acc[0]++, acc),
    [0, 0]
  );
}

function solution(num_list) {
  return [
    num_list.filter((num) => num % 2 === 0).length,
    num_list.filter((num) => num % 2 === 1).length,
  ];
}
