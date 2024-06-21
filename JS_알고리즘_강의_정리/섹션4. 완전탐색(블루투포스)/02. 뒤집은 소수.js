// 숫자들을 뒤집고 뭔가 소수를 반펼하는 함수에 뒤집은 각각의 요소를 인자로 주면 좋을 것 같다는 접근까지는 했는데
// 소수를 어떻게 구해야할 지 몰랐다
// prime 함수의 인자로 들어오는 숫자가 1이면 false 리턴
// num과 i를 나눈 몫이 0 이면 약수이기 때문에 소수가 아님(1과 자기 자신으로만 나누어 지는 놈)
// for문을 다 돌고도 false가 없다면 true리턴
// solution 함수에서 숫자를 뒤집을 때 메소드 범벅으로 풀었는데
// 강사님은 다르게 풀었다 다시 이해하면서 코드를 작성해봐야겠다
function prime(num) {
  if (num == 1) return false;
  for (let i = 2; i < parseInt(num / 2); i++) {
    // console.log("num , i,  num% i", num, i, num % i);
    if (num % i === 0) return false;
  }
  return true;
}

function solution(arr) {
  let a = [];
  for (let item of arr) {
    let c = Number(String(item).split("").reverse().join(""));
    if (prime(c)) a.push(c);
  }
  return a;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));

// 내가 다시 푼 방법

function isPrime(num) {
  if (num === 1) return false;
  if (num === 2) return true;

  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function solution(arr) {
  let num = "";
  let answer = "";
  // 두ㅣ집기
  // 소수인지 판별
  // 소수라면 answer에 더하기

  for (let i = 0; i < arr.length; i++) {
    let split = String(arr[i]).split("");
    num = 0;

    for (let j = split.length - 1; j >= 0; j--) {
      num += split[j];
    }

    const primeNumber = isPrime(Number(num));
    if (primeNumber) {
      let a = +num;
      console.log("a", a);
      answer += String(a) + " ";
    }
  }

  return answer;
}
