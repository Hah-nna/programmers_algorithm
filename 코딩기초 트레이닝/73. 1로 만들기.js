function solution(num_list) {
  let answer = 0;

  for (let num of num_list) {
    while (num > 1) {
      if (num % 2 == 0) {
        num /= 2;
      } else {
        num -= 1;
        num /= 2;
      }
      answer++;
    }
  }

  return answer;
}

// 1. num_list 순회
// 2. 배열 요소 하나하나가 1보다 큰 경우 계속 반복할 수 있게 while문 사용
// if문을 사용해 요소가 짝수와 홀수 일때 실행할 것을 써준다
