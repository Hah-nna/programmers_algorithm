function solution(s) {
    const strArr = s.split(' ')
    const max = Math.max(...strArr)
    const min = Math.min(...strArr)
    return `${min} ${max}`
}