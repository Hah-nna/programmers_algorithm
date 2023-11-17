function solution(myString) {
    return myString.split('x').map((val) => {
        return val.length
    })
}