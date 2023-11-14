function solution(myString, pat) {
   const newStr = [...myString].map((val) => {
       return val === 'A' ? 'B' : 'A'
   })
   
   return newStr.join("").includes(pat) ? 1 : 0
}