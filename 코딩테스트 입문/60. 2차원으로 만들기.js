// 내가 해결한 방법
function solution(num_list, n) {
  var answer = [];

  while (num_list.length > 0) {
    answer.push(num_list.splice(0, n));
  }

  return answer;
}

// chatGPT한테 코드 리뷰 받고 수정한 코드
// splice와 달리 원래 배열을 변경하지 않는 slice를 사용한 코드
function solution(num_list, n) {
  var answer = [];

  for (let i = 0; i < num_list.length; i += n) {
    answer.push(num_list.slice(i, i + n));
  }

  return answer;
}

// 다른 사람이 해결한 방법
// 1. while안의 조건이 깔끔해서 마음에 듦
function solution(num_list, n) {
  var answer = [];

  while (num_list.length) {
    answer.push(num_list.splice(0, n));
  }

  return answer;
}

// 2. for문을 사용한 코드
function solution(num_list, n) {
  var answer = [];

  const list_length = num_list.length;

  for (let i = 0; i < list_length / n; i++) {
    let spliced_arr = num_list.splice(0, n);
    answer.push(spliced_arr);
  }

  return answer;
}
