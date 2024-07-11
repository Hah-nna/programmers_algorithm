function solution(pn) {
  let a = [...pn].slice(pn.length - 4).join("");
  // let b = pn.split(a).join('')
  let regexp = /[0-9]/g;
  let b = [...pn]
    .slice(0, pn.length - 4)
    .join("")
    .replaceAll(regexp, "*");
  return b + a;
}
