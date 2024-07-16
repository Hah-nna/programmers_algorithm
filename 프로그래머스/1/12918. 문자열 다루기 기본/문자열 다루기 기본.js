function solution(s) {
    const regexp = /\D/ig
    let a = s.match(regexp)
    // let answer = true
    
    if(s.length === 4 || s.length === 6) {
         return a ? false : true   
    } else return false 
}