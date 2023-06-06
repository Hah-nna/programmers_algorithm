// 내가 해결한 방법
function solution(a, b) {
  return String(BigInt(a) + BigInt(b));
}

/**
 *  2^53 - 1보다 큰 정수를 어떻게 처리할까 고민하다가
 * 구글링 통해 알게 된 BigInt()
 * BigInt는 정수 리터럴의 뒤에 n을 붙이거나(10n) 함수 BigInt()를 호출해 생성할 수 있다고 한다
 * ex : 
 * const theBiggestInt = 9007199254740991n;

const alsoHuge = BigInt(9007199254740991);
// 9007199254740991n

const hugeString = BigInt("9007199254740991");
// 9007199254740991n

const hugeBin = BigInt("0b11111111111111111111111111111111111111111111111111111");
// 9007199254740991n

- Math 메소드와 사용X
- 연산에서 Number와 혼합 사용X
- 연산자와 사용 가능하지만 `/`연산자를 사용하는 경우
소수점 이하를 버림 === 정수가 아닌 결과는 나오지 않음
ex : const rounded = 5n / 2n; // 2.5n이 아니라 2n

- 다음의 경우에는 Number처럼 행동함
    1. Boolean 함수를 사용해 Boolean 객체로 변환
    2. 논리 연산자 ||, &&, !와 함께 사용 시
    3. if문 등 조건 판별 시

    ex:
    if (0n) {
  console.log('if에서 안녕!');
} else {
  console.log('else에서 안녕!');
}

// "else에서 안녕!"

0n || 12n // 12n

0n && 12n // 0n

Boolean(0n) // false

Boolean(12n) // true

!12n // false

!0n // true 

- BigInt를 Number로 변환하는 과정에서 정확도를 유실할 수 있으므로, 2^53보다 큰 값을 예상할 수 있는 경우 BigInt만 사용하는 것이 좋음
- BigInt가 지원하는 연산의 소요시간은 상수 시간이 아니기 때문에 암호화에 적합하지 않음

참고 : 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
- https://ko.javascript.info/bigint
 */

// 다른 사람의 방법 중 인상 깊었던 방법
function solution(a, b) {
  return `${BigInt(a) + BigInt(b)}`;
}
