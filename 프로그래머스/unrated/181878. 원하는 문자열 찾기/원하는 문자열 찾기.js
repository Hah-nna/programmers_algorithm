function solution(myString, pat) {
    const str = myString.toLowerCase()
    const particialStr = pat.toLowerCase()
    return str.includes(particialStr) ? 1 : 0
}