function solution(s) {
    return s.length % 2 === 0 ? s.substring(parseInt(s.length / 2) - 1, parseInt(s.length / 2)+1) : s.substring(parseInt(s.length / 2), parseInt(s.length / 2)+1) 
}