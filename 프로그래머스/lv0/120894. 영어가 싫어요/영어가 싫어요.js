// 내가 푼 방법
// ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ왜 replaceAll 사용 안 했냐고요...
// 이렇게 푼 내가 너무 민망하다^^...
// 문제 자체도 인덱스 사용하리고 내준 문제인데 ㅎ...
function solution(numbers) {
<<<<<<< HEAD
  let numArr = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "zero",
  ];
  let answer = "";
  let a = "";

  for (let item of numbers) {
    a += item;
    if (a === numArr[0]) {
      answer += "1";
      a = "";
    } else if (a === numArr[1]) {
      answer += "2";
      a = "";
    } else if (a === numArr[2]) {
      answer += "3";
      a = "";
    } else if (a === numArr[3]) {
      answer += "4";
      a = "";
    } else if (a === numArr[4]) {
      answer += "5";
      a = "";
    } else if (a === numArr[5]) {
      answer += "6";
      a = "";
    } else if (a === numArr[6]) {
      answer += "7";
      a = "";
    } else if (a === numArr[7]) {
      answer += "8";
      a = "";
    } else if (a === numArr[8]) {
      answer += "9";
      a = "";
    } else if (a === numArr[9]) {
      answer += "0";
      a = "";
    }
  }
  return Number(answer);
}

// 다른 사람이 푼 방법

//1. forEach + replaceAll 사용
function solution(numbers) {
  let numStr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  numStr.forEach((str, idx) => {
    numbers = numbers.replaceAll(str, idx);
  });
  return Number(numbers);
}

//2. for + replaceAll
function solution(numbers) {
  const repStr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let i = 0; i < 10; i++) {
    numbers = numbers.replaceAll(repStr[i], i);
  }
  return +numbers;
}

// 3. replace의 두 번째 인자
// 객체를 만들어서 replace의 두 번째 인자로 콜백 사용함
// 이건 몰랐네

function solution(numbers) {
  const obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const num = numbers.replace(
    /zero|one|two|three|four|five|six|seven|eight|nine/g,
    (v) => {
      return obj[v];
    }
  );

  return Number(num);
}
=======
    let numArr = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    
    numArr.forEach((str, idx) => {
        console.log(str, idx)
        numbers = numbers.replaceAll(str, idx)
        console.log(numbers)
    })
     return Number(numbers)
    }

>>>>>>> 7f7cd8c2757089805655334c57107343630e7a05
