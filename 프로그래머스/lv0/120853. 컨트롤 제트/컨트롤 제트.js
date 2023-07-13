function solution(s) {
    var result = 0;
    let a = s.split(' ').map((val) => {
        if(val === 'Z') return 'Z'
        return Number(val)
    })
    
    for(let i = 0; i < a.length; i++) {
        if(typeof a[i] === 'number') {
            result += a[i]
        } else if(typeof a[i] === 'string') {
            result -= a[i - 1] 
        }
    }
    return result
    // return a.reduce((acc, cur, curIdx) => {
    //     if(typeof cur === 'number') {
    //         acc + cur
    //     } else if(typeof cur === 'object') {
    //         acc - cur[curIdx - 1]
    //     }
    // }, 0)
}