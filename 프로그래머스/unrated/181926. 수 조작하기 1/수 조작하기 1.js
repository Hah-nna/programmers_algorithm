function solution(n, control) {
    const control2 = [...control]
    for(let item of control2){
        if(item === 'w') n += 1
        if(item === 's') n -= 1
        if(item === 'd') n += 10
        if(item === 'a') n -= 10
    }
    return n
}