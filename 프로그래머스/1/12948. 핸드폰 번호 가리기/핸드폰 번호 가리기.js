function solution(pn) {
  // let back = [...pn].slice(pn.length - 4).join('')
  // let regexp = /[0-9]/g
  // let front = [...pn].slice(0, pn.length - 4).join('').replaceAll(regexp, '*')
  // return front + back

  let back = [...pn].slice(-4).join("");
  let front = "*".repeat(pn.length - 4);
  return front + back;
}
