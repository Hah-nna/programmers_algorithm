function solution(str) {
  let stack = [];

  for (let val of str) {
    if (!isNaN(val)) {
      stack.push(+val);
    } else {
      let right = stack.pop();
      let left = stack.pop();

      switch (val) {
        case "+":
          stack.push(left + right);
          break;
        case "-":
          stack.push(left - right);
          break;
        case "*":
          stack.push(left * right);
          break;
        case "/":
          stack.push(left / right);
          break;
      }
    }
  }

  return stack[0];
}

let str = "352+*9-";
console.log(solution(str));
