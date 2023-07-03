// 내가 해결한 방법
function solution(str, num1, num2) {
  let newArr = [...str];
  newArr.splice(num1, 1, str[num2]);
  newArr.splice(num2, 1, str[num1]);
  return newArr.join("");
}

// 다른 사람이 해결한 방법
// 디스트럭처링을 사용해 아주 깔끔하게 해결해버렸다
// 알고리즘 강의 들을 때 배웠던 건데 이렇게 사용하면 되겠다!
function solution(my_string, num1, num2) {
  let arr = my_string.split("");
  [arr[num1], arr[num2]] = [arr[num2], arr[num1]];
  return arr.join("");
}
