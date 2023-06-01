function solution(myString, pat) {
  let count = 0;
  for (let i = 0; i <= myString.length - pat.length; i++) {
    if (myString.substring(i, i + pat.length) === pat) {
      count++;
    }
  }
  return count;
}

//String.prototype.substring(start: number, end=this.length): string

//첫 번째 인수로 전달한 start 인덱스에 해당하는 문자부터
// 두 번째 인자에 전달된 end 인덱스에 해당하는 문자의 **바로 이전 문자까지**를
// 모두 반환함.
//이때 첫 번째 인수 < 두 번째 인수의 관계 성립
