function solution(arr, flag) {
  var answer = [];
  for (let i = 0; i < flag.length; i++) {
    if (flag[i]) {
      answer.push(...Array(arr[i] * 2).fill(arr[i]));
      console.log(...Array(arr[i] * 2).fill(arr[i]));
    } else {
      answer.splice(-arr[i]);
    }
  }
  return answer;
}

// 내가 어려웠던 부분
// arr 반복하는 것
// 3*2는 6이 되니까 문자열로 바꾸어서 했는데 이렇게 말고 ...Array를 사용해서 arr[i]를 arr[i]*2번 만큼 반복할 수 있었다... 이거 저번에도 했던 거 같은데?
// Array&fill오늘 또 배운다 많이 쓰이는 패턴 같으니 기억해두자
