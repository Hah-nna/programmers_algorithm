function solution(s){
    let a = (s.match(/p/ig) || []).length
    let b = (s.match(/y/ig) || []).length
    
    return a === b ? true : false
}