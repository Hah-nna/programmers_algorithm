// function solution(a, b) {
//   // 1. q에 push하고 그게 a랑 같으면 ok 아니면 no

//   const subject = [...b];
//   const order = [...a];
//   let arr = [];
//   for (let i = 0, p = 0; i < subject.length; i++) {
//     if (subject[i] === order[p]) arr.push(order[p++]);
//   }
//   return arr.length !== a.length ? "NO" : "YES";
// }

// 2. include

function solution(a, b) {
  const classes = [...a];

  for (let str of b) {
    if (classes.includes(str) && classes[0] === str) {
      classes.shift();
    }
  }
  return classes.length === 0 ? "YES" : "NO";
}
let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b));
