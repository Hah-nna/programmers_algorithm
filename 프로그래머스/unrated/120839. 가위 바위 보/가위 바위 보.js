function solution(rsp) {
    return [...rsp].map((val) =>{
        if(val === '2') return '0'
        if(val === '0') return '5'
        if(val === '5') return '2'
     }).join("")
}