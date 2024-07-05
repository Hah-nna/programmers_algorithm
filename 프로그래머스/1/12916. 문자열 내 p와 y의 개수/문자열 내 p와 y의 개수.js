function solution(s){
    var answer = true;
    let str = s.toLowerCase()
    let a=b=0;
    
    for(let i of str) {
        if(i === 'p') a++
        else if(i === 'y') b++
    }
    return a === b ? answer : false
}