function solution(myString) {
    const regex = /[a-k]/g
    return myString.replaceAll(regex, "l")
}