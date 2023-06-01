function solution(myString) {
  return myString
    .split("x")
    .sort()
    .filter((x) => !!x);
}

//NOT을 두 개 연달아 사용(!!)하면 값을 불린형으로 변환할 수 있습니다.

//alert( !!"non-empty string" ); // true
//alert( !!null ); // false
//이때, 첫 번째 NOT 연산자는 피연산자로 받은 값을 불린형으로 변환한 후 이 값의 역을 반환하고, 두 번째 NOT 연산자는 첫 번째 NOT 연산자가 반환한 값의 역을 반환합니다. 이렇게 NOT을 연달아 사용하면 특정 값을 불린형으로 변환할 수 있습니다.
//참고로, 내장 함수 Boolean을 사용하면 !!을 사용한 것과 같은 결과를 도출할 수 있습니다.
